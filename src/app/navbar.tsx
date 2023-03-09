"use client";
import NavButton from "@/app/home/Components/NavButton";
import glaLogo from 'public/gla logo A+.png';
import glaGlauLogo from 'public/gfgglau.png';
import Image from "next/image";
import arrow from 'public/arrow.svg';
import {useEffect, useState} from "react";
import ThemeToggle from "@/themeToggle";

export default function Navbar() {

    const scrollToHome = () => {
        const homepage: any = document.querySelector('#homepage')

        homepage.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }

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

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (currentScrollPos > 300){
            setIsVisible(true);
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", handleScroll)
    })

    return (
        <div className={"absolute top-0 w-full z-20 bg-transparent transition duration-100 mt-16 px-10"}>
            <div className={"flex flex-row justify-between items-center"}>
                <div className={" ml-10 my-1 z-10 flex flex-row gap-5 items-center"}>
                    <a href="https://www.gla.ac.in/" target="_blank" className={"h-20 w-full"}><Image className={"h-20 w-full"} placeholder='blur' src={glaLogo} alt="gla university"/></a>
                    <Image className={"h-24 w-full"} placeholder='blur' src={glaGlauLogo} alt="gla university"/>
                </div>
                <div className={"mr-10 z-10"}>
                    <ul className={"flex gap-8 dark:text-white text-black w-fit"}>
                        <NavButton scrollTo={scrollToAbout} name={"About"}/>
                        <NavButton scrollTo={scrollToWork} name={"Events"}/>
                        <NavButton scrollTo={scrollToTeam} name={"Team"}/>
                        <NavButton scrollTo={scrollToFaqs} name={"FAQs"}/>
                        <NavButton scrollTo={scrollToContact} name={"Contact"}/>
                        <ThemeToggle />
                    </ul>
                </div>
            </div>
            {
                isVisible
                &&
                <div onClick={scrollToHome} className={"fixed bottom-6 right-6 m-2 bg-[#D8E9A8] rounded-full drop-shadow-md hover:bg-[#3C685E] transition duration-500 active:motion-safe:animate-bounce"}>
                    <Image className={""} src={arrow} alt={"Go to Top"} />
                </div>
            }
        </div>
    )
}