"use client";
import TeamHome from "@/app/team/TeamPage";
import ContactPage from "@/app/contact/ContactPage";
import WorkHome from "@/app/work/WorkPage";
import HomePage from "@/app/home/HomePage";
import AboutPage from "@/app/about/AboutPage";
import FaqsPage from "@/app/faqs/FaqsPage";
import {Montserrat} from "next/font/google";
import {ThemeProvider} from "next-themes";
import Footer from "@/app/footer/Footer";
import Cursor from "@/app/cursor";


const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
})

export default function Home() {

    return (
        <ThemeProvider attribute="class" defaultTheme={"dark"} disableTransitionOnChange enableSystem={false}>
            <main id="container" className={`text-white ${montserrat.className}`}>
                <Cursor />
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

                <section id="footer" className={"snap-start"}>
                    <Footer />
                </section>
            </main>
        </ThemeProvider>
    )
}
