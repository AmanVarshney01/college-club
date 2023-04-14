import Image from "next/image";
import gla from 'public/gla1.webp'

export default function MissionSection () {
    return (
        <section className={"h-full w-full bg-transparent flex lg:flex-row flex-col lg:px-8 py-24 px-2 relative gap-8"}>
            <div className={"min-w-fit flex flex-col justify-center gap-2 z-10"}>
                <p className={"flex flex-col gap-3"}>
                    <span className={"text-2xl"}><span className={"text-5xl"}>Our Mission </span>is to cultivate a vibrant </span>
                    <span className={"text-7xl font-semibold"}>Coding Culture </span>
                    <span className={"text-2xl"}>on Campus and empower students to develop</span>
                    <span className={"text-2xl"}>their coding skills and <span className={"text-7xl"}>creativity.</span></span>
                </p>
                {/*<span className={""}>Through our various programs, events, and initiatives, we strive to create a welcoming and inclusive community of coders, where members can learn, share ideas, and collaborate on projects.</span>*/}
            </div>
            {/*our mission is to cultivate a vibrant coding culture on campus*/}
            <div className={"justify-end w-auto h-full z-0"}>
                <Image loading={"lazy"} placeholder={"blur"} className={""} src={gla} alt={"University"}/>
            </div>

        </section>
    )
}