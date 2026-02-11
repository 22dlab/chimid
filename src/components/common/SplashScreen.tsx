"use client"

import Image from "next/image"

import { motion } from "framer-motion"

export function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='inset-0 z-50 fixed bg-accent-1 h-screen'
    >
      <div className='container h-screen flex items-center justify-center'>
        <div className='w-full md:w-cols-6 space-y-16'>
          <div className='mx-auto w-[120px] aspect-square relative'>
            <Image src='/media/logo-small.png' fill priority alt='splash' />
          </div>
          <p className='f-quote text-primary-inverse text-center'>
            “For a citizen, all is permitted unless prohibited, and for the
            State and its officials, all is prohibited unless permitted.”
          </p>
          <p className='f-body-large text-center text-secondary-inverse'>
            Chimid Byaraa
          </p>
        </div>
      </div>
    </motion.div>
  )
}
