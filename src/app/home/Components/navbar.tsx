"use client";
import NavButton from "@/app/home/Components/NavButton";
import glaGlauLogo from 'public/gfg.png';
import Image from "next/image";
import {motion as m} from "framer-motion";

export default function Navbar() {

    // const scrollToAbout = () => {
    //     const aboutpage: any = document.querySelector('#aboutpage')
    //
    //     aboutpage.scrollIntoView({
    //         behavior: 'smooth'
    //     }, 500)
    // }
    //
    // const scrollToWork = () => {
    //     const workpage: any = document.querySelector('#workpage')
    //
    //     workpage.scrollIntoView({
    //         behavior: 'smooth'
    //     }, 500)
    // }
    //
    // const scrollToContact = () => {
    //     const contactpage: any = document.querySelector('#contactpage')
    //
    //     contactpage.scrollIntoView({
    //         behavior: 'smooth'
    //     }, 500)
    // }

    return (
        // bg-gradient-to-b from-[#121212]/70 from-10% via-[#121212]/50 via-30% to-[#121212]/0 to-60%
        <div className={"from-5% bg-gradient-to-b from-[#121212]/100 to-[#121212]/0 to-80% fixed left-0 top-0 w-full h-min z-50"}>
            <div className={"flex flex-row justify-between items-center gap-16 w-full py-1 px-4 lg:py-2 lg:px-6"}>
                <div className={" z-10 flex flex-row gap-5 items-center w-fit"}>
                    <m.a initial={{scale: 0, opacity: 0}} animate={{opacity: 1, scale: 1}} href="/" className={""}><Image placeholder="blur" width={250} id="linkCursor" src={glaGlauLogo} alt="gla glau "/></m.a>
                </div>
                <nav className={"flex 2xl:gap-8 gap-3 w-fit relative"}>
                    <NavButton href={"/about"}  name={"About"}/>
                    <NavButton href={"/event"} name={"Events"}/>
                    <NavButton href={"/contact"} name={"Contact"}/>
                    {/*<ThemeToggle />*/}
                    {/*<div className={" w-[28rem] h-[28rem] absolute -top-48 -right-36 pointer-events-none bg-[#bedba8] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>*/}
                </nav>
            </div>
        </div>
    )
}