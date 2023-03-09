// import Bgicons from "@/app/home/Components/bgicons";
import MainTitle from "@/app/home/Components/maintitle";
import bg12 from 'public/bg_svg/bg12.svg'
import Image from "next/image";

export default function HomePage () {
    return (
        <div className={"relative h-screen flex flex-row justify-between items-center bg-[#121212] px-10"}>
            {/*<Bgicons/>*/}
            <MainTitle />
            <div className={"self-end opacity-40 w-1/3 mx-auto"}>
                <Image src={bg12} alt={"tech illustration"} />
            </div>
        </div>
    )
}