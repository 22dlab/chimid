"use client"

import { useState, useEffect } from "react"

export function Devtool() {
  const [env, setEnv] = useState(false)
  const [grid, setGrid] = useState(false)

  useEffect(() => {
    setEnv(process.env.NODE_ENV !== "production")
  }, [])

  return (
    <>
      {env && (
        <div className='dev-tools'>
          <button className='dev-tools-toggle' onClick={() => setGrid(!grid)} />
          {grid && <div className='dev-tools-grid'></div>}
        </div>
      )}
    </>
  )
}
