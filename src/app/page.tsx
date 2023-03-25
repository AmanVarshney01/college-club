"use client";
import HomePage from "@/app/home/HomePage";
// import {ThemeProvider} from "next-themes";
import dynamic from "next/dynamic";

// const About = dynamic(() => import('@/app/about/page'))
// const Contact = dynamic(() => import('@/app/contact/page'))
// const Faqs = dynamic(() => import('@/app/faqs/page'))
// const Work = dynamic(() => import('@/app/event/page'))
// const Footer = dynamic(() => import('@/app/footer/Footer'))
// const Team = dynamic(() => import('@/app/team/page'))
const GoToTop = dynamic(() => import('@/app/GoToTop'))

export default function Home() {

    return (
        // <ThemeProvider attribute="class" defaultTheme={"dark"} disableTransitionOnChange enableSystem={false}>
            <main id="container" className={""}>
                <GoToTop />
                <HomePage/>
            </main>
        // </ThemeProvider>
    )
}
