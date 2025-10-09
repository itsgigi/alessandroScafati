/* eslint-disable @typescript-eslint/no-explicit-any */
import { request, gql } from 'graphql-request'
import type { 
    Article,
    Bio, 
    Media, 
    YoutubeVideo
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

export default {
    getBio,
    getYoutubeVideos,
    getMedia,
    getArticles,
    getArticleById,
    getHomeImages,
}