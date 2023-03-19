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
                <section id="homepage" className={""}>
                    <HomePage/>
                </section>

                <section id="aboutpage" className={""}>
                    <AboutPage/>
                </section>

                <section id="workpage" className={""}>
                    <WorkHome/>
                </section>

                <section id="teampage" className={""}>
                    <TeamHome/>
                </section>

                <section id="faqspage" className={""}>
                    <FaqsPage />
                </section>

                <section id="contactpage" className={""}>
                    <ContactPage/>
                </section>

                <section id="footer" className={""}>
                    <Footer />
                </section>
            </main>
        </ThemeProvider>
    )
}
