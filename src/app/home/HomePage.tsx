import Bgicons from "@/app/home/Components/bgicons";
import MainTitle from "@/app/home/Components/maintitle";
// import bg12 from 'public/bg_svg/bg12.svg'
// import Image from "next/image";
import Navbar from "@/app/home/Components/navbar";
// import {useEffect} from "react";

export default function HomePage () {


    return (
        <div className={"relative h-screen flex flex-col justify-between items-center bg-transparent 2xl:px-10 px-2"}>
            <Bgicons/>
            <div>
                <Navbar />
            </div>
            <div className={"self-start justify-self-start h-full w-full"}>
                <MainTitle />
            </div>
            {/*<div className={"self-end opacity-80 w-1/3 mx-auto image-fade relative"}>*/}
            {/*    <Image src={bg12} alt={"tech illustration"} />*/}
            {/*    /!*<div className={"right-0 top-12 w-[20rem] h-[20rem] absolute pointer-events-none bg-[#bedba8] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>*!/*/}
            {/*</div>*/}
        </div>
    )
}