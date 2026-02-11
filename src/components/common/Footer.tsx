import Link from "next/link"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='w-full bg-inverse py-spacing-set-4'>
      <div className='container md:grid space-y-16 md:space-y-0 grid-cols-3 lg:grid-cols-4 f-ui-1 text-primary-inverse pt-24 border-t border-primary gap-x-gutter'>
        <div className='flex flex-col space-y-8'>
          <p className='f-ui-2 mb-12 text-secondary-inverse'>Who we are</p>
          <Link href='/who-we-are'>About us</Link>
          <Link href='/about-chimid'>About Chimid Byaraa</Link>
        </div>
        <div className='flex flex-col space-y-8'>
          <p className='f-ui-2 mb-12 text-secondary-inverse'>Areas of focus</p>
          <Link href='/what-we-do#legal'>Legal Education</Link>
          <Link href='/what-we-do#public'>Public Outreach</Link>
          <Link href='/what-we-do'>Research Summit</Link>
        </div>
        <div className='flex flex-col space-y-8'>
          <p className='f-ui-2 mb-12 text-secondary-inverse'>Connect with us</p>
          <a
            href='https://www.facebook.com/chimidsan.mn/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Facebook
          </a>
          <a
            href='https://x.com/chimidsan'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </a>
          <a href='mailto:info@chimidfoundation.org'>E-Mail</a>
        </div>
        <div className='text-right uppercase opacity-0'>монгол хэл</div>
      </div>
      <div className='container md:grid space-y-16 md:space-y-0 grid-cols-2 f-ui-3 text-secondary-inverse gap-x-gutter mt-48 md:mt-80'>
        <p>© Chimid Foundation {year}</p>
        <a
          href='https://www.22dlab.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Website by 22DesignLab
        </a>
      </div>
    </footer>
  )
}
