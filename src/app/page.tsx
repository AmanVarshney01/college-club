"use client";
import AboutHome from "@/app/about/AboutPage";
import ContactHome from "@/app/contact/ContactPage";
import WorkHome from "@/app/work/WorkPage";
import HomePage from "@/app/home/HomePage";
// import {gsap} from 'gsap';
// import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useEffect} from "react";
import Navbar from "@/app/navbar";

export default function Home() {

    return (
        <main id="container" className={'text-white scroll-smooth font-mono overflow-y-scroll snap-y snap-mandatory  '}>
            <Navbar />
            <section id="homepage">
                <HomePage/>
            </section>
            <section id="workpage">
                <WorkHome/>
            </section>
            <section id="aboutpage">
                <AboutHome/>
            </section>
            <section id="contactpage">
                <ContactHome/>
            </section>
        </main>
    )
}