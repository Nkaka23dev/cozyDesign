import { useEffect, useRef } from 'react'
import Footer from '../components/layout/Footer'
import NavBar from '../components/layout/NavBar'
import Clients from '../components/sections/Clients'
import HappyClient from '../components/sections/HappyClient'
import Hero from '../components/sections/Hero'
import OurWork from '../components/sections/OurWork'
import Video from '../components/sections/Video'

export default function Home () {

  return (
    <>
      <NavBar />
      <Hero />
      <OurWork />
      <Clients />
      <HappyClient />
      <Video/>
      <div className="flex justify-center py-16 bg-[#b55730]">
          <h1 className='mx-auto text-white text-5xl  font-fraunces72ptsupersoft font-bold '>🙋 How can we help?</h1>
      </div>
      <Footer/>
    </>
  )
}
