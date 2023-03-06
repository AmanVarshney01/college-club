import Avatar from "@/app/about/Components/avatar";
import Image from "next/image";
import portrait from 'public/portrait.jpg'

export default function AboutHome() {
    return (
        <div className={"bg-[#141414] w-full h-screen flex flex-col"}>
            {/*<div className={"bg-green- 300"}></div>*/}
            <div className={"grow"}>

            </div>
            <div className={"flex flex-row place-items-end gap-4 h-screen w-full overflow-x-scroll flex-shrink-0 flex-nowrap"}>
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
                <Avatar/>
            </div>
        </div>
    )
}