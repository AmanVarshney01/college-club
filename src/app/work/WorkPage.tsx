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
            translateX: "-400vw",
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
                    <section className={"w-full h-screen bg-[#121212] flex-shrink-0"}>
                        <div>
                            <h2>What we do..</h2>
                            <p>GeeksforGeeks Student Chapter at GLA University is not just about serious technical pursuits; we also offer a range of fun and playful tech-related events and activities. As an extension of the renowned GeeksforGeeks platform, our club is committed to fostering a vibrant and engaging community of technology enthusiasts.

                                In addition to our workshops, seminars, and competitions, we organize a variety of events that encourage members to explore the more playful and creative side of technology. From game development challenges to coding-based treasure hunts, we offer opportunities for members to showcase their skills in a fun and engaging way.

                                Our enthusiastic team of student volunteers is dedicated to creating a welcoming and inclusive environment that encourages participation from members of all backgrounds and skill levels. We believe that a passion for technology should be a source of joy and creativity, not just a serious pursuit.

                                Joining GeeksforGeeks Student Chapter at GLA University means gaining access to a comprehensive platform for exploring your passion for technology, developing your skills, and connecting with a community of like-minded individuals. Whether you are a serious technical enthusiast or someone who just loves to play around with technology, we have something to offer.</p>
                        </div>
                    </section>
                    <EventShowcase title={"Event Name"} description={"wonderful event"} />
                    <EventShowcase title={"Event Name"} description={"wonderful event"} />
                    <EventShowcase title={"Event Name"} description={"wonderful event"} />
                    <EventShowcase title={"Event Name"} description={"wonderful event"} />
                </div>
            </div>
        </div>

    )
}