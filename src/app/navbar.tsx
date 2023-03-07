import NavButton from "@/app/home/Components/NavButton";
import glaLogo from 'public/gla logo A+.png';
import glaGlauLogo from 'public/gfgglau.png';
import Image from "next/image";
import arrow from 'public/arrow.svg'

export default function Navbar() {

    const scrollToHome = () => {
        const homepage: any = document.querySelector('#homepage')

        homepage.scrollIntoView({
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


    return (
        <div className={"absolute top-0 w-full z-20 bg-transparent transition duration-100 mt-16 px-10"}>
            <div className={"flex flex-row justify-between items-center"}>
                <div className={" ml-10 my-1 z-10 flex flex-row gap-5 items-center"}>
                    <a href="https://www.gla.ac.in/" target="_blank" className={"h-20 w-full"}><Image className={"h-20 w-full"} placeholder='blur' src={glaLogo} alt="gla university"/></a>
                    <Image className={"h-24 w-full"} placeholder='blur' src={glaGlauLogo} alt="gla university"/>
                </div>
                <div className={"mr-10 z-10"}>
                    <ul className={"flex gap-8 text-white font-mono w-fit"}>
                        <NavButton scrollTo={scrollToWork} name={"Work"}/>
                        <NavButton scrollTo={scrollToTeam} name={"Team"}/>
                        <NavButton scrollTo={scrollToContact} name={"Contact"}/>
                        <NavButton scrollTo={scrollToContact} name={"FAQs"}/>
                    </ul>
                </div>
            </div>
            <div onClick={scrollToHome} className={"fixed bottom-6 right-6 m-2 bg-[#D8E9A8] rounded-full drop-shadow-md hover:bg-[#1E5128] transition duration-500 active:motion-safe:animate-bounce"}>
                <Image className={""} src={arrow} alt={"Up"} />
            </div>
        </div>
    )
}