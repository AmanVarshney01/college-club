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
            <section id="homepage" className={"snap-start"}>
                <HomePage/>
            </section>

            <section id="aboutpage" className={"snap-start"}>
                <AboutPage/>
            </section>

            <section id="workpage" className={"snap-start"}>
                <WorkHome/>
            </section>

            <section id="teampage" className={"snap-start"}>
                <TeamHome/>
            </section>

            <section id="faqspage" className={"snap-start"}>
                <FaqsPage />
            </section>

            <section id="contactpage" className={"snap-start"}>
                <ContactPage/>
            </section>
        </main>
    )
}
