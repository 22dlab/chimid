import SanityImage from "@/components/common/SanityImage"

import Link from "next/link"

import { PortableText, PortableTextComponents } from "next-sanity"

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function NewsDetailPage({ news }: { news: any }) {
  const formatDate = new Date(news.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })

  const components: PortableTextComponents = {
    types: {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      image: (children: any) => (
        <div className='w-full aspect-[2/1] relative'>
          <SanityImage
            image={children.value}
            className='object-center object-cover'
            alt='image'
          />
        </div>
      )
    },
    block: {
      h1: ({ children }) => <h1 className='f-heading-1'>{children}</h1>,
      h2: ({ children }) => <h2 className='f-heading-2'>{children}</h2>,
      h3: ({ children }) => <h3 className='f-heading-3'>{children}</h3>
    },
    list: {
      bullet: ({ children }) => (
        <ul className='list-disc list-outside ml-24'>{children}</ul>
      )
    }
  }

  return (
    <div className='container pt-104 pb-200'>
      <div className='lg:px-cols-1'>
        <div className='py-48 md:py-64 border-b border-primary'>
          <Link href='/news' className='w-fit'>
            <div className='flex items-center space-x-8'>
              <svg
                width='16'
                height='17'
                viewBox='0 0 16 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7 13.5L7.705 12.795L3.915 9H14V8H3.915L7.705 4.205L7 3.5L2 8.5L7 13.5Z'
                  fill='#C39039'
                />
              </svg>
              <p className='f-ui-2'>Back to news</p>
            </div>
          </Link>
          <p className='f-heading-1 mt-24'>{news.title}</p>
        </div>
        <div className='relative w-full aspect-video mt-48 md:mt-64'>
          <SanityImage
            image={news.thumbnail}
            className='object-cover'
            alt={news.title}
          />
        </div>
        <div className='md:flex mt-24 md:mt-64 space-y-32 md:space-y-0'>
          <div className='w-full md:w-cols-2 lg:w-cols-3 md:mr-inner space-y-12 border-b border-primary md:border-none pb-16'>
            <p className='f-ui-1'>Date</p>
            <p className='f-ui-2'>{formatDate}</p>
          </div>
          <div className='w-cols-6 lg:w-cols-7 f-body-1 space-y-16'>
            <PortableText value={news.content} components={components} />
          </div>
        </div>
      </div>
    </div>
  )
}
