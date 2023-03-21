"use client";
// import TeamSection from "@/app/team/TeamPage";
// import ContactPage from "@/app/contact/ContactPage";
// import WorkHome from "@/app/work/WorkPage";
import HomePage from "@/app/home/HomePage";
// import AboutPage from "@/app/about/AboutPage";
// import FaqsPage from "@/app/faqs/FaqsPage";
import {Montserrat} from "next/font/google";
import {ThemeProvider} from "next-themes";
// import Footer from "@/app/footer/Footer";
// import Cursor from "@/app/Cursor";
// import {gsap} from "gsap";
// import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
// import {ScrollSmoother} from 'gsap/dist/ScrollSmoother'
// import {useEffect} from "react";
import dynamic from "next/dynamic";


const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
})

const About = dynamic(() => import('@/app/about/AboutPage'))
const Contact = dynamic(() => import('@/app/contact/ContactPage'))
const Faqs = dynamic(() => import('@/app/faqs/FaqsPage'))
const Work = dynamic(() => import('@/app/work/WorkPage'))
const Footer = dynamic(() => import('@/app/footer/Footer'))
const Team = dynamic(() => import('@/app/team/TeamPage'))

export default function Home() {
    //
    //
    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    // useEffect(() => {
    //
    //     let smoother = ScrollSmoother.create({
    //         wrapper: '#body',
    //         content: '#container'
    //     })
    // })

    return (
        <ThemeProvider attribute="class" defaultTheme={"dark"} disableTransitionOnChange enableSystem={false}>
            <main id="container" className={`text-white ${montserrat.className}`}>
                {/*<Cursor />*/}
                <section id="homepage" className={"snap-start"}>
                    <HomePage/>
                </section>

                <section id="aboutpage" className={"snap-start"}>
                    <About/>
                </section>

                <section id="workpage" className={"snap-start"}>
                    <Work />
                </section>

                <section id="teampage" className={"snap-start"}>
                    <Team />
                </section>

                <section id="faqspage" className={"snap-start"}>
                    <Faqs />
                </section>

                <section id="contactpage" className={"snap-start"}>
                    <Contact />
                </section>

                <section id="footer" className={"snap-start"}>
                    <Footer />
                </section>
            </main>
        </ThemeProvider>
    )
}
