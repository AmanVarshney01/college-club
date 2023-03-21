import Bgicons from "@/app/home/Components/bgicons";
import MainTitle from "@/app/home/Components/maintitle";
// import bg12 from 'public/bg_svg/bg12.svg'
// import Image from "next/image";
import Navbar from "@/app/home/Components/navbar";
// import {useEffect} from "react";
import {gsap, Power3} from 'gsap';
// import Image from "next/image";
// import gla from 'public/gla.jpg'

export default function HomePage () {

    let tl = gsap.timeline();
    let ease: any = Power3.easeOut(2);

    return (
        <div className={"relative h-screen flex flex-col justify-between items-center bg-transparent 2xl:px-20 px-4 "}>
            <Bgicons/>
            <div>
                <Navbar timeline={tl} ease={ease}/>
            </div>
            <div className={"items-center justify-start h-full w-full flex"}>
                <MainTitle />
            </div>
            {/*<div className={"self-end opacity-80 w-1/3 mx-auto image-fade relative"}>*/}
            {/*    <Image src={bg12} alt={"tech illustration"} />*/}
            {/*    /!*<div className={"right-0 top-12 w-[20rem] h-[20rem] absolute pointer-events-none bg-[#bedba8] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>*!/*/}
            {/*</div>*/}
            {/*<Image className={"absolute top-0 left-0 h-screen w-full "} src={gla} alt={"gla"}/>*/}
        </div>
    )
}