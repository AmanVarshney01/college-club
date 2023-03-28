"use client";
import EventShowcase from "@/app/event/Components/EventShowcase";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useEffect, useRef} from "react";
import funactivity from 'public/funactivity.png'
import {PageWrapper} from "@/app/page-wrapper";

export default function Work() {

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
                scrub: 0.5,
                pin: true,
                snap: 1 / (5 - 1),
            }
        })

        return () => {
            pin.kill();
        }

    }, [])

    return (
        <PageWrapper>
            <section id="workpage" className={"overflow-hidden"}>
                <div ref={triggerRef}>
                    <div ref={sectionRef} className={"min-h-screen flex flex-row relative w-[500vw]"}>
                        <EventShowcase imgSrc={funactivity} title={"IT Tech Mela"} subTitle={""}
                                       description={"wonderful event"}/>
                        <EventShowcase imgSrc={funactivity} title={"Entrevista"} subTitle={"Mock Placement Drive"}
                                       description={"wonderful event"}/>
                        <EventShowcase imgSrc={funactivity} title={"Solving For India"} subTitle={"Fun Activities"}
                                       description={"wonderful event"}/>
                        <EventShowcase imgSrc={funactivity} title={"Brain It Out"} subTitle={""}
                                       description={"wonderful event"}/>
                        <EventShowcase imgSrc={funactivity} title={"Disha"} subTitle={"Guide to what's next"}
                                       description={"wonderful event"}/>
                    </div>
                </div>
            </section>
        </PageWrapper>

    )
}