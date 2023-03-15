// import Bgicons from "@/app/home/Components/bgicons";
import MainTitle from "@/app/home/Components/maintitle";
import bg12 from 'public/bg_svg/bg12.svg'
import Image from "next/image";
import Navbar from "@/app/home/Components/navbar";
// import {useEffect} from "react";

export default function HomePage () {


    return (
        <div className={"relative h-screen flex flex-row justify-between items-center bg-transparent px-10"}>
            {/*<Bgicons/>*/}
            <Navbar />
            <MainTitle />
            <div className={"self-end opacity-80 w-1/3 mx-auto image-fade"}>
                <Image src={bg12} alt={"tech illustration"} />
                <div className={"right-22 top-2/3 w-[24rem] h-[24rem] absolute pointer-events-none bg-[#E59500] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>
            </div>
        </div>
    )
}