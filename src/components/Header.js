"use client"
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";

export default function Header() {
  const [path,setPath] = useState("");
  const [active,setActive] = useState(false);
  return (
    <header className="flex justify-between px-4 xl:px-0 w-[100%] items-center h-20 sticky top-0 z-50 dark:bg-[#121212] bg-white">
        <h1 className="flex items-center"><ArrowBackIosIcon className="text-fuchsia-500"/>Sandeep<span className="font-semi-bold text-3xl text-fuchsia-500">/</span>Singh<ArrowForwardIosIcon className="text-fuchsia-500"/></h1>
        <nav className="hidden xl:flex gap-10 items-center animate__animated animate__bounceInDown">
            <Link href={"#about"} className={`nav-link${path=="about"?" active":""}`} onClick={()=>setPath("about")}>About</Link>
            <Link href={"#skills"} className={`nav-link${path=="skills"?" active":""}`} onClick={()=>setPath("skills")}>Skills</Link>
            <Link href={"#projects"} className={`nav-link${path=="projects"?" active":""}`} onClick={()=>setPath("projects")}>Projects</Link>
            <Link href={"#education"} className={`nav-link${path=="education"?" active":""}`} onClick={()=>setPath("education")}>Education</Link>
            <Link href={"#contact"} className={`nav-link${path=="contact"?" active":""}`} onClick={()=>setPath("contact")}>Contact</Link>
            <ThemeSwitcher/>
        </nav>
        <div className="xl:hidden hover:cursor-pointer flex flex-row-reverse gap-4 items-center ">
          <div onClick={() => setActive(!active)} className="z-50">
              <div className={active ? "activeHamburger" : "hamburger"}/>
          </div>
          <ThemeSwitcher/>
        </div>
        <MobileNavbar active={active}/>
    </header>
  )
}
