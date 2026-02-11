import { client } from "@/sanity/lib/client"
import { getNewsDetail } from "@/sanity/lib/queries"
import NewsDetailPage from "@/components/pages/News/NewsDetailPage"

export const revalidate = 60

export default async function DetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const news = await client.fetch(getNewsDetail, { slug: slug })

  return (
    <div className='bg-primary text-primary'>
      <NewsDetailPage news={news} />
    </div>
  )
}
