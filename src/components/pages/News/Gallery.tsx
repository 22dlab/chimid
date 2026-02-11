import SanityImage from "@/components/common/SanityImage"

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Gallery({ gallery }: { gallery: any[] }) {
  return (
    <div className='container py-48 md:py-100'>
      <p className='f-heading-1'>Gallery</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-inner mt-36'>
        {/* eslint-disable @typescript-eslint/no-explicit-any */}
        {gallery.map((item: any, index: number) => (
          <div key={index} className='col-span-1 space-y-16'>
            <div className='relative w-full aspect-[3/2]'>
              <SanityImage
                image={item.photo}
                className='object-cover'
                alt='image'
              />
            </div>
            <p className='f-body'>{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
