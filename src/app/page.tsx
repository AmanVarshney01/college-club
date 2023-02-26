import {Lilita_One} from "@next/font/google";

const lilitaOne = Lilita_One({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-lilitaOne'
})

export default function Home() {

    return (
        <main
            className={`${lilitaOne.variable} font-sans w-screen h-screen flex justify-center items-center bg-[#162521]`}>
            <h1 className={"text-[20rem] text-[#2f8d46] drop-shadow-lg"}><span
                className={"bg-gradient-to-tr from-[#2f8d46] text-transparent bg-clip-text to-[#F7F7F9] animate-text"}>GFG GLAU</span>
            </h1>
        </main>
    )
}