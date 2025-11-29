/* eslint-disable @typescript-eslint/no-explicit-any */
import { request, gql } from 'graphql-request'
import type { 
    Article,
    Bio, 
    Media, 
    YoutubeVideo,
    Curriculum,
    Experience,
    Showreel,
    EventDto,
    CurriculumPdfDto
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
                displayOrder
                title
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
                images(first: 100) {
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

const getEvents = async (): Promise<{ events: EventDto[] }> => {
    const query = gql`
        query getEvents {
            events {
                eventEntry(first: 100)  {
                    id
                    bookingUrl
                    description
                    image {
                        url
                    }
                    isTicketAvailable
                    location
                    title
                    type
                    dates
                }
            }
        }
    `
    const result = await request(MASTER_URL, query) as any
    return result
}

const getEventById = async (id: string): Promise<{ events: EventDto[] }> => {
    const query = gql`
        query getEventById {
            events {
                eventEntry(where: {id: "`+id+`"}) {
                    id
                    bookingUrl
                    description
                    image {
                        url
                    }
                    isTicketAvailable
                    location
                    title
                    type
                    dates
                }
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
                cinema(first: 100) {
                    description
                    role
                    year
                    endYear
                }
                teather(first: 100) {
                    description
                    role
                    year
                    endYear
                }
                television(first: 100) {
                    description
                    role
                    year
                    endYear
                }
                advertise(first: 100) {
                    description
                    role
                    year
                    endYear
                }
                videoclip(first: 100) {
                    description
                    role
                    year
                    endYear
                }
                web(first: 100) {
                    description
                    role
                    year
                    endYear
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

const getCurriculumPdf = async (): Promise<{ curriculumPdfs: CurriculumPdfDto[] }> => {
    const query = gql`
        query getCurriculumPdf {
            curriculumPdfs {
                cvFile {
                    url
                    fileName
                    mimeType
                    size
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
    getEvents,
    getEventById,
    getCurriculum,
    getExperiences,
    getShowreel,
    getCurriculumPdf
}