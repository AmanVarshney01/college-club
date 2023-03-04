import NameCard from "@/app/about/Components/namecard";

export default function AboutHome() {
    return (
        <div className={"bg-[#141414] px-4 py-8 h-screen"}>
            {/*<div className={"bg-green-300"}></div>*/}
            <div className={"grid grid-cols-4 gap-y-24"}>
                <NameCard/>
                <NameCard/>
                <NameCard/>
                <NameCard/>
                <NameCard/>
                <NameCard/>
            </div>
        </div>
    )
}