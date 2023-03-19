"use client";
import NavButton from "@/app/home/Components/NavButton";
import glaLogo from 'public/gla logo A+.png';
import glaGlauLogo from 'public/gfgglau.png';
import Image from "next/image";
import arrow from 'public/arrow.svg';
import {useState, useRef, useEffect} from "react";
import ThemeToggle from "@/app/themeToggle";

export default function Navbar({timeline, ease}: {timeline: any, ease: any}) {

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


        document.addEventListener("scroll", handleScroll)

    }, [timeline])

    return (
        <div className={"w-full z-20 bg-transparent transition duration-100 mt-16"}>
            <div className={"flex 2xl:flex-row flex-col-reverse justify-between items-center mx-10"}>
                <div className={" z-10 flex flex-row gap-5 items-center w-fit"}>
                    <a ref={el => logo1 = el} href="https://www.gla.ac.in/" target="_blank" className={"2xl:w-[15%] w-[30%]"}><Image className={""} src={glaLogo} alt="gla university"/></a>
                    <Image ref={el => logo2 = el} className={"2xl:w-[15%] w-[30%]"} src={glaGlauLogo} alt="gla university"/>
                </div>
                <div className={"z-10"}>
                    <ul className={"flex 2xl:gap-8 gap-3 dark:text-white text-black w-fit relative"}>
                        <NavButton scrollTo={scrollToAbout} name={"About"}/>
                        <NavButton scrollTo={scrollToWork} name={"Events"}/>
                        <NavButton scrollTo={scrollToTeam} name={"Team"}/>
                        <NavButton scrollTo={scrollToFaqs} name={"FAQs"}/>
                        <NavButton scrollTo={scrollToContact} name={"Contact"}/>
                        <ThemeToggle />
                        {/*<div className={" w-[28rem] h-[28rem] absolute -top-48 -right-36 pointer-events-none bg-[#bedba8] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>*/}
                    </ul>
                </div>
            </div>
            {
                isVisible
                &&
                <div onClick={scrollToHome} className={"z-50 fixed bottom-6 right-6 m-2 bg-[#D8E9A8] rounded-full drop-shadow-md hover:bg-[#3C685E] transition duration-500 active:motion-safe:animate-bounce"}>
                    <Image className={""} src={arrow} alt={"Go to Top"} />
                </div>
            }
        </div>
    )
}