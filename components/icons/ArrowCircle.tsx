import {FC} from 'react'
interface ArrowCircle{
    size?:number
    className?:string
}

const ArrowCircle:FC<ArrowCircle>=({className,size})=>{
    return <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    fill="none"
  >
    <rect width="50" height="50" rx="25" fill="#E2D3C3" />
    <path
      d="M20.5 16L29.5 25L20.5 34"
      stroke="#51463E"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
}

export default ArrowCircle