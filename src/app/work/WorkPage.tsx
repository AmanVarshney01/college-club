"use client";
import EventShowcase from "@/app/work/Components/eventshowcase";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {useEffect, useRef} from "react";

export default function WorkHome() {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: "-300vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 1,
                pin: true,
                snap: 1 / (4 - 1),
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
                    <EventShowcase title={"Entrevista"} description={"wonderful event"}/>
                    <EventShowcase title={"Solving For India"} description={"wonderful event"}/>
                    <EventShowcase title={"Brain It Out"} description={"wonderful event"}/>
                    <EventShowcase title={"Disha"} description={"wonderful event"}/>
                </div>
            </div>
        </div>

    )
}