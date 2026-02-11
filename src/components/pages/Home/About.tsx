import { ArrowRight } from "@carbon/icons-react"

import Link from "next/link"

export default function About() {
  const links = [
    {
      label: "About the foundation",
      path: "who-we-are"
    },
    {
      label: "Chimid Byaraa's Life and Legacy",
      path: "about-chimid"
    },
    {
      label: "What we do",
      path: "what-we-do"
    }
  ]

  return (
    <div className='container'>
      <div className='lg:px-cols-1 py-64 md:py-100 space-y-48'>
        <p className='f-subtitle'>
          Founded in September 2013, the Chimid Foundation advances democratic
          governance and promotes a strong public understanding of the Mongolian
          constitution. Reflecting Professor Chimid&apos;s lifelong commitment
          to democratic constitutionalism, the Chimid Foundation works to evolve
          constitutional legal scholarship, guide the next generation of
          lawyers, and advance democratic values in Mongolia.
        </p>
        <div className='w-full flex justify-end'>
          <div className='w-full md:w-cols-4 lg:w-cols-5'>
            <p className='f-label text-secondary'>Quick Links</p>
            <div className='mt-16 flex flex-col space-y-8'>
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className='flex items-center space-x-8 f-body'
                >
                  <ArrowRight className='text-accent' size='16' />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
