"use client"
import Image from "next/image"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SimpleBackdrop from "@/components/backdrop";
import { useState } from "react";
import Cookies from "js-cookie";
import { toast } from "react-toastify"


export default function SignUpFields() {
    const [loader, setLoader] = useState(false)
    const router = useRouter();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState({
        name: "",
        password: ""
    })
    const logIn = (e) => {
        e.preventDefault();
        if (name.length > 1 && password.length > 1) {
            Cookies.set("name", name);
            router.push("/campgrounds");
            toast.success("Signup Successfully");
            setError({ ...error, name: "", password: "" })
        }
        else {
            if (name.length < 2) {
                error.name = "Please Enter Name (min. 2 characters)"
            }
            if (password.length < 2) {
                error.password = "Please Enter Password (min. 2 characters)"
            }
            setError({ ...error, name: error.name, password: error.password })
            toast.error("Fill Signup Details Correctly")
        }


    }
    return (
        <div className="flex flex-col md:w-4/5 m-auto p-5">

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
                    style={{ height: "45px" }}
                >
                    <TextField
                       name="name"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       sx={{ textAlign: "center" }}
                       fullWidth
                       placeholder="Enter Username" />
                </Box>
                <small className="mb-1" style={{ color: "red" }}>{error?.name}</small>
            </div>

            <div className="text-sm mt-5 text-grey-800">
                Password
            </div>
            <div className="mt-3">
                <Box
                    style={{ height: "45px" }}
                >
                    <TextField
                       name="password"
                       value={password}
                       sx={{ textAlign: "center" }}
                       fullWidth
                       placeholder="Enter Password"
                       onChange={(e) => setPassword(e.target.value)} />
                </Box>
                <small className="mb-1" style={{ color: "red" }}>{error?.password}</small>
            </div>

            <button onClick={(e) => { logIn(e) }} className="text-white bg-black h-12 mt-8 rounded-lg">
                
                    Create an account
                
            </button>


            <div className="text-sm mt-5 text-grey-800">
                Already a user? <span className="text-blue"><Link href="/login">Sign in</Link></span>
            </div>

        </div>
    )
}