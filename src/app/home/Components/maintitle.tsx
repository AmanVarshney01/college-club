import Image from "next/image";
import gfg from 'public/gfg_logo.png'

export default function MainTitle() {
    return (
        <div className={"flex z-20 flex items-center relative w-full justify-center"}>
            <Image className={""} width={400} src={gfg} alt={"gfg"}/>
            {/*<h1 className={" drop-shadow-lg w-max h-max"}>*/}
            {/*    <span*/}
            {/*        id="title"*/}
            {/*        className={" lg:text-[28vh] text-[14vh] flex flex-col drop-shadow-lg leading-none bg-gradient-to-br from-[#4E9F3D] text-transparent bg-clip-text to-[#4E9F3D] via-[#D8E9A8]"}>*/}
            {/*        <span>GFG</span>*/}
            {/*        <span>GLAU</span>*/}
            {/*        <span className={"lg:ml-8 ml-3 text-[.8rem] lg:text-2xl text-white"}>GeeksForGeeks Student Chapter GLA University</span>*/}
            {/*    </span>*/}
            {/*    /!*<div className={"w-[22rem] h-[22rem] absolute -bottom-52 -left-56 pointer-events-none bg-[#bedba8] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>*!/*/}
            {/*</h1>*/}

        </div>
    )
}