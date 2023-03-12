import Image from 'next/image'
import React, { useState } from 'react'
import logo_1 from '../assets/images/nav_logo_1.png'
import logo_2 from '../assets/images/nav_logo_2.png'
import logo_3 from '../assets/images/nav_logo_3.png'
import profile_icon from '../assets/images/profile_icon.png'
import lock_icon from '../assets/images/lock_icon.png'
import flag_icon from '../assets/images/flag_icon.png'

export const Nabar = () => {
    const [open, setOpen] = useState(false)
  return (    
    <nav className="absolute top-0 left-0 border-gray-200 px-8 py-2.5 rounded dark:bg-gray-900 z-10 min-w-full">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div className='flex justify-between items-stretch w-60'>
                <Image src = {logo_1.src} alt="aa" width={40} height={20}/>
                <Image src = {logo_2.src} alt="aa" width={100} height={50}/>
                <div className='flex items-end'>
                    <span className="text-sm font-semibold whitespace-nowrap text-white">About</span>
                </div>
            </div>
            <div className='hidden sm:flex justify-between items-stretch w-32'>
                <Image src = {logo_3.src} alt="aa" width={120} height={20}/>
            </div>
            <button onClick={() => setOpen(prevStat => !prevStat)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div className={`${!open ? "hidden" : ""} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <Image src = {flag_icon.src} alt="aa" width={35} height={20}/>
                </a>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <Image src = {lock_icon.src} alt="aa" width={20} height={10}/>
                </a>
                </li>
                <li>
                <a href="#" className="block  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <Image src = {profile_icon.src} alt="aa" width={20} height={10}/>
                </a>
                </li>
            </ul>
            </div>
        </div>
    </nav>

  )
}
