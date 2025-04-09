import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4">
        <a href="">
          <Image src={assets.logo} alt="hek" className="w-28 cursor-pointer mr-14"/>
        </a>

        <ul>
          <li><a href="#top">Top</a></li>
          <li><a href="#about">About me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">My Works</a></li>
          <li><a href="#contact">Contact me</a></li>
        </ul>

        <div>
          <a href="#contact">Contact <Image src={assets.arrow_icon} className="w-3" alt="henk"/></a>
        </div>
      </nav>
    </>
  )
}

export default Navbar