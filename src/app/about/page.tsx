import {PageWrapper} from "@/app/page-wrapper";
// import Image from "next/image";
// import instagram from "../../../public/socialIcons/instagram.png";
// import linkedin from "../../../public/socialIcons/linkedin.png";
import TeamSection from "@/app/about/Components/TeamSection";

export default function Page() {

    return (<PageWrapper>
            <section id="about-section" className={"w-full z-10 min-h-[100svh] bg-transparent flex flex-col lg:px-4 lg:py-2 px-2 py-1"}>

                <div className={`flex flex-col justify-end min-h-[100svh] w-full`}>
                    <h1 className={" drop-shadow-lg w-max h-max"}>
                <span
                    id="title"
                    className={" lg:text-[28vh] text-9xl flex flex-col drop-shadow-lg leading-none bg-gradient-to-br from-[#4E9F3D] text-transparent bg-clip-text to-[#4E9F3D] via-[#D8E9A8]"}>
                    <span>About</span>
                </span>
                    </h1>
                </div>

                <TeamSection />
                {/*<div className={"min-h-screen p-24 flex flex-col 2xl:gap-16 gap-6"}>*/}
                {/*    <h2 className={"2xl:text-7xl text-4xl"}>Who Are We?</h2>*/}
                {/*    <p className={"2xl:text-xl text-lg text-gray-200"}></p>*/}
                {/*    <div className={"flex flex-col gap-16 justify-end h-full"}>*/}
                {/*        <div className={"underline"}>*/}
                {/*            <a id="linkCursor" target="_blank"*/}
                {/*               href="">Learn about*/}
                {/*               </a>*/}
                {/*        </div>*/}
                {/*        <div className={"w-full flex flex-col 2xl:flex-row 2xl:gap-6 gap-1 h-max"}>*/}
                {/*            <span className={"text-gray-400 text-sm 2xl:text-lg"}>Learn more about us on:</span>*/}
                {/*            /!*<SocialButton href={""} name={"Linkedin"} color={"bg-[#0072b1]"} />*!/*/}
                {/*            /!*<SocialButton href={""} name={"Instagram"} color={"bg-[#e95950]"} />*!/*/}
                {/*            <div className={"flex flex-row justify-evenly gap-4"}>*/}
                {/*                <a id="linkCursor" href="#"*/}
                {/*                   className={"bg-white rounded-full border border-white hover:border-[#D8E9A8] hover:bg-[#D8E9A8]"}><Image*/}
                {/*                    loading="lazy" width={25} height={25} src={instagram} alt={"instagram"}/></a>*/}
                {/*                <a id="linkCursor" href="#"*/}
                {/*                   className={"bg-white rounded-full border border-white hover:border-[#D8E9A8] hover:bg-[#D8E9A8]"}><Image*/}
                {/*                    loading="lazy" width={25} height={25} src={linkedin} alt={"linkedin"}/></a>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </PageWrapper>)
}