import SanityImage from "@/components/common/SanityImage"
import { client } from "@/sanity/lib/client"
import { getCampaign } from "@/sanity/lib/queries"

/* eslint-disable @typescript-eslint/no-explicit-any */
function CampaignCard({ item }: { item: any }) {
  return (
    <div className='md:flex space-y-24 md:space-y-0'>
      <div className='w-full md:w-cols-4 lg:w-cols-vw-3 aspect-[3/2] relative mr-inner'>
        <SanityImage
          image={item.coverImage}
          alt={item.name}
          className='object-cover'
        />
      </div>
      <div className='border-t-1 border-primary w-full md:w-cols-4 lg:w-cols-vw-7 py-12 space-y-16'>
        <p className='f-heading-3'>{item.name}</p>
        <p className='f-body'>{item.description}</p>
      </div>
    </div>
  )
}

export default async function Campaigns() {
  const campaigns = await client.fetch(getCampaign)

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const legal = campaigns.filter((item: any) => item.type === "legalEducation")

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const outreach = campaigns.filter(
    (item: any) => item.type === "publicOutreach"
  )

  return (
    <div className='container py-48'>
      <div className='lg:px-cols-1 space-y-[56px] scroll-mt-[152px]' id='legal'>
        {/* eslint-disable @typescript-eslint/no-explicit-any */}
        <p className='f-heading-2'>Legal Education</p>
        <div className='space-y-48'>
          {legal.map((item: any, index: number) => (
            <CampaignCard key={index} item={item} />
          ))}
        </div>
      </div>
      <div className='lg:mx-cols-1 h-1 bg-accent-2 my-48' />
      <div
        className='lg:px-cols-1 space-y-[56px] scroll-mt-[152px]'
        id='public'
      >
        {/* eslint-disable @typescript-eslint/no-explicit-any */}
        <p className='f-heading-2'>Public Outreach</p>
        <div className='space-y-48'>
          {outreach.map((item: any, index: number) => (
            <CampaignCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
