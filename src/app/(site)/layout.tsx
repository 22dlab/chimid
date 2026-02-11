"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"

import { Navbar, Footer, Devtool, SplashScreen } from "@/components/common"

import "@/style/globals.css"
import Maintenance from "@/components/common/Maintenance"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [showSplash, setShowSplash] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem("splashed")

    if (!seen) {
      setShowSplash(true)
      sessionStorage.setItem("splashed", "true")

      const timer = setTimeout(() => {
        setShowSplash(false)
        setReady(true)
      }, 2000)

      return () => clearTimeout(timer)
    } else {
      setReady(true)
    }
  }, [])

  // Under maintenance
  // if (!ready && !showSplash)
  //   return (
  //     <html>
  //       <body></body>
  //     </html>
  //   )

  return (
    <html lang='en'>
      <head>
        <title>Chimid Foundation</title>
        <link rel='icon' href='/favicon/favicon.ico' />
      </head>
      <body>
        <Maintenance />
        {/* <Navbar />
        <AnimatePresence mode='wait'>
          {showSplash && <SplashScreen key='splash' />}
        </AnimatePresence>
        {children}
        <Footer />
        <Devtool /> */}
      </body>
    </html>
  )
}
