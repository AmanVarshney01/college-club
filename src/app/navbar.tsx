import NavButton from "@/app/home/Components/NavButton";
import glaLogo from 'public/gla logo A+.png';
import glaGlauLogo from 'public/gfgglau.png';
import Image from "next/image";
import arrow from 'public/arrow.svg'
// import {useEffect} from "react";

export default function Navbar() {

    const scrollToHome = () => {
        const homepage: any = document.querySelector('#homepage')

        homepage.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }

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
        <div className={"absolute top-0 w-full z-20 bg-transparent transition duration-100 mt-16 px-10"}>
            <div className={"flex flex-row justify-between items-center"}>
                <div className={" ml-10 my-1 z-10 flex flex-row gap-5"}>
                    <Image className={"h-20 w-full"} placeholder='blur' src={glaLogo} alt="gla university"/>
                    <Image className={"h-20 w-full"} placeholder='blur' src={glaGlauLogo} alt="gla university"/>
                </div>
                <div className={"mr-10 z-10"}>
                    <ul className={"flex gap-8 text-white font-mono w-fit"}>
                        <NavButton scrollTo={scrollToHome}  name={"Home"}/>
                        <NavButton scrollTo={scrollToWork} name={"Work"}/>
                        <NavButton scrollTo={scrollToAbout} name={"About"}/>
                        <NavButton scrollTo={scrollToContact} name={"Contact"}/>
                        {/*<Button href={"/contact"} name={"Event"} />*/}
                    </ul>
                </div>
            </div>
            <div onClick={scrollToHome} className={"fixed bottom-6 right-6 m-2 bg-[#D8E9A8] rounded-full"}>
                <Image className={""} src={arrow} alt={"Up"} />
            </div>
        </div>
    )
}