"use client";
import HomeSection from "@/app/home/HomeSection";
import MissionSection from "@/app/home/MissionSection";
// import dynamic from "next/dynamic";
import {PageWrapper} from "@/app/page-wrapper";
import EventSection from "@/app/home/EventSection";

// const MissionSection = dynamic(() => import("@/app/home/MissionSection"));

export default function Home() {

    return (
        // <ThemeProvider attribute="class" defaultTheme={"dark"} disableTransitionOnChange enableSystem={false}>
            <PageWrapper>
                <main id="container" className={"z-10"}>
                    <HomeSection/>
                    <MissionSection />
                    <EventSection />
                </main>
            </PageWrapper>
        // </ThemeProvider>
    )
}
