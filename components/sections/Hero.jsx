import React from 'react'
import Image from 'next/image'
import Button from '../buttons/Button'

export default function Hero () {
  return (
    <section className='hero-bg overflow-hidden'>
      <div className='max-w-[76rem] mx-auto'>
        <div className="flex">
          <div className="flex flex-col justify-between">
            <h1 className="text-secondary font-[900] font-fraunces144ptsupersoft text-[5.625rem] max-w-lg leading-[6rem] -mt-[1.65rem]">Your design team for the cost of a salary.</h1>
            <h4 className="text-[#e4ded5] font-fraunces72ptsupersoft text-[2.5rem] leading-[3.3rem] max-w-[50rem] tracking-wide mt-14">
              Full-service design support that growing B2B and non-profit
              organizations need. Are you strained because you should <br></br> have a
              design team but you<br></br> dont?
            </h4>
            <Button name="See How we work & what we can do" className="mt-[4rem]"/>
          </div>
          {/* Next div of this flex */}
         <img src="/images/heroImage.png" className="w-[48rem] h-[48rem] -mr-[10rem] -mb-[3rem] my-auto" />
        </div>
      </div>
    </section>
  )
}
