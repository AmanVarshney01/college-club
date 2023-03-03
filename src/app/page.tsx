import AboutHome from "@/app/about/AboutPage";
import ContactHome from "@/app/contact/ContactPage";
import WorkHome from "@/app/work/WorkPage";
import HomePage from "@/app/home/HomePage";
// import {gsap} from 'gsap';
// import {ScrollTrigger} from 'gsap/ScrollTrigger'
// import {useEffect} from "react";

export default function Home() {

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //
    //     ScrollTrigger.defaults({
    //         toggleActions: "restart pause resume pause",
    //         scroller: "#container"
    //     });
    // })

    return (
        <main id="container" className={'text-white scroll-smooth font-mono overflow-y-scroll snap-y snap-mandatory  '}>
            <section>
                <HomePage/>
            </section>
            <section>
                <WorkHome/>
            </section>
            <section>
                <AboutHome/>
            </section>
            <section>
                <ContactHome/>
            </section>

        </main>
    )
}