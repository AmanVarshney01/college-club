import EventShowcase from "@/app/work/Components/eventshowcase";

export default function WorkHome() {
    return (
        <div className={"bg-[#141414] flex overflow-x-scroll place-items-center h-screen"}>
            <EventShowcase />
            <EventShowcase />
            <EventShowcase />
            <EventShowcase />
        </div>
    )
}