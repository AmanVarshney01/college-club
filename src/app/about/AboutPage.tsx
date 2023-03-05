import Avatar from "@/app/about/Components/avatar";

export default function AboutHome() {
    return (
        <div className={"bg-blue-400 w-full h-screen flex flex-col"}>
            {/*<div className={"bg-green- 300"}></div>*/}
            <div className={"grow"}>

            </div>
            <div className={"flex flex-row place-items-end justify-center gap-4 h-screen w-full overflow-x-scroll flex-shrink-0"}>
                <Avatar/>
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