"use client"

import { ArrowRight } from "@carbon/icons-react"
import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"

import { useEffect, useState } from "react"

export function TimelineCard() {
  const [xOffset, setXOffset] = useState({ left: -250, right: 250 })

  useEffect(() => {
    const updateX = () => {
      const width = window.innerWidth

      if (width < 924) {
        setXOffset({ left: -160, right: 160 })
      } else if (width < 1440) {
        setXOffset({ left: -160, right: 160 })
      } else {
        setXOffset({ left: -250, right: 250 })
      }
    }

    updateX()
    window.addEventListener("resize", updateX)
    return () => window.removeEventListener("resize", updateX)
  }, [])

  return (
    <div className='relative w-full h-full'>
      {/* Left Photo */}
      <motion.div
        initial={{ rotate: -10, x: xOffset.left }}
        whileInView={{ rotate: -10, x: xOffset.left }}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 md:-translate-y-1/2 origin-top-right z-[1] md:z-[3]'
      >
        <div className='px-16 pt-16 py-32 bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)] w-fit -translate-y-48 lg:translate-y-0'>
          <div className='h-[180px] lg:h-[200px] w-[135px] lg:w-[160px] relative'>
            <Image
              src='/media/legacy-1.png'
              fill
              className='object-cover object-top'
              alt='photocard'
            />
          </div>
        </div>
      </motion.div>

      <div className='absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 md:-translate-y-1/2'>
        <div className='px-16 pt-16 py-32 bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)] w-fit'>
          <div className='h-[180px] lg:h-[200px] w-[240px] lg:w-[260px] relative'>
            <Image
              src='/media/legacy-2.png'
              fill
              className='object-cover object-top'
              alt='photocard'
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ rotate: 10, x: xOffset.right }}
        whileInView={{ rotate: 10, x: xOffset.right }}
        className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 md:-translate-y-1/2 origin-top-left z-[1]'
      >
        <div className='px-16 pt-16 py-32 bg-white shadow-[0_0_8px_rgba(0,0,0,0.25)] w-fit translate-y-48 lg:translate-y-0'>
          <div className='h-[180px] lg:h-[200px] w-[135px] lg:w-[160px] relative'>
            <Image
              src='/media/legacy-3.png'
              fill
              className='object-cover object-top'
              alt='photocard'
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function Legacy() {
  return (
    <div className='w-full relative bg-inverse overflow-hidden'>
      <Image
        src='/media/chimid-ascii.png'
        fill
        className='object-cover mix-blend-multiply object-[40%_50%] md:object-center'
        alt='legacy'
      />
      <Image
        src='/media/document-ascii.png'
        fill
        className='object-cover mix-blend-multiply opacity-20'
        alt='document'
      />
      <div className='container flex-col-reverse md:flex-row flex'>
        <div className='w-full md:w-cols-4 lg:w-cols-6 mr-inner'>
          <div className='lg:px-cols-1 pt-480 md:pt-124 pb-64 lg:py-100 mix-blend-normal'>
            <div className='text-primary-inverse space-y-24 relative'>
              <p className='f-heading-1'>Legacy of Chimid Byaraa</p>
              <p className='f-caption'>
                A remarkable statesman, educator, and constitutional architect,
                Professor Byaraa Chimid dedicated his life to Mongolia&apos;s
                democratic development. Recognized as a Hero of Labour,
                People&apos;s Teacher, and Honoured Lawyer, his profound
                contributions continue to inspire our foundation&apos;s
                commitment to constitutional excellence.
              </p>
              <Link
                href='/about-chimid'
                className='py-16 px-24 bg-primary text-primary w-fit flex items-center justify-center space-x-8'
              >
                <span className='f-ui-3'>Learn More About Chimid Byaraa</span>
                <ArrowRight size='16' className='text-accent' />
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full md:w-cols-4 lg:w-cols-6'>
          <TimelineCard />
        </div>
      </div>
    </div>
  )
}
