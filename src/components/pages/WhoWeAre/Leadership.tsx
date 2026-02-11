import SanityImage from "@/components/common/SanityImage"
import { client } from "@/sanity/lib/client"
import { getLeadership } from "@/sanity/lib/queries"

import Image from "next/image"

export default async function Leadership() {
  const team = await client.fetch(getLeadership)

  return (
    <div className='container pt-72 pb-100 space-y-36'>
      <div className='lg:mx-cols-1 border-t border-primary pt-48'>
        <p className='f-heading-1'>Leadership Team</p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:mx-cols-1 gap-inner'>
        {/* eslint-disable @typescript-eslint/no-explicit-any */}
        {team.map((item: any, index: number) => (
          <div key={index} className='w-full'>
            <div className='w-full aspect-square relative'>
              {!item.profile ? (
                <Image
                  src='/media/placeholder.png'
                  fill
                  className='object-cover'
                  alt='leader'
                />
              ) : (
                <SanityImage
                  image={item.profile}
                  className='object-cover'
                  alt='leader'
                />
              )}
            </div>
            <p className='f-ui-1 mt-16'>{item.name}</p>
            <p className='f-ui-2 text-secondary mt-8'>{item.position}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
