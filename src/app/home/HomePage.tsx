// import Bgicons from "@/app/Components/bgicons";
import EventLabel from "@/app/home/Components/eventlabel";
import MainTitle from "@/app/home/Components/maintitle";

export default function HomePage () {
    return (
        <div className={"relative h-screen flex flex-row justify-left items-center bg-[#141414]"}>
            {/*<Bgicons/>*/}
            <MainTitle />
            <div className={"p-4 my-4 w-1/3 self-end mx-auto rounded-t-3xl z-10 grid grid-rows-2 gap-8"}>
                {/*bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg*/}
                <EventLabel href={""} name={"Entrevista"} />
                <EventLabel href={""} name={"Solving For India Fun Activities"} />
                <EventLabel href={""} name={"Brain It Out"} />
                <EventLabel href={""} name={"Disha"} />
            </div>
        </div>
    )
}