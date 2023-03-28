"use client";
import HomeSection from "@/app/home/HomeSection";
// import {ThemeProvider} from "next-themes";
import dynamic from "next/dynamic";
// import Navbar from "@/app/home/Components/navbar";

const AboutSection = dynamic(() => import("@/app/home/AboutSection"));

export default function Home() {

    return (
        // <ThemeProvider attribute="class" defaultTheme={"dark"} disableTransitionOnChange enableSystem={false}>
            <main id="container" className={""}>
                {/*<GoToTop />*/}
                <HomeSection/>
                <AboutSection />
            </main>
        // </ThemeProvider>
    )
}
