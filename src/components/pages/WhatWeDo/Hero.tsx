import Image from "next/image"

export default function Hero() {
  return (
    <div
      id='hero'
      className='w-full h-[426px] md:h-screen lg:h-[600px] bg-inverse relative overflow-hidden'
    >
      <Image
        src='/media/whatwedo-ascii.png'
        alt='hero'
        fill
        className='object-cover mix-blend-multiply object-[25%_25%]'
        priority
      />
      <div className='absolute w-full left-0 bottom-72'>
        <div className='container text-primary-inverse lg:pl-cols-1'>
          <div className='w-cols-6 lg:w-cols-4 space-y-24'>
            <p className='f-heading-1'>What We Do</p>
            <p className='f-body-large'>
              Committed to Strengthening Democracy, Empowering Citizens, and
              Advancing Legal Scholarship in Mongolia
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
