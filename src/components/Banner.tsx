import background from "../assets/images/banner_background.jpeg"
import { AiOutlineDown } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { Nabar } from "./Nabar"
import Link from "next/link"

export const Banner = () => {
    return (
      <div className="min-h-screen bg-cover bg-center relative" style={{backgroundImage: `url(${background.src})`}}>
        <Nabar/>
        <div className="mx-auto px-8 flex items-start flex-col justify-between min-h-screen uppercase">
          <div className="text-white min-w-full flex justify-start">
            <div className="flex items-center pt-16">
              <BiArrowBack size={20}/><span>back</span>
            </div>
          </div>
          <div className="text-start text-white">
            <p className="text-2xl">Discover</p>
            <p className="text-4xl">A New World</p>
            <p className="text-xs mt-5">For thos who wish for more</p>
          </div>
          <div className="text-white min-w-full flex justify-center flex-col items-center">
            <p className="pb-8">Bringin the world closer together</p>
            <Link href="#about"><AiOutlineDown size={40}/></Link>
          </div>
        </div>
      </div>
    )
  }