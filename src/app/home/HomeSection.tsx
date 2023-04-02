import MainTitle from "@/app/home/Components/maintitle";
import TitleMarquee from "@/app/home/Components/TitleMarquee";
// import Image from "next/image";
// import gla from 'public/gla3.png'
// import Image from "next/image";
// import gla from 'public/admin-block.svg'

export default function HomeSection () {

    return (
        <section id="homepage" className={"min-h-[100svh] z-10 w-full flex justify-center items-center flex-col relative bg-transparent lg:px-4 lg:py-2 px-2 py-1"}>
            <div className={""}>
                <MainTitle />
            </div>
            {/*<div className={"absolute -bottom-10 lg:-right-24 lg:w-7/12 w-11/12 h-auto"}>*/}
            {/*    <div className={"relative"}>*/}
            {/*        <div className={"w-full h-full absolute from-10% to-90% bg-gradient-to-t from-[#121212]/100 to-[#121212]/0 z-10"}></div>*/}
            {/*        <Image className={"pointer-events-none opacity-60"} src={gla} alt={"gla"} />*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<Image className={"fixed bottom-0 right-0 w-1/2 opacity-90"} src={gla} alt={"gla"} />*/}
            <div className={"absolute bottom-0 left-0"}>
                <TitleMarquee />
            </div>
        </section>
    )
}