import {Lilita_One} from "next/font/google";

const lilitaOne = Lilita_One({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-lilitaOne'
})

export default function Home() {
    return (
        <main
            className={'w-screen h-screen flex justify-center items-center bg-[#131200]'}>
            <div className={"relative"}>
                <h1 className={"text-[20rem] text-[#2f8d46] drop-shadow-lg"}>
                <span className={`bg-gradient-to-br from-[#2f8d46] text-transparent bg-clip-text to-[#78BC61] animate-text via-[#73be73] ${lilitaOne.variable} font-sans`}>
                    GFG GLAU
                </span>
                </h1>
                <span className={"text-2xl text-white absolute bottom-20 right-0 font-mono"}>GeeksForGeeks Student Chapter GLA University</span>
            </div>
        </main>
    )
}