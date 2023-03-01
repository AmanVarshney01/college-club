import AboutHome from "@/app/about/page";
import ContactHome from "@/app/contact/page";
import WorkHome from "@/app/work/page";
import HomePage from "@/app/Components/HomePage";

export default function Home() {
    return (
        <main className={'snap-y snap-mandatory'}>

            <section className={"snap-start"}>
                <HomePage />
            </section>

            <section className={"snap-start"}>
                <WorkHome/>
            </section>

            <section className={"snap-start"}>
                <AboutHome/>
            </section>

            <section className={"snap-start"}>
                <ContactHome/>
            </section>
        </main>
    )
}