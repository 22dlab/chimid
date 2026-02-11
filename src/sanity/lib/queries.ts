import { groq } from "next-sanity"

const Image = `
  asset -> {
    url,
    metadata {
      lqip,
      dimensions {
        aspectRatio,
        height,
        width
      }
    }
  }
`

export const getLeadership = groq`
  *[_type == "leadership"] | order(orderRank) {
    _id,
    name,
    position,
    profile {
      ${Image}
    }
  }
`
export const getHistory = groq`
  *[_type == "history"] | order(orderRank) {
    _id,
    title,
    events[] {
      yearRange,
      description,
      images[] {
        ${Image}
      }
    }
  }
`

export const getCampaign = groq`
  *[_type == "campaign"] | order(orderRank) {
    _id,
    name,
    description,
    type,
    coverImage {
      ${Image}
    }
  }
`

export const getPartners = groq`
  *[_type == "partner"] | order(_createdAt desc) {
    _id,
    name,
    photo {
      ${Image}
    }
  }
`

export const getNews = groq`
  *[_type == "news"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    thumbnail {
      ${Image}
    }
  }
`

export const getNewsDetail = groq`
  *[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    body,
    slug,
    date,
    thumbnail {
      ${Image}
    },
    content[]{
      _type,
      style,
      ${Image},
      children
    }
  }
`

export const getGallery = groq`
  *[_type == "gallery"] | order(_createdAt desc) {
    _id,
    caption,
    photo {
      ${Image}
    }
  }
`
