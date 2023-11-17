"use client"
import Image from "next/image"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function SignInFields() {
    const router = useRouter()
    return (
        <div className="flex flex-col w-4/5 m-auto">

            <div className="flex justify-between mt-5 items-center ">
                <div>
                    <Image width="120" height="20" src="/assets/Logo.svg" />
                </div>
                <Link href="/campgrounds">
                <div className="text-sm text-grey_dark flex gap-3 font-bold">
                    <Image width={30} height={30} src="/assets/left-arrow.png" /> Back to campgrounds
                </div>
                </Link>

            </div>

            <div className="text-2xl text-black font-bold mt-24">
                Start exploring camps from all around the world.
            </div>

            <div className="text-sm mt-5 text-grey-800">
                Username
            </div>
            <div className="mt-3">
                <Box
                    style={{height: "45px" }}
                >
                    <TextField 
                    sx={{ textAlign: "center" }} fullWidth placeholder="Enter Username" />
                </Box>
            </div>

            <div className="text-sm mt-5 text-grey-800">
                Password
            </div>
            <div className="mt-3">
                <Box
                    style={{  height: "45px" }}
                >
                    <TextField 
                    sx={{ textAlign: "center" }} fullWidth placeholder="Enter Password" />
                </Box>
            </div>
           
            <button onClick={()=> router.push("/campgrounds")}  title="Login functionality is not implemented yet" className="text-white bg-black h-12  mt-8 rounded-lg" >
           
                Login
            
            </button>
           

            <div className="text-sm mt-5 text-grey-800">
                Not a user yet? <span  className="text-blue"><Link href="/signup">Create an account </Link></span>
            </div>

        </div>
    )
}