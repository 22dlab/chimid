import Image from "next/image"

export default function Hero() {
  return (
    <div
      id='hero'
      className='w-full h-screen lg:h-[900px] bg-inverse relative flex items-end'
    >
      <div className='w-full h-3/5 lg:h-full relative overflow-hidden'>
        <Image
          src='/media/chimid-ascii.png'
          alt='home-hero'
          fill
          className='object-cover mix-blend-multiply object-[40%_50%] lg:object-[25%_25%]'
          priority
        />
      </div>
      <div className='absolute w-full left-0 top-200 lg:top-auto lg:bottom-72'>
        <div className='container f-display-2 md:f-display-1 text-primary-inverse md:pr-cols-1'>
          Upholding the Constitution, Advancing Democracy
        </div>
      </div>
    </div>
  )
}
