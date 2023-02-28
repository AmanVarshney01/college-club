import Bgicons from "@/app/Components/bgicons";
import {Lilita_One} from "next/font/google";

const lilitaOne = Lilita_One({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-lilitaOne'
})

export default function Home() {
    return (
        <main className={'w-screen h-screen relative flex justify-center items-center bg-[#131200]'}>
            {/*<Bgicons />*/}
            <div className={"relative flex flex-col z-10"}>
                <h1 className={"text-[#2f8d46] drop-shadow-lg"}>
                <span className={`2xl:text-[20rem] leading-none xl:text-[18rem] sm:text-[8rem] text-[6rem] lg:text-[15rem] md:text-[11rem] bg-gradient-to-br from-[#2f8d46] text-transparent bg-clip-text to-[#73be73] animate-text via-[#a6f1a6] ${lilitaOne.variable} font-sans`}>
                    GFG GLAU
                </span>
                </h1>
                <span className={"lg:text-2xl text-[1rem] text-white text-end font-mono"}>GeeksForGeeks Student Chapter GLA University</span>
            </div>
        </main>
    )
}