import React from 'react'
import background from "../assets/images/ocean_yacht.png"
import car from "../assets/images/black_car.png"
import logo from "../assets/images/logo_2.png"
import Image from 'next/image'

export const Ocean = () => {
  return (
    <div className='relative min-h-screen px-8 bg-cover bg-center mb-80' style={{backgroundImage: `url(${background.src})`}}>
        <div className='absolute flex min-w-full justify-between items-center px-20' style={{bottom: "-25%", left: "0"}}>
            <Image src={car.src} alt={"ss"} width={250} height={600}/>
            <Image src={logo.src} alt={"ss"} width={350} height={300}/>
        </div>
    </div>
  )
}
