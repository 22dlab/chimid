"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useState, useEffect } from "react"

export function Navbar() {
  const navItems = [
    {
      label: "Who We Are",
      path: "/who-we-are"
    },
    {
      label: "What We Do",
      path: "/what-we-do"
    },
    {
      label: "Dr Chimid's Life and Legacy",
      path: "/about-chimid"
    },
    {
      label: "News",
      path: "/news"
    }
  ]

  const pathname = usePathname()
  const inverse = pathname.startsWith("/about") || pathname.startsWith("/news")

  const [scrollUp, setScrollUp] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  const [open, setOpen] = useState(false)

  useEffect(() => {
    let prevScroll = window.scrollY

    const hero = document.getElementById("hero")
    const heroHeight = hero?.offsetHeight || 0

    const handleScroll = () => {
      const currentScroll = window.scrollY

      setScrollUp(prevScroll > currentScroll)
      setScrolled(currentScroll > heroHeight)

      prevScroll = currentScroll
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    if (open) {
      body.style.overflow = "hidden"
      html.style.overflow = "hidden"
      body.style.position = "relative"
    } else {
      body.style.overflow = ""
      html.style.overflow = ""
      body.style.position = ""
    }

    return () => {
      body.style.overflow = ""
      html.style.overflow = ""
      body.style.position = ""
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <nav
      className={`${
        !inverse
          ? scrolled
            ? "bg-inverse text-primary-inverse"
            : "bg-transparent text-primary-inverse"
          : scrolled
          ? "bg-primary text-primary"
          : "bg-transparent text-primary"
      } ${
        scrollUp || open ? "translate-y-0" : "-translate-y-[100%]"
      } fixed top-0 z-50 w-screen transition duration-300 delay-150 ease-in-out border-b border-primary`}
    >
      <div className='container flex justify-between items-center py-16'>
        <Link href='/'>
          <div className='relative w-[143px] md:w-[174px] lg:w-[208px] h-48 md:h-60 lg:h-72'>
            <Image
              src={inverse ? "/media/logo-inverse.png" : "/media/logo.png"}
              alt='logo'
              fill
              className='object-contain'
              priority
            />
          </div>
        </Link>
        <div className='hidden md:flex space-x-48 f-ui-1'>
          {navItems.map((item, index) => (
            <Link key={index} href={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className='flex items-center md:hidden'>
          <button onClick={() => setOpen(true)}>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M28 6H4V8H28V6Z'
                fill={inverse ? "#1A262E" : "#C39039"}
              />
              <path
                d='M28 24H4V26H28V24Z'
                fill={inverse ? "#1A262E" : "#C39039"}
              />
              <path
                d='M28 12H4V14H28V12Z'
                fill={inverse ? "#1A262E" : "#C39039"}
              />
              <path
                d='M28 18H4V20H28V18Z'
                fill={inverse ? "#1A262E" : "#C39039"}
              />
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence mode='wait'>
        {open && (
          <motion.div
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: "0.5", ease: "easeOut" }}
            className={`fixed inset-0 w-screen h-screen overflow-hidden ${
              !inverse
                ? "bg-inverse text-primary-inverse"
                : "bg-primary text-primary"
            }`}
          >
            <div className='h-[calc(100vh+1px)]'>
              <div className='w-full border-b border-primary'>
                <div className='flex container justify-between items-center py-16'>
                  <Link href='/'>
                    <div className='relative w-[143px] h-48'>
                      <Image
                        src={
                          inverse
                            ? "/media/logo-inverse.png"
                            : "/media/logo.png"
                        }
                        alt='logo'
                        fill
                        className='object-contain'
                        priority
                      />
                    </div>
                  </Link>
                  <button onClick={() => setOpen(false)}>
                    <svg
                      width='32'
                      height='32'
                      viewBox='0 0 32 32'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4L14.6 16L8 22.6L9.4 24L16 17.4L22.6 24L24 22.6L17.4 16L24 9.4Z'
                        fill={inverse ? "#1A262E" : "#C39039"}
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='container pt-64 flex flex-col space-y-32 f-ui-1'>
                {navItems.map((item, index) => (
                  <Link key={index} href={item.path}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
