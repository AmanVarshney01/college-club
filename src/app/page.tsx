"use client";
import HomeSection from "@/app/home/HomeSection";
import dynamic from "next/dynamic";
import {PageWrapper} from "@/app/page-wrapper";

const MissionSection = dynamic(() => import("@/app/home/MissionSection"));

export default function Home() {

    return (
        // <ThemeProvider attribute="class" defaultTheme={"dark"} disableTransitionOnChange enableSystem={false}>
            <PageWrapper>
                <main id="container" className={""}>
                    <HomeSection/>
                    <MissionSection />
                </main>
            </PageWrapper>
        // </ThemeProvider>
    )
}
