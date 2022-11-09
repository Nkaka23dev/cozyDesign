import React from 'react'
import { useEffect, useRef } from 'react'

export default function Video () {
  // const videoRef = useRef()
  // useEffect(() => {
  //   videoRef.current.play()
  // }, [])
  return (
    <>
      <section className='relative flex items-center justify-center h-screen overflow-hidden'>
        <div className='relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl'>
          Welcome to my site!
        </div>
        <video
           controls
           muted
           autoPlay={"autoplay"}
           preload="auto"
           loop
          src="/videos/cozyvideo.mp4"
          className='absolute z-10 w-auto min-w-full min-h-full max-w-none'
        >
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  )
}
