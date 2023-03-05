// import Bgicons from "@/app/home/Components/bgicons";
import EventLabel from "@/app/home/Components/eventlabel";
import MainTitle from "@/app/home/Components/maintitle";

export default function HomePage () {
    return (
        <div className={"relative h-screen flex flex-row justify-left items-center bg-[#141414]"}>
            {/*<Bgicons/>*/}
            <MainTitle />
            <div className={"p-4 my-20 w-1/3 self-end mx-auto rounded-t-3xl z-10 grid grid-rows-2 gap-8"}>
                {/*bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg*/}
                <EventLabel href={"https://www.linkedin.com/company/gfg-glau/"} name={"Linkedin 500+ Followers"} color={"bg-[#0072b1]"} />
                <EventLabel href={"https://www.instagram.com/gfg_glau/"} name={"Instagram 200+ Followers"} color={"bg-[#e95950]"} />
            </div>
        </div>
    )
}