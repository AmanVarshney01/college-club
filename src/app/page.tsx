import Bgicons from "@/app/Components/bgicons";
import Image from "next/image";
import glaLogo from "../../public/gla logo A+.png";
import glaGlauLogo from "../../public/gfgglau.png";

export default function Home() {
    return (
        <main className={'w-screen h-screen relative flex justify-left items-center bg-[#131200]'}>
            <div className={"fixed top-0 left-0 mx-8 my-4 z-10 flex flex-row gap-5"}>
                <Image className={"h-24 w-full"} placeholder='blur' src={glaLogo} alt="gla university"/>
                <Image className={"h-24 w-full"} placeholder='blur' src={glaGlauLogo} alt="gla university"/>
            </div>
            <Bgicons/>
            <div className={"flex flex-col z-10 mx-10 mt-24"}>
                <h1 className={"text-[#2f8d46] drop-shadow-lg"}>
                <span
                    className={`flex flex-col headtext drop-shadow-lg 2xl:text-[18rem] leading-none xl:text-[18rem] sm:text-[8rem] text-[5rem] lg:text-[15rem] md:text-[11rem] bg-gradient-to-br from-[#2f8d46] text-transparent bg-clip-text to-[#73be73] animate-text via-[#a6f1a6] `}>
                    <span>GFG</span>
                    <span>GLAU</span>
                </span>
                </h1>
                <span className={"lg:text-2xl text-[1rem] ml-10 text-white text-start font-mono"}>GeeksForGeeks Student Chapter GLA University</span>
            </div>
        </main>
    )
}