"use client"

import Comment from "@/components/comment"
import Image from "next/image"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SimpleBackdrop from "@/components/backdrop";
import { Dialog, TextField } from "@mui/material";
import Cookies from "js-cookie";
import {toast} from "react-toastify"


const list = [
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

export default function IndividualCamps() {
   const params = useParams();
   const [data, setData] = useState("");
   const [loader, setLoader] = useState(false);
   const [open, setOpen] = useState(false);
   const [comment, setComment] = useState("")
   const [comments, setComments] = useState(list)


   
   const handleComment = () =>{
      if(comment.length > 0){
         setComments([...comments, {name: Cookies.get("name"),
         time: "0 min ago",
         comment: comment
      }])
      toast.success("Comment Added Successfully")
      setComment("");
      setOpen(false)
      }
   }

   useEffect(() => {
      // Function to fetch data
      const fetchData = async () => {
         try {
            setLoader(true);
            const response = await fetch('/api/campdata'); // Replace with your API endpoint
            if (response.ok) {
               let result = await response.json();
               result = result.find((val) => val.id == params.id);
               setLoader(false)
               setData(result);
            } else {
               setLoader(false)
               throw new Error('Failed to fetch data');
            }
         } catch (error) {
            setLoader(false)
            console.error('Error fetching data:', error);
         }
      };
      fetchData();
   }, [params])

   return (<div className="pb-5">
      <SimpleBackdrop open={loader} />
      <div className="flex gap-12 mt-12 items-start md:flex-row  flex-col-reverse">
         <div className=" flex justify-center border-border_color border p-12 rounded md:w-2/5 w-full ">
            <Image width={400} height={500} src="/assets/Map.png" />
         </div>
         <div className="md:w-3/5 ">
            <div className="border-border_color border p-12 rounded ">
               <Image width={300} height={800} style={{ minWidth: "100%", minHeight: "350px" }} src="/assets/Camp Images/High Quality Images/Buloy Springs.jpg" />
               <div className="mt-5 flex justify-between">
                  <div className="font-bold text-2xl">{data?.name}</div>
                  <div className="font-medium">${data?.price}/night</div>
               </div>
               <div className="text-grey_dark mt-3">{data?.description}</div>
               <div className="italic">Submitted By {data?.author}</div>
            </div>
            <div className="border-border_color border p-12 rounded w-full mt-5">
               {comments?.map((val, index) => {
                  return (<Comment key={index} data={val} />)
               })}

               <div  className="flex justify-end items-center">
                  {Cookies.get("name") ? 
                  <button className=" flex bg-black p-2 rounded gap-4 mt-5 ">
                     <Image width={30} height={30} src="/assets/Chat Bubble.svg" />
                     <div  role="button" onClick={()=> setOpen(true)} className="text-white ">Leave a Review</div>
                  </button> : ""}
                  
               </div>
            </div>

         </div>
      </div>
      <Dialog open={open} maxWidth="md" onClose={()=> setOpen(false)}>
         <div style={{minWidth: "400px"}} className="p-5">
         <h1 className="text-xl font-bold">Add New Comment</h1>
         <div className="mt-4 mb-3">Description</div>
         <TextField
          fullWidth
          multiline
          rows={4}
          value={comment}
          onChange={(e)=> setComment(e.target.value)}
          />
          <button onClick={()=> handleComment()}  className="text-white bg-black h-12  mt-8 rounded-lg w-full">
            Post Comment
          </button>
         </div>

      </Dialog>
   </div>)
}