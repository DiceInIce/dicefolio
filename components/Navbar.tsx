import React from 'react'
import { Socials } from '@/constants'
import Image from "next/image"

const Navbar = () => {
  return (
    <div className='fixed top-0 bg-transparent z-[20] w-full flex gap-5 md:justify-between md:px-60 p-5'>
      <h1 className='text-white text-[45px] leading-10'>
        Victor <span className='font-thin'>Kaznachey</span>
        <span className='text-red-500'>.</span>
      </h1>
      <div className='flex flex-row gap-5'>
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={24}
            height={24}
          />
        ))}
      </div>
    </div>
  )
}

export default Navbar