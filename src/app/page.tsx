"use client";
import HomeSection from "@/app/home/HomeSection";
import MissionSection from "@/app/home/MissionSection";
import {PageWrapper} from "@/app/page-wrapper";
import EventSection from "@/app/home/EventSection";

export default function Home() {

    return (
            <PageWrapper>
                <main id="container" className={"z-10"}>
                    <HomeSection/>
                    <MissionSection />
                    <EventSection />
                </main>
            </PageWrapper>
    )
}
