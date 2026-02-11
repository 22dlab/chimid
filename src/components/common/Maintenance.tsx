import Image from "next/image"

export default function Maintenance() {
  return (
    <div className='w-full h-full fixed bg-accent-1'>
      <Image
        src='/media/chimid-ascii.png'
        alt='home-hero'
        fill
        className='object-cover mix-blend-multiply object-[40%_50%] lg:object-[25%_25%]'
        priority
      />
      <div className='absolute text-center top-1/2 left-1/2 z-99 text-primary-inverse -translate-x-1/2 -translate-y-1/2 space-y-16'>
        <p className='f-heading-1'>Website Under Maintenance</p>
        <p className='f-body-large'>Thank you for your patience</p>
      </div>
    </div>
  )
}
