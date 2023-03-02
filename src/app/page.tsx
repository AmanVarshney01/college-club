import AboutHome from "@/app/about/AboutPage";
import ContactHome from "@/app/contact/ContactPage";
import WorkHome from "@/app/work/WorkPage";
import HomePage from "@/app/Components/HomePage";
import Navbar from "@/app/navbar";

export default function Home() {
    return (
        <main className={'text-white scroll-smooth font-mono'}>
            <Navbar />
            <section className={""}>
                <HomePage />
            </section>

            <section id="workpage" className={""}>
                <WorkHome/>
            </section>

            <section id="aboutpage" className={""}>
                <AboutHome/>
            </section>

            <section id="contactpage" className={""}>
                <ContactHome/>
            </section>
        </main>
    )
}