"use client"

import Image from "next/image"
import Logo from "./logo";
import BlackButton from "./button";
import SimpleBackdrop from "./backdrop";
import { useState } from "react";


const checkData  = [
{data: "Add your own camp suggestions."}, 
{data: "Leave reviews and experiences."},
{data: "See locations for all camps"} ]



export default function LandingPage(){

  const [loader, setLoader] = useState(false)
    
    return(
        <div className="md:flex min-h-screen  absolute w-full">
          <SimpleBackdrop open={loader}/>
          <div className="md:hidden" >
             <div >
             <img  style={{maxHeight: "500px", minWidth:"100%"}} src="/assets/Hero Image.jpg"/>
             </div>
           </div>
           <div className="md:w-3/5 bg-pink_200 flex justify-center">
              <div className="w-4/5 mt-6">
                 <Logo/>
                  <div className="text-3xl font-bold md:mt-24 mt-12">
                   Explore the best camps on Earth
                  </div>
                  <div className="text-grey_800 mt-3">
                    YelpCamp is a curated list of the best camping spots on Earth.
                    Unfiltered and unbiased reviews.
                  </div>
                  {checkData?.map((val)=>{
                    return(
                        <div key={Math.random()} className="flex gap-3 items-center mt-3">
                        <Image width={25} height={25} src="/assets/Checkmark.svg"/>
                        <div className="text-grey_dark font-medium">{val?.data}</div>
                        </div>
                    )
                  })}
                  <div className="mt-8">
                  
                  <BlackButton path="/campgrounds" text="View Campgrounds" height="h-16" setLoader={setLoader}/>
                  
                  
                  </div>
                  <div className="font-medium text-grey_dark mt-10">Partnered with:</div>
                  <div className="flex flex-wrap">
                     <Image width={100} height={50} src="/assets/Airbnb.svg"/>
                     <Image width={130} height={50} src="/assets/Booking.svg"/>
                     <Image width={130} height={50} src="/assets/Plum Guide.svg"/>
                  </div>
              </div>
             
           </div>
           <div className="w-2/5 md:block hidden" >
             <div style={{ position: 'relative', width: '100%', height: '100%' }}>
             <Image layout="fill" src="/assets/Hero Image.jpg"/>
             </div>
           </div>
        </div>
    )
}