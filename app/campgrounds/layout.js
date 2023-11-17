"use client"
import BlackButton from "@/components/button"
import Logo from "@/components/logo"
import Link from "next/link"

export default function CampgroundLayout({children}){
    return(
        <div className="flex justify-center mt-8">
        <div className="w-4/5 ">
          <div className="flex justify-between">
             <div className="flex gap-12 items-center">
               <Logo/>
               <Link href="/campgrounds">
               <div className="text-grey-700 font-semibold">Home</div>
               </Link>
             </div>
             <div className="flex gap-12 items-center">
             <Link href="/login">
               <div className="text-grey-700 font-semibold">Login</div>
               </Link>
               <BlackButton path="/signup" text="Create an account" height="h-12"/>
             </div>
          </div>
          {children}
        </div>
        </div>
    )
}