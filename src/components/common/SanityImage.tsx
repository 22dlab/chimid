import type { ImageType } from "@/type"

import Image from "next/image"

import { imageSource } from "@/sanity/lib/image"

interface Props {
  image: ImageType
  className?: string
  priority?: boolean
  alt: string
}

export default function SanityImage({
  image,
  className,
  priority,
  alt
}: Props) {
  const img = imageSource(image)

  return (
    <>
      {img?.url && img?.blur && (
        <Image
          src={img?.url}
          fill
          className={className}
          placeholder='blur'
          blurDataURL={img?.blur}
          alt={alt}
          sizes='(min-width: 0px) 50vw'
          draggable='false'
          priority={priority}
          quality={100}
          unoptimized
        />
      )}
    </>
  )
}
