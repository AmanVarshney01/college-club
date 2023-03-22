import Image from "next/image";
import arrow from "../../public/arrow.svg";
import {useEffect, useState} from "react";

export default function GoToTop () {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToHome = () => {
        const homepage: any = document.querySelector('#homepage')

        homepage.scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }

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
        <div>
            {
                isVisible
                &&
                <div id="linkCursor" onClick={scrollToHome} className={"z-50 fixed bottom-6 right-6 m-2 bg-[#D8E9A8] rounded-full drop-shadow-md hover:bg-[#181818] transition duration-500 active:motion-safe:animate-bounce"}>
                    <Image className={""} src={arrow} alt={"Go to Top"} />
                </div>
            }
        </div>
    )
}