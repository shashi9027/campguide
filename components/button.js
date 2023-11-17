"use client"

import Link from "next/link"
export default function BlackButton({path, text, height}){
    
    return(
        <Link href={`${path}`}>
        <button   className={`text-white bg-black ${height}   rounded-lg px-8`}>
          {text}
        </button>
        </Link>
    )
}