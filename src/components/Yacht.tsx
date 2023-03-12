import React from 'react'
import background from "../assets/images/yacht.png"
import logo from "../assets/images/logo_3.png"
import { AiOutlineArrowRight } from 'react-icons/ai'
import Image from 'next/image'

export const Yacht = () => {
  return (
    <div className="min-h-screen bg-cover bg-center px-8" style={{backgroundImage: `url(${background.src})`}}>
        <div className='flex justify-end pt-20'>
            <div className='w-96'>
                <p className='text-xl text-white'>Personalized for you</p>
                <p className='text-white'>delivering thousands of personalized alerts erveyday. our users can be first in line when that opportunity of a lifetime is here</p>
            </div>
        </div>
        <div className='flex justify-between items-center mt-40'>
            <div className='' style={{ width: "37%"}}>
                <Image
                    src={logo.src}
                    alt="ss"
                    width={300}
                    height={100}
                />
            </div>
            <div>
                <p className='flex items-center text-white'><span>create User id</span> <AiOutlineArrowRight/></p>
            </div>
        </div>
    </div>
  )
}
