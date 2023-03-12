import Image from "next/image"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { Owl } from "./Owl"
import logo2 from "../assets/images/logo_2.png"
import whiteHouse from "../assets/images/whiteHouse.png"
import { useWindowSize } from "@/hooks/useWindoSize"

export const Slider = () => {
  return (
    <div id="slider" className="px-8 uppercase">
        <div className="min-w-full flex justify-between text-lg">
            <div >our categories</div>
            <div className="flex justify-between w-10">
                <AiOutlineLeft/>
                <AiOutlineRight/>
            </div>
        </div>
        <div className="my-9">
            <Owl/>
        </div>
        <div className="text-center">
            <p className="text-4xl mb-5">One platform for all premium listings</p>
            <p className="text-2xl">unlimited potential</p>
        </div>
        <div className="flex justify-center xl:justify-between items-center mt-20 flex-wrap">
            <div className="text-center">
                <Image
                    src={logo2.src}
                    alt="Picture of the author"
                    width={500}
                    height={500} 
                />
                <p className="text-5xl">one source</p>
                <p className="text-5xl">Entry tickets</p>
                <p className="text-sm mt-3">for all premium listings</p>
            </div>
            <div className="text-center">
                <Image
                    src={whiteHouse.src}
                    alt="Picture of the author"
                    width={700}
                    height={700} 
                />
                <p className="my-4">let your dreams find you</p>
            </div>

        </div>
    </div>
  )
}
