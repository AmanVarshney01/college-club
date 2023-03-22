"use client";
import NavButton from "@/app/home/Components/NavButton";
import glaLogo from 'public/gla logo A+.png';
import glaGlauLogo from 'public/gfgglau.png';
import Image from "next/image";
import {useRef, useEffect} from "react";
import ThemeToggle from "@/app/themeToggle";

export default function Navbar({timeline, ease}: {timeline: any, ease: any}) {

    const scrollToFaqs = () => {
        const faqspage: any = document.querySelector('#faqspage')

        faqspage.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }

    const scrollToAbout = () => {
        const aboutpage: any = document.querySelector('#aboutpage')

        aboutpage.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }

    const scrollToTeam = () => {
        const teampage: any = document.querySelector('#teampage')

        teampage.scrollIntoView({
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

    let logo1: any = useRef(null)
    let logo2: any = useRef(null)

    useEffect(() => {


            timeline.from(logo1, 1, {
                opacity: 0,
                y:  '-100'
            })
            timeline.from(logo2, 1, {
                opacity: 0,
                y:  '-100'
            })

    }, [timeline])

    return (
        <div className={"w-full z-20 bg-transparent transition duration-100 mt-16 px-10"}>
            <div className={"flex flex-row justify-between items-center gap-16 w-full"}>
                <div className={" z-10 flex flex-row gap-5 items-center w-fit"}>
                    <a id="linkCursor"  ref={el => logo1 = el} href="https://www.gla.ac.in/" target="_blank" className={"2xl:w-full"}><Image loading="lazy" width={120} className={""} src={glaLogo} alt="gla university"/></a>
                    <Image loading="lazy" id="linkCursor" width={120}  ref={el => logo2 = el} className={"2xl:w-full"} src={glaGlauLogo} alt="gla university"/>
                </div>
                <nav className={"flex 2xl:gap-8 gap-3 dark:text-white text-black w-fit relative"}>
                    <NavButton scrollTo={scrollToAbout} name={"About"}/>
                    <NavButton scrollTo={scrollToWork} name={"Events"}/>
                    <NavButton scrollTo={scrollToTeam} name={"Team"}/>
                    <NavButton scrollTo={scrollToFaqs} name={"FAQs"}/>
                    <NavButton scrollTo={scrollToContact} name={"Contact"}/>
                    <ThemeToggle />
                    {/*<div className={" w-[28rem] h-[28rem] absolute -top-48 -right-36 pointer-events-none bg-[#bedba8] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>*/}
                </nav>
            </div>
        </div>
    )
}