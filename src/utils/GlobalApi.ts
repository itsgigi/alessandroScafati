/* eslint-disable @typescript-eslint/no-explicit-any */
import { request, gql } from 'graphql-request'
import type { 
    Article,
    Bio, 
    Media, 
    YoutubeVideo,
    Event,
    Curriculum,
    Experience,
    Showreel
} from './types'

const MASTER_URL = import.meta.env.VITE_HYGRAPH_API_URL

const getBio = async (): Promise<{ bios: Bio[] }> => {
    const query = gql`
        query GetBio {
            bios {
                content
            }
        }
    `
    
    const result = await request(MASTER_URL, query) as { bios: Bio[] }
    return result
}

const getYoutubeVideos = async (): Promise<{ videos: YoutubeVideo[] }> => {
    const query = gql`
        query GetYoutubeVideos {
            videos {
                videoUrl
            }
        }
    `
    
    const result = await request(MASTER_URL, query) as { videos: YoutubeVideo[] }
    return result
}

const getMedia = async (): Promise<{ books: { images: Media[] }[] }> => {
    const query = gql`
        query getMedia {
            books {
                images {
                    id
                    size
                    height
                    url
                }
            }
        }
    `
    
    const result = await request(MASTER_URL, query)
    return result as any
}

const getArticles = async (): Promise<{ articles: Article[] }> => {
    const query = gql`
        query getArticles {
            articles(first: 100) {
                id
                title
                author
                category
                content
                image {
                    url
                }
                publisher
                subtitle
                createdAt
            }
        }
    `
    
    const result = await request(MASTER_URL, query)
    return result as any
}

const getArticleById = async (id: string): Promise<{ articles: Article[] }> => {
    const query = gql`
        query getArticleById {
            articles(where: {id: "`+id+`"}) {
                id
                title
                author
                category
                content
                image {
                    url
                }
                publisher
                subtitle
                createdAt
                articleUrl
            }
        }
    `

    const result = await request(MASTER_URL, query)
    return result as any
}

const getHomeImages = async (): Promise<{ homeImages: { images: Media[] }[] }> => {
    const query = gql`
        query getHomeImages {
            homeImages {
                images(first: 100) {
                    url
                }
            }
        }
    `
    const result = await request(MASTER_URL, query)
    return result as any
}

const getEvents = async (): Promise<{ events: Event[] }> => {
    const query = gql`
        query getEvents {
            events(first: 100) {
                id
                bookingUrl
                description
                image {
                    url
                }
                isTIcketAvailable
                location
                title
                type
                dates
            }
        }
    `
    const result = await request(MASTER_URL, query) as {
        events: Array<{
            id: string
            bookingUrl: string
            description: string
            image: { url: string }
            isTIcketAvailable: boolean
            location: string
            title: string
            type: string
            dates: string[]
        }>
    }

    const mapped: Event[] = result.events.map((e) => ({
        id: e.id,
        bookingUrl: e.bookingUrl,
        description: e.description,
        image: { url: e.image?.url ?? '' },
        isTIcketAvailable: e.isTIcketAvailable,
        location: e.location,
        title: e.title,
        type: e.type,
        dates: Array.isArray(e.dates) ? e.dates.map((d) => d) : []
    }))

    return { events: mapped }
}

const getEventById = async (id: string): Promise<{ events: Event[] }> => {
    const query = gql`
        query getEventById {
            events(where: {id: "`+id+`"}) {
                id
                bookingUrl
                description
                image {
                    url
                }
                isTIcketAvailable
                location
                title
                type
                dates
            }
        }
    `

    const result = await request(MASTER_URL, query)
    return result as any
}

const getCurriculum = async (): Promise<{ curricula: Curriculum[] }> => {
    const query = gql`
        query getCurriculum {
            curricula {
                experience
                prizes {
                    html
                }
                studies {
                    html
                }
            }
        }
    `

    const result = await request(MASTER_URL, query)
    return result as any
}

const getExperiences = async (): Promise<{ experiences: Experience[] }> => {
    const query = gql`
        query getExperiences {
            experiences(first: 100) {
                cinema {
                    description
                    role
                    year
                }
                teather {
                    description
                    role
                    year
                }
                television {
                    description
                    role
                    year
                }
                advertise {
                    description
                    role
                    year
                }
            }
        }
    `

    const result = await request(MASTER_URL, query)
    return result as any
}

const getShowreel = async (): Promise<{ showreels: Showreel[] }> => {
    const query = gql`
        query getShowreel {
            showreels {
                title
                url
            }
        }
    `

    const result = await request(MASTER_URL, query)
    return result as any
}

export default {
    getBio,
    getYoutubeVideos,
    getMedia,
    getArticles,
    getArticleById,
    getHomeImages,
    getEvents,
    getEventById,
    getCurriculum,
    getExperiences,
    getShowreel
}