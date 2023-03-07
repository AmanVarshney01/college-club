"use client";
import EventShowcase from "@/app/work/Components/eventshowcase";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useEffect, useRef} from "react";
import EventLabel from "@/app/home/Components/eventlabel";

export default function WorkHome() {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: "-400vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 1,
                pin: true,
                snap: 1 / (5 - 1),
            }
        })

        return () => {
            pin.kill()
        }

    }, [])

    return (
        <div className={"overflow-hidden"}>
            <div ref={triggerRef}>
                <div ref={sectionRef} className={"h-screen w-full flex flex-row relative"}>
                    <section className={"w-full h-screen bg-[#121212] flex-shrink-0 flex-row flex"}>
                        <div className={"h-full w-1/2 m-24 flex flex-col gap-16 basis-2/5"}>
                            <h2 className={"text-7xl"}>Who Are We?</h2>
                            <p className={"text-xl text-gray-200"}>GeeksforGeeks Student Chapter at GLA University is not just about serious technical
                                pursuits; we also offer a range of fun and playful tech-related events and activities.
                                As an extension of the renowned GeeksforGeeks platform, our club is committed to
                                fostering a vibrant and engaging community of technology enthusiasts. In addition to our
                                workshops, seminars, and competitions, we organize a variety of events that encourage
                                members to explore the more playful and creative side of technology.</p>
                            <div className={"w-max mx-auto flex flex-row gap-6 my-auto"}>
                                <span className={"text-gray-400"}>Learn more about us on:</span>
                                <EventLabel href={"https://www.linkedin.com/company/gfg-glau/"} name={"Linkedin"} color={"bg-[#0072b1]"} />
                                <EventLabel href={"https://www.instagram.com/gfg_glau/"} name={"Instagram"} color={"bg-[#e95950]"} />
                            </div>
                        </div>
                        <div className={"w-max h-full basis-3/5 flex flex-col justify-center py-12"}>
                            <div className={'flex flex-col place-items-center'}>
                                    <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                                        <span className={"absolute left-20 text-2xl w-max"}>Disha</span>
                                    </div>
                                <div className={"w-1 h-40 bg-gray-100 opacity-20"}></div>
                            </div>

                            <div className={'mx-auto flex flex-col place-items-center'}>
                                <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                                    <span className={"absolute right-20 text-2xl w-max"}>Brain It Out</span>
                                </div>
                                <div className={"w-1 h-40 bg-gray-100 opacity-20"}></div>
                            </div>
                            <div className={'mx-auto flex flex-col place-items-center'}>
                                <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                                    <span className={"absolute left-20 text-2xl w-max"}>Solving For India</span>
                                </div>
                                <div className={"w-1 h-40 bg-gray-100 opacity-20"}></div>
                            </div>
                            <div className={'mx-auto flex flex-col place-items-center'}>
                                <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                                    <span className={"absolute right-20 text-2xl w-man"}>Entrevista</span>
                                </div>
                                {/*<div className={"w-1 h-40 bg-white"}></div>*/}
                            </div>

                        </div>
                    </section>
                    <EventShowcase title={"Disha"} description={"wonderful event"}/>
                    <EventShowcase title={"Brain It Out"} description={"wonderful event"}/>
                    <EventShowcase title={"Fun Activities"} description={"wonderful event"}/>
                    <EventShowcase title={"Entrevista"} description={"wonderful event"}/>
                </div>
            </div>
        </div>

    )
}