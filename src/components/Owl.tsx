import owl_1 from "../assets/images/owl_1.png"
import owl_2 from "../assets/images/owl_2.png"
import owl_3 from "../assets/images/owl_3.png"
import owl_4 from "../assets/images/owl_4.png"
import owl_5 from "../assets/images/owl_5.png"
import React, { useEffect, useState } from 'react'
var $ = require("jquery");
// if (typeof window !== "undefined") {
//    window.$ = window.jQuery  = require("jquery");
// }
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from "next/image"
import { useWindowSize } from "@/hooks/useWindoSize"
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
export const Owl = () => {
  const {width, height} = useWindowSize();
  const [items, setItems] = useState(5);
  const [size, setSize] = useState(48);

  console.log(width)

  useEffect(() => {
    if(width > 1100) setItems(5)
    else if(width <= 1100 && width > 1100) setItems(4)
    else if(width <= 870 && width > 665) setItems(3)
    else if(width <= 665 && width > 480){
      setItems(2)
      setSize(48)
    }
    else if(width <= 480){
      setItems(2)
      setSize(40)
    }
  }, [width])
  return (
    <OwlCarousel 
        loop={true}
        items={items}
        responsiveRefreshRate={0}
        autoplay={true}
        autoplayTimeout={7000}
        autoplayHoverPause={true}
        dots={false}
      >
        <div className={`w-${size} h-${size}`}>
          <Image
            src={owl_4.src}
            alt="Picture of the author"
            width={200}
            height={200} 
          />
        </div>
        <div className={`w-${size} h-${size}`}>
          <Image
            src={owl_1.src}
            alt="Picture of the author"
            width={200}
            height={200} 
          />
        </div>
        <div className={`w-${size} h-${size}`}>
          <Image
            src={owl_2.src}
            alt="Picture of the author"
            width={200}
            height={200} 
          />
        </div>
        <div className={`w-${size} h-${size}`}>
          <Image
            src={owl_3.src}
            alt="Picture of the author"
            width={200}
            height={200} 
          />
        </div>
        <div className={`w-${size} h-${size}`}>
          <Image
            src={owl_4.src}
            alt="Picture of the author"
            width={200}
            height={200} 
          />
        </div>
        <div className={`w-${size} h-${size}`}>
          <Image
            src={owl_5.src}
            alt="Picture of the author"
            width={200}
            height={200} 
          />
        </div>
        <div className={`w-${size} h-${size}`}>
          <Image
            src={owl_3.src}
            alt="Picture of the author"
            width={200}
            height={200} 
          />
        </div>
    </OwlCarousel>
  )
}
