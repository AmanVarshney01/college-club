import TeamHome from "@/app/team/TeamPage";
import ContactPage from "@/app/contact/ContactPage";
import WorkHome from "@/app/work/WorkPage";
import HomePage from "@/app/home/HomePage";
import Navbar from "@/app/navbar";
import AboutPage from "@/app/about/AboutPage";
import FaqsPage from "@/app/faqs/FaqsPage";

import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
})


export default function Home() {

    return (
        <main id="container" className={`text-white ${montserrat.className}`}>
            <Navbar />
            <section id="homepage" className={"snap-center"}>
                <HomePage/>
            </section>
            <section id="aboutpage" className={"snap-center"}>
                <AboutPage/>
            </section>
            <section id="workpage" className={"snap-start"}>
                <WorkHome/>
            </section>
            <section id="teampage" className={"snap-center"}>
                <TeamHome/>
            </section>
            <section id="faqspage" className={"snap-center"}>
                <FaqsPage />
            </section>
            <section id="contactpage" className={"snap-center"}>
                <ContactPage/>
            </section>
        </main>
    )
}
