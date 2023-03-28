import Avatar from "@/app/about/Components/Avatar";
import portrait from 'public/portrait.jpg'

export default function TeamSection() {
    return (
        <section id="teampage" className={"bg-transparent w-full min-h-screen flex flex-col"}>
            <div className={"h-[50vh] flex flex-row w-full items-center"}>
                <div className={"w-fit h-fit m-10"}>
                    <h2 className={"2xl:text-8xl text-4xl"}>Our Team</h2>
                    <h3 className={"text-right text-xl"}>that make us great</h3>
                </div>
            </div>
            <div className={"px-24 grid grid-cols-3 place-items-center gap-24 w-full flex-shrink-0 flex-nowrap h-min"}>
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