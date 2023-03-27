"use client";
import NavButton from "@/app/home/Components/NavButton";
// import glaLogo from 'public/gla logo A+.png';
import glaGlauLogo from 'public/gfg.png';
import Image from "next/image";
// import {motion as m} from "framer-motion";
// import ThemeToggle from "@/app/themeToggle";

export default function Navbar() {

    const scrollToAbout = () => {
        const aboutpage: any = document.querySelector('#aboutpage')

        aboutpage.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }

    const scrollToWork = () => {
        const workpage: any = document.querySelector('#workpage')

        workpage.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }

    const scrollToContact = () => {
        const contactpage: any = document.querySelector('#contactpage')

        contactpage.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }

    return (
        <div className={"w-full z-20 bg-transparent px-10"}>
            <div className={"flex flex-row justify-between items-center gap-16 w-full"}>
                <div className={" z-10 flex flex-row gap-5 items-center w-fit"}>
                    {/*<m.a initial={{scale: 0, opacity: 0}} animate={{opacity: 1, scale: 1}} id="linkCursor" href="https://www.gla.ac.in/" target="_blank" className={""}><Image loading="lazy" width={60} className={""} src={glaLogo} alt="gla university"/></m.a>*/}
                    <a href="" className={""}><Image loading="lazy" id="linkCursor" width={300} className={""} src={glaGlauLogo} alt="gla glau "/></a>
                </div>
                <nav className={"flex 2xl:gap-8 gap-3 w-fit relative"}>
                    <NavButton href={"/about"} scrollTo={scrollToAbout} name={"About"}/>
                    <NavButton href={"/event"} scrollTo={scrollToWork} name={"Events"}/>
                    <NavButton href={"/contact"} scrollTo={scrollToContact} name={"Contact"}/>
                    {/*<ThemeToggle />*/}
                    {/*<div className={" w-[28rem] h-[28rem] absolute -top-48 -right-36 pointer-events-none bg-[#bedba8] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>*/}
                </nav>
            </div>
        </div>
    )
}