import Image from "next/image"

export default function Hero() {
  return (
    <div
      id='hero'
      className='relative w-full flex items-end h-[600px] md:h-[800px]'
    >
      <div className='w-full h-[426px] md:h-full relative'>
        <Image
          src='/media/chimid-ascii.png'
          fill
          className='object-cover mix-blend-multiply object-[40%_0%] lg:object-[25%_25%]'
          alt='legacy'
        />
        <Image
          src='/media/document-ascii.png'
          fill
          className='object-cover mix-blend-multiply opacity-20'
          alt='document'
        />
      </div>
      <div className='absolute bottom-0 w-full h-full bg-gradient-to-t from-primary to-transparent pointer-events-none z-10' />
      <div className='absolute w-full bottom-0 mix-blend-normal z-10'>
        <div className='relative container pb-92'>
          <div className='lg:px-cols-2 text-center space-y-24'>
            <p className='f-display-2'>Chimid Byaraa’s Life and Legacy</p>
            <p className='f-body-large'>
              Visionary Statesman, Constitutional Architect, and Champion of
              Mongolian Democracy
            </p>
          </div>
        </div>
        <div className='relative mx-auto w-[210px] flex items-center justify-center -translate-y-48'>
          <div className='absolute top-1/2 -translate-y-1 left-4 right-4 h-2 bg-accent-2' />
          <div className='absolute left-0 top-1/2 -translate-y-1/2  rotate-45 w-9 h-9 bg-accent-2' />
          <div className='absolute right-0 top-1/2 -translate-y-1/2 rotate-45 w-9 h-9 bg-accent-2' />
          <div className='absolute top-1/2 h-48 w-2 bg-accent-2' />
        </div>
      </div>
    </div>
  )
}
