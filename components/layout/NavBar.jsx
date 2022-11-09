import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
  return (
    <>
    <section className="nav-bg py-[1.25rem] pl-[3.4rem] pr-[2.5rem]">
    <div className="flex justify-between items-center">
    <Image
      src="/logo.svg"
      alt="Picture of the author"
      width={100}
      height={100}
    />
    {/* Div for menu items */}
    <ul className="flex gap-[1.8rem]">
        <li className="nav-link"><Link href="#">Get Cozy</Link></li>
        <li className="nav-link"><Link href="#">What we do</Link></li>
        <li className="nav-link"><Link href="#">Our work</Link></li>
        <li className="nav-link"><Link href="#">The blog</Link></li>
        <li className="nav-link"><Link href="#">Say hi</Link></li>
    </ul>
    </div>
    </section>
    </>
  )
}
