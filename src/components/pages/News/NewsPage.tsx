import News from "./News"
import Gallery from "./Gallery"

import { client } from "@/sanity/lib/client"
import { getNews, getGallery } from "@/sanity/lib/queries"

export default async function NewsPage() {
  const news = await client.fetch(getNews)
  const gallery = await client.fetch(getGallery)

  return (
    <div className='bg-primary text-primary'>
      <News news={news} />
      <div className='container h-1 bg-accent-2'></div>
      <Gallery gallery={gallery} />
    </div>
  )
}
