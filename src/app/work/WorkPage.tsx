import EventShowcase from "@/app/work/Components/eventshowcase";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {useRef, useEffect} from "react";

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
                scrub: 0.6,
                pin: true
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
                    <EventShowcase title={"Event Name"} description={"wonderful event"} />
                    <EventShowcase title={"Event Name"} description={"wonderful event"} />
                    <EventShowcase title={"Event Name"} description={"wonderful event"} />
                    <EventShowcase title={"Event Name"} description={"wonderful event"} />
                </div>
            </div>
        </div>

    )
}