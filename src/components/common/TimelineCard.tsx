"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { PhotoCard } from "./PhotoCard"
import { ImageType } from "@/type"

export function TimelineCard({
  photos,
  alignment
}: {
  photos: ImageType[]
  alignment: boolean
}) {
  const width = photos[1]?.asset?.metadata?.dimensions?.width as number
  const height = photos[1]?.asset?.metadata?.dimensions?.height as number

  const isVerticalMiddle = photos.length === 3 && height > width

  const [xOffset, setXOffset] = useState(250)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateOffset = () => {
      const vw = window.innerWidth
      let base = isVerticalMiddle ? 210 : photos.length === 2 ? 170 : 250

      if (vw < 924) {
        base = base * 0.6
        setIsMobile(true)
      } else if (vw < 1440) {
        base = base * 0.7
      }

      setXOffset(base)
    }

    updateOffset()
    window.addEventListener("resize", updateOffset)
    return () => window.removeEventListener("resize", updateOffset)
  }, [isVerticalMiddle, photos.length])

  const rotate = photos.length !== 1 ? 0 : !alignment ? -10 : 10

  return (
    <div className='relative w-full h-full'>
      {photos.length >= 2 && (
        <motion.div
          initial={{ rotate: 0, x: 0 }}
          whileInView={{ rotate: -10, x: -xOffset }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-top-right z-[1]'
        >
          <PhotoCard image={photos[0]} />
        </motion.div>
      )}

      {photos.length === 3 && (
        <div className='absolute z-[2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <PhotoCard image={photos[1]} />
        </div>
      )}

      {photos.length >= 1 && (
        <motion.div
          initial={{ rotate: isMobile ? 0 : rotate, x: 0 }}
          whileInView={{
            rotate:
              isMobile && photos.length === 1
                ? 0
                : photos.length === 1 && !alignment
                ? -10
                : 10,
            x: photos.length === 1 ? 0 : xOffset
          }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-top-left z-[3]'
        >
          <PhotoCard image={photos[photos.length - 1]} />
        </motion.div>
      )}
    </div>
  )
}
