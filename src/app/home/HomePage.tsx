import Bgicons from "@/app/home/Components/bgicons";
import MainTitle from "@/app/home/Components/maintitle";
import Navbar from "@/app/home/Components/navbar";

export default function HomePage () {

    return (
        <section id="homepage" className={" min-h-screen flex flex-col justify-evenly items-center bg-transparent 2xl:px-20 px-4 "}>
            <Bgicons/>
            <Navbar/>
            <div className={"items-center justify-start h-full w-full flex"}>
                <MainTitle />
            </div>
        </section>
    )
}