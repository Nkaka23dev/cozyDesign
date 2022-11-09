import React from 'react'
import Link from 'next/link'

export default function Footer () {
  return (
    <>
      <section className='pt-16 bg-[#e4ded5]'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          <div className='flex justify-between gap-10'>
            <img src='/icons/coze.svg' className='w-20 ' />
            <ul className='flex items-center gap-5'>
              <li>
                <Link href='#'>About</Link>
              </li>
              <li>
                <Link href='#'>Services</Link>
              </li>
              <li>
                <Link href='#'>Work</Link>
              </li>
              <li>
                <Link href='#'>Blog</Link>
              </li>
              <li>
                <Link href='#'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='flex gap-5'>
            <img src='/icons/lettersimg.webp' className='w-6' />
            <h1>San Diego Digital Designers</h1>
            <div className='flex gap-2'>
              <img
                src='/icons/twitter.svg'
                className='bg-red-500 py-1 px-2 w-7 '
              />
              <img
                src='/icons/linkedin.svg'
                className='bg-red-500 py-1 px-2 w-7 '
              />
              <img
                src='/icons/facebook.svg'
                className='bg-red-500 py-1 px-2 w-7 '
              />
              <img
                src='/icons/instgram.svg'
                className='bg-red-500 py-1 px-2 w-7 '
              />
              <img
                src='/icons/youtube.svg'
                className='bg-red-500 py-1 px-2 w-7 '
              />
              <img
                src='/icons/linkedin.svg'
                className='bg-red-500 py-1 px-2 w-7 '
              />
              <img
                src='/icons/c-icon.svg'
                className='bg-yellow-500 py-1 px-2 w-7 '
              />
              <img
                src='/icons/nextIc.svg'
                className='bg-yellow-500 py-1 px-2 w-7 '
              />
            </div>
          </div>
        </div>
        <div className="h-[0.1rem] bg-secondary max-w-6xl mx-auto mt-10"></div>
      </section>
      {/* Next footer section is placed here */}
      <section className='bg-[#e4ded5] py-10'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <div className='flex gap-5'>
            <div className='flex items-center gap-5'>
              <img
                src='/icons/bbb.svg'
                className='w-40'
              />
             <img
                src='/icons/bureaux.png'
                className='w-40'
              />
             <img
                src='/icons/bbb.svg'
                className='w-40'
              />
  
            </div>
          </div>
          <div className='flex justify-between gap-10'>
            <h1>Made with love in beautiful, sunny San Diego. ©2021</h1>
            <ul className='flex items-center gap-5'>
              <li>
                <Link href='#'>Privacy</Link>
              </li>
              <li>
                <Link href='#'>Photo Credit</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
