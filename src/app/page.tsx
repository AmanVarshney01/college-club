"use client";
import HomeSection from "@/app/home/HomeSection";
import MissionSection from "@/app/home/MissionSection";
// import Navbar from "@/app/home/Components/navbar";
import {PageWrapper} from "@/app/page-wrapper";
// import Notification from "@/app/home/Components/notification";

export default function Home() {

    return (
        // <ThemeProvider attribute="class" defaultTheme={"dark"} disableTransitionOnChange enableSystem={false}>
            <PageWrapper>
                <main id="container" className={""}>
                    <HomeSection/>
                    {/*<Notification />*/}
                    <MissionSection />
                </main>
            </PageWrapper>
        // </ThemeProvider>
    )
}
