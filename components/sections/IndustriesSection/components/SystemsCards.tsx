import Image from 'next/image'
import React from 'react'
interface Props {
  title: string

}
const SystemsCards:React.FC<Props> = ({title}) => {
  return (
    <div className='opacity: 0; transform: translateY(50px)'>
        <li className='border-b border-[#c9b8a8] cursor-pointer transition-all duration-400 pr-30 xl:pl-30'>
            <div className='flex items-center justify-between py-25'>
                <span className='text-30 text-extra-dark tracking-[-0.03em] transition-all duration-300 font-semibold'>
                    {title}
                </span>
                <Image width={50} height={50} src={"/icon/arrow-to-top-right.svg"} alt={title} className='shrink-0 transition-all duration-300 w-auto h-[50px] opacity-100 translate-x-0 translate-y-0' />
                
            </div>

        </li>

    </div>
  )
}

export default SystemsCards