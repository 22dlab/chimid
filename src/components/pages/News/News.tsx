"use client"

import Link from "next/link"
import SanityImage from "@/components/common/SanityImage"
import { useState } from "react"

/* eslint-disable @typescript-eslint/no-explicit-any */
function NewsCard({ item }: { item: any }) {
  return (
    <div className='col-span-1'>
      <Link href={`/news/${item.slug?.current}`} className='w-full space-y-24'>
        <div className='relative w-full aspect-[3/2]'>
          <SanityImage
            image={item.thumbnail}
            className='object-cover'
            alt='image'
          />
        </div>
        <p className='f-heading-3 line-clamp-3'>{item.title}</p>
      </Link>
    </div>
  )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function News({ news }: { news: any[] }) {
  const itemPerPage = 6
  const [pagination, setPagination] = useState(0)
  const totalPages = Math.ceil(news.length / itemPerPage)

  const startIndex = pagination * itemPerPage
  const endIndex = startIndex + itemPerPage
  const visibleNews = news.slice(startIndex, endIndex)

  return (
    <div className='container pt-128 md:pt-200 pb-64 md:pb-100'>
      <p className='f-heading-1'>News</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-inner mt-36'>
        {/* eslint-disable @typescript-eslint/no-explicit-any */}
        {visibleNews.map((item: any, index: number) => (
          <NewsCard key={startIndex + index} item={item} />
        ))}
      </div>
      <div className='mt-36 flex justify-between items-center'>
        <div className='flex space-x-8'>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPagination(i)}
              className={`w-8 h-8 rounded-full bg-accent-2 cursor-pointer ${
                i === pagination ? "opacity-100" : "opacity-20"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
        <div className='flex items-center justify-center space-x-16'>
          <button
            disabled={pagination === 0}
            onClick={() => setPagination((p) => p - 1)}
            className='border border-[#00000026] rounded-full p-12 cursor-pointer'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.7069 17.293L8.41394 13H17.9999V11H8.41394L12.7069 6.70697L11.2929 5.29297L4.58594 12L11.2929 18.707L12.7069 17.293Z'
                fill='#C39039'
              />
            </svg>
          </button>
          <button
            disabled={endIndex >= news.length}
            onClick={() => setPagination((p) => p + 1)}
            className='border border-[#00000026] rounded-full p-12 cursor-pointer'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='rotate-180'
            >
              <path
                d='M12.7069 17.293L8.41394 13H17.9999V11H8.41394L12.7069 6.70697L11.2929 5.29297L4.58594 12L11.2929 18.707L12.7069 17.293Z'
                fill='#C39039'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
