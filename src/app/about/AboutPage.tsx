import Avatar from "@/app/about/Components/avatar";

export default function AboutHome() {
    return (
        <div className={"bg-[#141414] px-4 py-8 h-screen"}>
            {/*<div className={"bg-green-300"}></div>*/}
            <div className={"grid grid-cols-4 gap-y-24"}>
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