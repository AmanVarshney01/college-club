import Image from "next/image";
import university from 'public/cambridge.jpeg'

export default function MissionSection () {
    return (
        <section className={"h-full bg-transparent flex flex-row lg:px-8 py-24 px-2 relative justify-between"}>
            <div className={"w-1/2 flex flex-col justify-center gap-2 z-10"}>
                <h2 className={"text-2xl"}>Our Mission</h2>
                <span className={"text-2xl"}>is to cultivate a vibrant</span>
                <span className={"text-7xl font-semibold"}>Coding Culture</span>
                <span className={"text-4xl"}>on Campus</span>
                {/*<span className={""}>Through our various programs, events, and initiatives, we strive to create a welcoming and inclusive community of coders, where members can learn, share ideas, and collaborate on projects.</span>*/}
            </div>
            {/*our mission is to cultivate a vibrant coding culture on campus*/}
            <div className={"w-1/2 h-full z-0"}>
                <Image className={""} src={university} alt={"University"}/>
            </div>

        </section>
    )
}