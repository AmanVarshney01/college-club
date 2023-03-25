import Avatar from "@/app/team/Components/Avatar";
import portrait from 'public/portrait.jpg'

export default function AboutHome() {
    return (
        <section id="teampage" className={"montserrat bg-transparent w-full min-h-screen flex flex-col"}>
            <div className={"grow flex flex-row w-full items-center"}>
                <div className={"w-fit h-fit m-10"}>
                    <h2 className={"2xl:text-8xl text-4xl"}>Our Team</h2>
                    <h3 className={"text-right text-xl"}>that make us great</h3>
                </div>
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
        </section>
    )
}