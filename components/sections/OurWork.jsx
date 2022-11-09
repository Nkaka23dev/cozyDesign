import React from 'react'
import Image from 'next/image'
import Button from '../buttons/Button'

export default function OurWork () {
  return (
    <section className='background-image py-96'>
      <div className='max-w-7xl mx-auto '> 
        <div className='grid grid-cols-9 max-w-[68rem] ml-auto'>
          <div className='col-span-5 space-y-10'>
            <h1 className="text-darkblack text-[1.875rem] font-bold">🌴🐻🇺🇸</h1>
            <h1 className="font-fraunces72ptsupersoft font-semibold text-darkblack text-[4.375rem]">Get Cozy</h1>
            <div className="max-w-md font-fraunces72ptsupersoft text-workColor text-[2.313rem]">Design & digital marketing in San Diego, California</div>
            <div className="space-y-4">
              <p className="text-darkblack font-fraunces72ptsupersoft text-[1.375rem]">We’re an award-winning design shop based in South Park, San Diego.
              We efficiently combine the best parts of user experience (UX) with
              creative design and execution to create effective collateral that
              connects with the human beings who interact with them. 🤯 </p>
              <p className="text-darkblack font-fraunces72ptsupersoft text-[1.375rem]">No epic
              quests for inspiration. Just pragmatic collaboration and efficient
              results from big-agency graduates with decades of experience.</p>
            </div>
            <Button name="why we do what we do" className="max-w-sm py-7" />
          </div>
          {/* Left division with all oimages  */}
          <div className='col-span-4  '>
            <div className='flex justify-evenly'>
              <div className='flex flex-col justify-evenly'>
                <Image
                  src='/images/img1.webp'
                  alt='Picture of the author'
                  width={140}
                  height={140}
                />
                <Image
                  src='/images/img2.webp'
                  alt='Picture of the author'
                  width={140}
                  height={140}
                />
                <Image
                  src='/images/img3.webp'
                  alt='Picture of the author'
                  width={140}
                  height={140}
                />
                <Image
                  src='/images/img4.webp'
                  alt='Picture of the author'
                  width={140}
                  height={140}
                />
              </div>
              <div className='flex flex-col gap-10 justify-between  border-green-500'>
                <div>
                  <Image
                    src='/images/img5.svg'
                    alt='Picture of the author'
                    width={150}
                    height={150}
                  />
                  <h1>BBB rating: A+</h1>
                </div>
                <Image
                  src='/images/img6.webp'
                  alt='Picture of the author'
                  width={140}
                  height={140}
                />
                <Image
                  src='/images/img7.png'
                  alt='Picture of the author'
                  width={130}
                  height={130}
                />
                <Image
                  src='/images/img8.png'
                  alt='Picture of the author'
                  width={140}
                  height={140}
                />
                <Image
                  src='/images/img9.webp'
                  alt='Picture of the author'
                  width={140}
                  height={140}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
