import Image from 'next/image'
import Partner_one from "../assets/images/partners_1.png"
import Partner_two from "../assets/images/partners_2.png"

export const Partners = () => {
  return (
    <div className='min-h-screen min-w-full flex justify-evenly items-center flex-wrap px-8'>
        <div>
            <Image
                src={Partner_one.src}
                alt="aa"
                width={300}
                height={200} 
            />
        </div>
        <div>
            <Image
                src={Partner_two.src}
                alt="aa"
                width={300}
                height={200}
            />
        </div>
        <div>
            <Image
                src={Partner_one.src}
                alt="aa"
                width={300}
                height={200} 
            />
        </div>
    </div>
  )
}
