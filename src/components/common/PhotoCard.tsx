import SanityImage from "./SanityImage"
import { ImageType } from "@/type"

interface Props {
  image: ImageType
}

export function PhotoCard({ image }: Props) {
  const width = image.asset.metadata.dimensions?.width
  const height = image.asset.metadata.dimensions?.height

  if (!height || !width) return undefined

  const imageWidth =
    height > width ? "w-[110px] lg:w-[160px]" : "w-[210px] lg:w-[260px]"

  return (
    <div className='px-16 pt-16 py-32 bg-white shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] w-fit'>
      <div className={`h-[157px] lg:h-[200px] ${imageWidth} relative`}>
        <SanityImage
          image={image}
          className='object-cover object-top'
          alt='photocard'
        />
      </div>
    </div>
  )
}
