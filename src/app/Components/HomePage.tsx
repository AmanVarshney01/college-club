import Bgicons from "@/app/Components/bgicons";
import EventLabel from "@/app/Components/eventlabel";

export default function HomePage () {
    return (
        <div id="homepage" className={"relative h-screen flex flex-row justify-left items-center bg-[#131200]"}>
            {/*<Bgicons/>*/}
            <div className={"flex flex-col z-10 mx-10 mt-24"}>
                <h1 className={"text-[#2f8d46] drop-shadow-lg"}>
                <span
                    className={`flex flex-col headtext drop-shadow-lg 2xl:text-[16rem] leading-none xl:text-[18rem] sm:text-[8rem] text-[5rem] lg:text-[15rem] md:text-[11rem] bg-gradient-to-br from-[#2f8d46] text-transparent bg-clip-text to-[#73be73] animate-text via-[#a6f1a6] `}>
                    <span>GFG</span>
                    <span>GLAU</span>
                </span>
                </h1>
                <span className={"lg:text-2xl text-[1rem] ml-10 text-white text-start font-mono"}>GeeksForGeeks Student Chapter GLA University</span>
            </div>
            <div className={"p-4 pb-8 w-1/3 bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg self-end mx-auto rounded-t-3xl z-10 flex flex-col"}>
                <EventLabel name={"Entrevista"} />
                <EventLabel name={"Solving For India Fun Activities"} />
                <EventLabel name={"Brain It Out"} />
                <EventLabel name={"Disha"} />
            </div>
        </div>
    )
}