import React from 'react'
import background from "../assets/images/world_map.png"

export const WorldMap = () => {
  return (
    <div className="min-h-screen bg-cover bg-center px-8 flex items-center justify-center" style={{backgroundImage: `url(${background.src})`}}>
        <div className='text-center'>
            <p className='text-5xl'>global vision</p>
            <p className='text-xl pt-10'>with a remote culture diversity is naturally in our dna. based across the globe. making  up over 23 different nationalities.</p>
        </div>
    </div>
  )
}
