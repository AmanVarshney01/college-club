import instagram from 'public/socialIcons/instagram.png'
import Image from "next/image";
import linkedin from "../../../public/socialIcons/linkedin.png";

export default function AboutPage () {

    return (
        <section id="aboutpage" className={"w-full min-h-screen bg-transparent flex-shrink-0 2xl:flex-row flex-col flex"}>
            <div className={"max-h-full 2xl:w-1/2 2xl:m-24 m-5 flex flex-col 2xl:gap-16 gap-6 2xl:basis-2/5"}>
                <h2 className={"2xl:text-7xl text-4xl"}>Who Are We?</h2>
                <p className={"2xl:text-xl text-lg text-gray-200"}>GeeksforGeeks Student Chapter at GLA University is not just about serious technical
                    pursuits; we also offer a range of fun and playful tech-related events and activities.
                    As an extension of the renowned GeeksforGeeks platform, our club is committed to
                    fostering a vibrant and engaging community of technology enthusiasts. In addition to our
                    workshops, seminars, and competitions, we organize a variety of events that encourage
                    members to explore the more playful and creative side of technology.</p>
                <div className={"flex flex-col gap-16 justify-end h-full"}>
                    <div className={"underline"}>
                        <a id="linkCursor"  target="_blank" href="https://www.geeksforgeeks.org/geeksforgeeks-student-chapter/">Learn about GeeksforGeeks Student Chapter</a>
                    </div>
                    <div className={"w-full flex flex-col 2xl:flex-row 2xl:gap-6 gap-1 h-max"}>
                        <span className={"text-gray-400 text-sm 2xl:text-lg"}>Learn more about us on:</span>
                        {/*<SocialButton href={"https://www.linkedin.com/company/gfg-glau/"} name={"Linkedin"} color={"bg-[#0072b1]"} />*/}
                        {/*<SocialButton href={"https://www.instagram.com/gfg_glau/"} name={"Instagram"} color={"bg-[#e95950]"} />*/}
                        <div className={"flex flex-row justify-evenly gap-4"}>
                            <a id="linkCursor"  href="#"  className={"bg-white rounded-full border border-white hover:border-[#D8E9A8] hover:bg-[#D8E9A8]"}><Image loading="lazy" width={25} height={25} src={instagram} alt={"instagram"} /></a>
                            <a id="linkCursor"  href="#" className={"bg-white rounded-full border border-white hover:border-[#D8E9A8] hover:bg-[#D8E9A8]"}><Image loading="lazy" width={25} height={25} src={linkedin} alt={"linkedin"} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-full min-h-screen py-24 2xl:basis-3/5 flex flex-col justify-center"}>
                <div className={'flex flex-col place-items-center flex-1'}>
                    <div className={"w-10 h-10 bg-[#4E9F3D] rounded-full relative"}>
                        {/*<span className={"text-white text-4xl"}>1</span>*/}
                        <span className={"absolute right-20 2xl:text-2xl text-sm w-max"}>IT Tech Mela</span>
                    </div>
                    <div className={`w-1 grow bg-gray-100 opacity-50`}></div>
                </div>

                <div className={'flex flex-col place-items-center opacity-50 flex-1'}>
                    <div className={" w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                        {/*<span className={"text-white text-4xl"}>1</span>*/}
                        <span className={"absolute left-20 2xl:text-2xl text-sm w-max"}>Entrevista</span>
                    </div>
                    <div className={`w-1 grow bg-gray-100 opacity-20`}></div>
                </div>

                <div className={'mx-auto flex flex-col place-items-center opacity-50 flex-1'}>
                    <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                        <span className={"absolute right-20 2xl:text-2xl text-sm w-max"}>Solving For India</span>
                    </div>
                    <div className={`w-1 grow bg-gray-100 opacity-20`}></div>
                </div>

                <div className={'mx-auto flex flex-col place-items-center opacity-50 flex-1'}>
                    <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                        <span className={"absolute left-20 2xl:text-2xl text-sm w-max"}>Brain It Out</span>
                    </div>
                    <div className={`w-1 grow bg-gray-100 opacity-20`}></div>
                </div>

                <div className={'mx-auto flex flex-col place-items-center opacity-50 relative'}>
                    <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                        <span className={"absolute right-20 2xl:text-2xl text-sm w-man"}>Disha</span>
                    </div>
                    {/*<div className={" w-[40rem] h-[40rem] absolute bottom-0 -right-38 z-50 pointer-events-none bg-[#bedba8] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>*/}

                    {/*<div className={"w-1 h-40 bg-white"}></div>*/}
                </div>
            </div>
        </section>
    )
}