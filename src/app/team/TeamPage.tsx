import Avatar from "@/app/team/Components/avatar";
import portrait from 'public/portrait.jpg'

export default function AboutHome() {
    return (
        <div className={"headtext bg-[#121212] w-full h-screen flex flex-col"}>
            <div className={"grow flex flex-row w-full"}>
                <div className={"w-fit h-fit m-28"}>
                    <h2 className={"text-9xl"}>Our Team</h2>
                    <h3 className={"text-right text-xl"}>that make us great</h3>
                </div>
                <div className={""}></div>
            </div>
            <div className={"flex flex-row place-items-end gap-4 w-full overflow-x-scroll flex-shrink-0 flex-nowrap h-min"}>
                <Avatar name={"Aman Varshney"} post={"President"} photo={portrait}/>
                <Avatar name={"Aman Varshney"} post={"President"} photo={portrait}/>
                <Avatar name={"Aman Varshney"} post={"President"} photo={portrait}/>
                <Avatar name={"Aman Varshney"} post={"President"} photo={portrait}/>
                <Avatar name={"Aman Varshney"} post={"President"} photo={portrait}/>
                <Avatar name={"Aman Varshney"} post={"President"} photo={portrait}/>
                <Avatar name={"Aman Varshney"} post={"President"} photo={portrait}/>
            </div>
        </div>
    )
}