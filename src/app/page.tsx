import AboutHome from "@/app/about/AboutPage";
import ContactHome from "@/app/contact/ContactPage";
import WorkHome from "@/app/work/WorkPage";
import HomePage from "@/app/Components/HomePage";

export default function Home() {
    return (
        <main className={''}>

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