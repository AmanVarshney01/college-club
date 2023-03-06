"use client";
import AboutHome from "@/app/about/AboutPage";
import ContactHome from "@/app/contact/ContactPage";
import WorkHome from "@/app/work/WorkPage";
import HomePage from "@/app/home/HomePage";
// import {gsap} from 'gsap';
// import {ScrollTrigger} from 'gsap/ScrollTrigger'
// import {useEffect} from "react";
import Navbar from "@/app/navbar";

export default function Home() {

    return (
        <main id="container" className={'text-white font-mono'}>
            <Navbar />
            <section id="homepage" className={"snap-center"}>
                <HomePage/>
            </section>
            <section id="workpage" className={"snap-start"}>
                <WorkHome/>
            </section>
            <section id="aboutpage" className={"snap-center"}>
                <AboutHome/>
            </section>
            <section id="contactpage" className={"snap-center"}>
                <ContactHome/>
            </section>
        </main>
    )
}