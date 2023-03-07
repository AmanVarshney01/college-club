"use client";
import TeamHome from "@/app/team/TeamPage";
import ContactHome from "@/app/contact/ContactPage";
import WorkHome from "@/app/work/WorkPage";
import HomePage from "@/app/home/HomePage";
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
            <section id="teampage" className={"snap-center"}>
                <TeamHome/>
            </section>
            <section id="contactpage" className={"snap-center"}>
                <ContactHome/>
            </section>
        </main>
    )
}