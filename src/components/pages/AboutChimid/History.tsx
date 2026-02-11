import { TimelineCard } from "@/components/common"
import { client } from "@/sanity/lib/client"
import { getHistory } from "@/sanity/lib/queries"

export default async function History() {
  const history = await client.fetch(getHistory)

  let total = 0

  return (
    <div className='container pb-64'>
      {/* eslint-disable @typescript-eslint/no-explicit-any */}
      {history.map((item: any, index: number) => (
        <div key={index} className='w-full'>
          <p className='f-heading-3 w-fit p-8 border-y mx-auto border-dashed border-primary'>
            {item.title}
          </p>
          {/* eslint-disable @typescript-eslint/no-explicit-any */}
          {item.events.map((year: any, eventIndex: number) => {
            total = total + 1
            const alignment = total % 2 === 0
            return (
              <div key={eventIndex} className='relative md:min-h-[360px]'>
                <div className='hidden md:block absolute right-1/2 translate-x-1/2 h-full w-2 bg-accent-2' />
                <div
                  className={`md:flex py-40 relative ${
                    alignment && "lg:flex-row-reverse"
                  }`}
                >
                  <div className='hidden md:block absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-9 h-9 bg-accent-2' />
                  <div className='w-cols-6 md:mr-inner flex items-center h-[340px] md:h-auto'>
                    <TimelineCard photos={year.images} alignment={alignment} />
                  </div>
                  <div className='w-cols-6 py-32'>
                    <div className='md:px-cols-1 space-y-24 flex flex-col justify-center'>
                      <p className='f-heading-4 text-accent'>
                        {year.yearRange}
                      </p>
                      <p className='f-body text-primary'>{year.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
