import Link from "next/link"
import { AiOutlineDown } from "react-icons/ai"
import logo from "../assets/images/logo_white_back.jpeg"

export const About = () => {
    return (
      <div id="about" className="min-h-screen uppercase pt-2 px-8 flex flex-col justify-between">
        <div className="flex justify-center text-center">A real state and property platform that is changing the world</div>
        <div className="text-left">
            <p className="text-xl sm:text-4xl">A Revolutionary Platform</p>
            <p className="text-2xl sm:text-6xl">Entries - Seller</p>
            <p className="text-3xl sm:text-7xl">Worldwide</p>
        </div>
        <div className="flex flex-col justify-center items-end min-w-full">
            {/* logo */}
            <div className="bg-cover bg-center w-80 h-20" style={{backgroundImage: `url(${logo.src})`}}></div>
            <div className="text-center w-80">Connecting users from across the globe to facilitate life most important personal transactions</div>
        </div>

        <div className="min-w-full text-left">
            <p className="text-4xl">The best of the best</p>
            <p className="w-80">A combination of automation and manual curation our pro agents and moderation team selects the highest quality listings on the market from across the world.</p>
        </div>

        {/* down arrow */}
        <div className="min-w-full flex justify-center">
            <Link href="#slider"><AiOutlineDown size={40}/></Link>
          </div>

      </div>
    )
  }