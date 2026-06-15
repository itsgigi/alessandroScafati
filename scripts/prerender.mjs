// Post-build prerender pass: renders each route with a headless browser
// (so CMS-fetched content is included) and writes the result as static HTML
// into dist/, so crawlers that don't execute JS still see real content.
import { preview } from 'vite'
import { request, gql } from 'graphql-request'
import { config as loadEnv } from 'dotenv'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

loadEnv()

const HYGRAPH_URL = process.env.VITE_HYGRAPH_API_URL

const STATIC_ROUTES = ['/', '/casting', '/showreel', '/eventi', '/curriculum', '/book', '/press', '/contatti', '/privacy']

async function getDynamicRoutes() {
  const routes = []

  try {
    const eventsQuery = gql`
      query getEventIds {
        events {
          eventEntry(first: 100) {
            id
          }
        }
      }
    `
    const eventsResult = await request(HYGRAPH_URL, eventsQuery)
    for (const evt of eventsResult.events ?? []) {
      for (const entry of evt.eventEntry ?? []) {
        routes.push(`/eventi/${entry.id}`)
      }
    }
  } catch (err) {
    console.warn('[prerender] failed to fetch event ids:', err.message)
  }

  try {
    const articlesQuery = gql`
      query getArticleIds {
        articles(first: 100) {
          id
        }
      }
    `
    const articlesResult = await request(HYGRAPH_URL, articlesQuery)
    for (const article of articlesResult.articles ?? []) {
      routes.push(`/press/${article.id}`)
    }
  } catch (err) {
    console.warn('[prerender] failed to fetch article ids:', err.message)
  }

  return routes
}

function routeToFilePath(route) {
  if (route === '/') return 'index.html'
  return `${route.replace(/^\//, '')}.html`
}

// Vercel's build image lacks the shared libs (libnspr4 etc.) puppeteer's
// bundled Chrome needs, so use @sparticuz/chromium's prebuilt binary there.
// Locally, plain puppeteer's bundled Chrome works fine.
async function launchBrowser() {
  if (process.env.VERCEL) {
    const chromium = (await import('@sparticuz/chromium')).default
    const puppeteer = (await import('puppeteer-core')).default
    return puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    })
  }

  const puppeteer = (await import('puppeteer')).default
  return puppeteer.launch({ headless: true })
}

async function main() {
  const routes = [...STATIC_ROUTES, ...(await getDynamicRoutes())]
  console.log(`[prerender] rendering ${routes.length} routes:`, routes)

  const server = await preview({ preview: { port: 4173, host: '127.0.0.1' } })
  const baseUrl = `http://127.0.0.1:${server.config.preview.port}`

  const browser = await launchBrowser()

  // Render everything into memory first: the dist/ output is also served by
  // the preview server's SPA fallback for routes not yet rendered, so writing
  // files mid-loop would leak an already-mutated index.html into later pages.
  const rendered = new Map()

  try {
    for (const route of routes) {
      const page = await browser.newPage()
      try {
        await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0', timeout: 60000 })
        // give React a moment to flush state updates after data fetches resolve
        await new Promise((resolve) => setTimeout(resolve, 500))
        const html = await page.content()
        rendered.set(route, html)
      } catch (err) {
        console.error(`[prerender] failed for ${route}:`, err.message)
      } finally {
        await page.close()
      }
    }
  } finally {
    await browser.close()
    await server.close()
  }

  for (const [route, html] of rendered) {
    const outPath = join('dist', routeToFilePath(route))
    await mkdir(dirname(outPath), { recursive: true })
    await writeFile(outPath, html)
    console.log(`[prerender] wrote ${outPath}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
