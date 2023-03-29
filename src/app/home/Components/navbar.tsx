"use client";
import NavButton from "@/app/home/Components/NavButton";
// import glaLogo from 'public/gla logo A+.png';
import glaGlauLogo from 'public/gfg.png';
import Image from "next/image";

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
        <div className={"fixed left-0 top-0 w-full h-min z-20 bg-[#121212]"}>
            <div className={"flex flex-row justify-between items-center gap-16 w-full py-1 px-4 lg:py-2 lg:px-6"}>
                <div className={" z-10 flex flex-row gap-5 items-center w-fit"}>
                    {/*<m.a initial={{scale: 0, opacity: 0}} animate={{opacity: 1, scale: 1}} id="linkCursor" href="https://www.gla.ac.in/" target="_blank" className={""}><Image loading="lazy" width={60} className={""} src={glaLogo} alt="gla university"/></m.a>*/}
                    <a href="/" className={""}><Image placeholder="blur" width={5000} id="linkCursor" className={"h-auto w-[20%]"} src={glaGlauLogo} alt="gla glau "/></a>
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