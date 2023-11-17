"use client"

import BlackButton from "@/components/button";
import CampCard from "@/components/camp-card";
import { TextField, InputAdornment } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Campgrounds() {
    const [campData, setCampData] = useState();
    const [input, setInput] = useState("");
    const fetchData = async () => {
        try {
          const response = await fetch('/api/campdata'); // Replace with your API endpoint
          if (response.ok) {
            const result = await response.json();
            setCampData(result)
          } else {
            throw new Error('Failed to fetch data');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    const searchInput = async ()=>{
        const response = await fetch('/api/campdata'); 
        let result;
          if (response.ok) {
            result = await response.json();
          }
        const temp = result?.find((val)=> val?.name?.toLowerCase() === input?.toLowerCase());
        console.log(temp)
        if(temp){
            setCampData([temp]);
        }
    }
    const changeInput = (e) =>{
       setInput(e.target.value)
       if(e.target.value === ""){
          fetchData()
       }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <div className="bg-pink_200 mt-8 py-12 px-8">
                <div className="font-bold text-4xl ">Welcome to YelpCamp!</div>
                <div className="mt-4">View our hand-picked campgrounds from all over <br />the world, or add your own.</div>
                <div className="flex gap-6 search mt-4">
                    <TextField onChange={(e)=> changeInput(e)} placeholder="Search for camps" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Image width="20" height="20" src="/assets/Search Icon.svg" />
                            </InputAdornment>
                        ),
                    }} sx={{ backgroundColor: "white" }}></TextField>

                    <button onClick={()=> searchInput()}  className={`text-white bg-black h-15    rounded-lg px-8`}>
                        Search
                    </button>
                </div>
                <div>
                   
                </div>
            </div>
            <div className="flex flex-wrap justify-between">
            {campData?.map((val, index)=>{
                return( 
                <div className="mt-4 mb-5"> 
                <CampCard key={index} value={val}/>
                </div>)
               
            })}
             
            </div>
           
        </div>
    )
}