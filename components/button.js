"use client"
import Link from "next/link"

export default function BlackButton({path, text, height, setLoader}){
    
    return(
        <Link onClick={()=> setLoader(true)} href={`${path}`}>
        <button   className={`text-white bg-black ${height}   rounded-lg px-8`}>
          {text}
        </button>
        </Link>
    )
}