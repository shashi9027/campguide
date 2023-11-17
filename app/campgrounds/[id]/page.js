"use client"

import Comment from "@/components/comment"
import Image from "next/image"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const comments = [
   {
      name: "Adam Jones",
      time: "13h ago",
      comment: "Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing"
   },
   {
      name: "Issac Dylan",
      time: "1 day ago",
      comment: "Traveling changes you as a person, you gain more perspective, this is the perfect spot to do that"
   },
   {
      name: "Hudson Luca",
      time: "3 days ago",
      comment: "Definitely recommend going there, not too far and a lot of people to ruin the experience"
   }

   


]

export default function IndividualCamps(){
     const params = useParams();
     const [data, setData] = useState("");
     useEffect(() => {
      // Function to fetch data
      const fetchData = async () => {
        try {
          const response = await fetch('/api/campdata'); // Replace with your API endpoint
          if (response.ok) {
            let result = await response.json();
            result = result.find((val) => val.id == params.id);
            setData(result);
          } else {
            throw new Error('Failed to fetch data');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
  }, [params])

     return (<div className="pb-5">
              <div className="flex gap-12 mt-12 ">
                 <div className="border-border_color border p-12 rounded w-2/5">
                    <Image width={400} height={500} src="/assets/Map.png"/>
                 </div>
                 <div className="w-3/5">
                 <div className="border-border_color border p-12 rounded ">
                    <Image  width={300} height={800} style={{minWidth: "100%", minHeight: "350px"}} src="/assets/Camp Images/High Quality Images/Buloy Springs.jpg"/>
                    <div className="mt-5 flex justify-between">
                        <div className="font-bold text-2xl">{data?.name}</div>
                        <div className="font-medium">${data?.price}/night</div>
                    </div>
                    <div className="text-grey_dark mt-3">{data?.description}</div>
                    <div className="italic">Submitted By {data?.author}</div>
                 </div>
                 <div className="border-border_color border p-12 rounded w-full mt-5">
                  {comments?.map((val, index)=>{
                     return(<Comment  key={index} data={val}/>)
                  })}
                     
                  <div title="Review functionality is not implemented yet" className="flex justify-end items-center">
                  <button className=" flex bg-black p-2 rounded gap-4 mt-5 ">
                  <Image width={30} height={30} src="/assets/Chat Bubble.svg"/>
                  <div  className="text-white ">Leave a Review</div>
                 </button>
                 </div>
                 </div>
                
                 </div>
              </div>
     </div>)
}