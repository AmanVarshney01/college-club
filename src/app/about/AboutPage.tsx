import SocialButton from "@/app/about/Components/socialButton";

export default function AboutPage () {

    let poleHeight = 32

    return (
        <section className={"w-full h-screen bg-transparent flex-shrink-0 flex-row flex"}>
            <div className={"h-full w-1/2 m-24 flex flex-col gap-16 basis-2/5"}>
                <h2 className={"text-7xl"}>Who Are We?</h2>
                <p className={"text-xl text-gray-200"}>GeeksforGeeks Student Chapter at GLA University is not just about serious technical
                    pursuits; we also offer a range of fun and playful tech-related events and activities.
                    As an extension of the renowned GeeksforGeeks platform, our club is committed to
                    fostering a vibrant and engaging community of technology enthusiasts. In addition to our
                    workshops, seminars, and competitions, we organize a variety of events that encourage
                    members to explore the more playful and creative side of technology.</p>
                <div className={"underline"}>
                    <a target="_blank" href="https://www.geeksforgeeks.org/geeksforgeeks-student-chapter/">Learn about GeeksforGeeks Student Chapter</a>
                </div>
                <div className={"w-max flex gap-6 my-auto"}>
                    <span className={"text-gray-400"}>Learn more about us on:</span>
                    <SocialButton href={"https://www.linkedin.com/company/gfg-glau/"} name={"Linkedin"} color={"bg-[#0072b1]"} />
                    <SocialButton href={"https://www.instagram.com/gfg_glau/"} name={"Instagram"} color={"bg-[#e95950]"} />
                </div>
            </div>
            <div className={"w-max h-full basis-3/5 flex flex-col justify-center py-12"}>
                <div className={'flex flex-col place-items-center'}>
                    <div className={"w-10 h-10 bg-[#4E9F3D] rounded-full relative"}>
                        {/*<span className={"text-white text-4xl"}>1</span>*/}
                        <span className={"absolute left-20 text-2xl w-max"}>IT Tech Mela</span>
                    </div>
                    <div className={`w-1 h-${poleHeight} bg-gray-100 opacity-50`}></div>
                </div>

                <div className={'flex flex-col place-items-center opacity-50'}>
                    <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                        {/*<span className={"text-white text-4xl"}>1</span>*/}
                        <span className={"absolute left-20 text-2xl w-max"}>Entrevista</span>
                    </div>
                    <div className={`w-1 h-${poleHeight} bg-gray-100 opacity-20`}></div>
                </div>

                <div className={'mx-auto flex flex-col place-items-center opacity-50'}>
                    <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                        <span className={"absolute right-20 text-2xl w-max"}>Solving For India</span>
                    </div>
                    <div className={`w-1 h-${poleHeight} bg-gray-100 opacity-20`}></div>
                </div>

                <div className={'mx-auto flex flex-col place-items-center opacity-50'}>
                    <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                        <span className={"absolute left-20 text-2xl w-max"}>Brain It Out</span>
                    </div>
                    <div className={`w-1 h-${poleHeight} bg-gray-100 opacity-20`}></div>
                </div>

                <div className={'mx-auto flex flex-col place-items-center opacity-50 relative'}>
                    <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                        <span className={"absolute right-20 text-2xl w-man"}>Disha</span>
                    </div>
                    {/*<div className={" w-[40rem] h-[40rem] absolute bottom-0 -right-38 z-50 pointer-events-none bg-[#bedba8] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>*/}

                    {/*<div className={"w-1 h-40 bg-white"}></div>*/}
                </div>
            </div>
        </section>
    )
}