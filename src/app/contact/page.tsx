import ContactForm from "@/app/contact/Components/ContactForm";
import FaqsSection from "@/app/contact/Components/FaqsSection";
import {PageWrapper} from "@/app/page-wrapper";
import TextSlideshow from "@/app/contact/Components/TextSlideshow";

export default function Page() {
    return (
        <PageWrapper>
            <section id="contactpage" className={"flex flex-col z-10 bg-transparent min-h-[100svh] w-full lg:px-4 lg:py-2 px-2 py-1"}>

                <div className={"flex flex-row w-full min-h-[100svh] justify-between gap-20 items-center px-[8vw]"}>
                    {/*<h1 className={"text-9xl"}>Contact</h1>*/}
                    <TextSlideshow />
                    <ContactForm/>
                </div>
                <FaqsSection/>
            </section>
        </PageWrapper>)
}