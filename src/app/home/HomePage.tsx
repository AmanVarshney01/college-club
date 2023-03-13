// import Bgicons from "@/app/home/Components/bgicons";
import MainTitle from "@/app/home/Components/maintitle";
import bg12 from 'public/bg_svg/bg12.svg'
import Image from "next/image";
// import {useEffect} from "react";

export default function HomePage () {


    return (
        <div className={"relative h-screen flex flex-row justify-between items-center bg-transparent px-10"}>
            {/*<Bgicons/>*/}
            <MainTitle />
            <div className={"self-end opacity-80 w-1/3 mx-auto image-fade"}>
                <Image src={bg12} alt={"tech illustration"} />
            </div>
        </div>
    )
}