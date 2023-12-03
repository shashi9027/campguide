"use client"
import BlackButton from "@/components/button"
import Logo from "@/components/logo"
import Link from "next/link"
import SimpleBackdrop from "@/components/backdrop"
import { useEffect, useState } from "react"
import { Menu, MenuItem } from "@mui/material"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"

export default function CampgroundLayout({ children }) {
  const [loader, setLoader] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState("");
  const router = useRouter()
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setName(Cookies.get("name"))
  }, [])


  return (
    <div className="flex justify-center mt-8">
      <SimpleBackdrop open={loader} />
      <div className="md:w-4/5 md:px-0 px-4 ">
        <div className="md:flex justify-between hidden">
          <div className="flex gap-12 items-center">
            <Logo />
            <Link href="/campgrounds">
              <div className="text-grey-700 font-semibold">Home</div>
            </Link>
          </div>
          <div className="flex gap-12 items-center">
            <Link onClick={() => setLoader(true)} href="/login">
              <div className="text-grey-700 font-semibold break-words">{name ? name : "Login"}</div>
            </Link>
            {name ? <button onClick={()=> {Cookies.remove("name"), setName(""), router.push("/login")}}>Logout</button> : <BlackButton path="/signup" text="Create an account" height="h-12" setLoader={setLoader} />}
          </div>
        </div>
        <div className="md:hidden flex justify-between">
          <Logo />
          <button onClick={(e) => handleClick(e)}>
            <img src="/assets/Hamburger Menu.svg" />
          </button>

        </div>
        {children}
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >
          <Link href="/campgrounds">
            <div className="text-grey-700 font-semibold">Home</div>
          </Link>
        </MenuItem>
        <MenuItem >
          <Link onClick={() => setLoader(true)} href="/login">
            <div className="text-grey-700 font-semibold">{name ? name : "Login"}</div>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link onClick={() => setLoader(true)} href="/login">
            <div className="text-grey-700 font-semibold">{name ? <button onClick={()=> {Cookies.remove("name"), setName("")}}>Logout</button> :"Create an account"}</div>
          </Link>
        </MenuItem>
      </Menu>
      
    </div>
  )
}