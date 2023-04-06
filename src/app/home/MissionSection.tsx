import Image from "next/image";
import university from 'public/cambridge.jpeg'

export default function MissionSection () {
    return (
        <section className={"h-full bg-transparent flex flex-row lg:px-8 py-24 px-2 relative justify-between"}>
            <div className={"w-fit flex flex-col justify-center gap-2 z-10"}>
                <p className={"flex flex-col gap-3"}>
                    <span className={"text-5xl"}>Our Mission </span>
                    <span className={"text-2xl"}>is to cultivate a vibrant </span>
                    <span className={"text-7xl font-semibold"}>Coding Culture </span>
                    <span className={"text-2xl"}>on Campus and empower students to develop</span>
                    <span className={"text-2xl"}>their coding skills and <span className={"text-7xl"}>creativity.</span></span>
                </p>
                {/*<span className={""}>Through our various programs, events, and initiatives, we strive to create a welcoming and inclusive community of coders, where members can learn, share ideas, and collaborate on projects.</span>*/}
            </div>
            {/*our mission is to cultivate a vibrant coding culture on campus*/}
            <div className={"w-1/2 h-full z-0"}>
                <Image loading={"lazy"} placeholder={"blur"} className={""} src={university} alt={"University"}/>
            </div>

        </section>
    )
}