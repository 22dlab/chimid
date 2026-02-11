import Link from "next/link"
import Image from "next/image"

import { ArrowRight } from "@carbon/icons-react"
import { client } from "@/sanity/lib/client"
import { getPartners } from "@/sanity/lib/queries"
import SanityImage from "@/components/common/SanityImage"

export default async function Exlore() {
  const partners = await client.fetch(getPartners)

  return (
    <div className='py-72 space-y-48 xl:mx-auto xl:max-w-[1440px]'>
      <div className='container'>
        <p className='lg:ml-cols-1 f-heading-1'>Explore what we do</p>
      </div>
      <div className='hidden lg:block'>
        <div className='flex items-center xl:px-32'>
          <div className='w-cols-6 pl-outer mr-inner'>
            <div className='space-y-24 text-primary px-cols-1 xl:px-cols-vw-1'>
              <p className='f-heading-2'>Legal Education</p>
              <p className='f-body'>
                Empowering citizens, public servants, and young people with deep
                understanding of constitutional principles, fostering a culture
                of respect for legal supremacy and democratic values.
              </p>
              <Link
                href='/what-we-do#legal'
                className='py-16 px-24 border border-primary text-primary w-fit flex items-center justify-center space-x-8'
              >
                <span className='f-ui-3'>Learn More</span>
                <ArrowRight size='16' className='text-accent' />
              </Link>
            </div>
          </div>
          <div className='w-cols-6 aspect-[3/2] relative'>
            <Image
              src='/media/legal.jpg'
              fill
              className='object-cover'
              alt='image'
            />
          </div>
        </div>
        <div className='flex items-center'>
          <div className='w-cols-6 aspect-[3/2] relative'>
            <Image
              src='/media/public.png'
              fill
              className='object-cover'
              alt='image'
            />
          </div>
          <div className='w-cols-6 pl-outer ml-inner'>
            <div className='space-y-24 text-primary px-cols-1 xl:px-cols-vw-1'>
              <p className='f-heading-2'>Public Outreach</p>
              <p className='f-body'>
                Advancing legal scholarship through rigorous research, academic
                conferences, and competitions that develop critical thinking and
                contribute to the evolution of constitutional law in Mongolia.
              </p>
              <Link
                href='/what-we-do#public'
                className='py-16 px-24 border border-primary text-primary w-fit flex items-center justify-center space-x-8'
              >
                <span className='f-ui-3'>Learn More</span>
                <ArrowRight size='16' className='text-accent' />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden container md:flex space-y-40 md:space-y-0'>
        <div className='w-full md:w-cols-4 md:mr-inner space-y-24'>
          <div className='w-full aspect-[3/2] relative'>
            <Image
              src='/media/legal.jpg'
              fill
              className='object-cover'
              alt='image'
            />
          </div>
          <div className='space-y-24 text-primary'>
            <p className='f-heading-2'>Legal Education</p>
            <p className='f-body'>
              Empowering citizens, public servants, and young people with deep
              understanding of constitutional principles, fostering a culture of
              respect for legal supremacy and democratic values.
            </p>
            <Link
              href='/what-we-do#legal'
              className='py-16 px-24 border border-primary text-primary w-fit flex items-center justify-center space-x-8'
            >
              <span className='f-ui-3'>Learn More</span>
              <ArrowRight size='16' className='text-accent' />
            </Link>
          </div>
        </div>
        <div className='w-full md:w-cols-4 space-y-24'>
          <div className='w-full aspect-[3/2] relative'>
            <Image
              src='/media/public.png'
              fill
              className='object-cover'
              alt='image'
            />
          </div>
          <div className='space-y-24 text-primary'>
            <p className='f-heading-2'>Public Outreach</p>
            <p className='f-body'>
              Advancing legal scholarship through rigorous research, academic
              conferences, and competitions that develop critical thinking and
              contribute to the evolution of constitutional law in Mongolia.
            </p>
            <Link
              href='/what-we-do#public'
              className='py-16 px-24 border border-primary text-primary w-fit flex items-center justify-center space-x-8'
            >
              <span className='f-ui-3'>Learn More</span>
              <ArrowRight size='16' className='text-accent' />
            </Link>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='lg:px-cols-1'>
          <div className='w-full border-t border-primary py-48'>
            <p className='f-heading-1'>Partners</p>
            <p className='f-body mt-24'>
              Together, we build stronger democratic foundations through
              collaborative efforts and shared commitment to constitutional
              excellence.
            </p>
            <div className='grid grid-cols-3 lg:grid-cols-5 gap-gutter mt-36'>
              {/* eslint-disable @typescript-eslint/no-explicit-any */}
              {partners.map((item: any, index: number) => (
                <div key={index} className='w-full aspect-[2/1] relative'>
                  <SanityImage
                    image={item.photo}
                    className='object-cover object-center'
                    alt={item.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
