import ContactForm from "@/app/contact/Components/ContactForm";
import FaqsSection from "@/app/contact/faqs/FaqsSection";
import {PageWrapper} from "@/app/page-wrapper";

export default function Page() {
    return (<PageWrapper>
            <section id="contactpage" className={"flex flex-col bg-transparent min-h-[100svh] w-full lg:px-4 lg:py-2 px-2 py-1"}>

                <div className={"flex flex-col justify-end min-h-[100svh] w-full"}>
                    <h1 className={" drop-shadow-lg w-max h-max"}>
                <span
                    id="title"
                    className={" lg:text-[28vh] text-[15vh] flex flex-col drop-shadow-lg leading-none bg-gradient-to-br from-[#4E9F3D] text-transparent bg-clip-text to-[#4E9F3D] via-[#D8E9A8]"}>
                    <span>Contact</span>
                </span>
                    </h1>
                </div>

                <div className={"flex 2xl:flex-row flex-col h-full"}>
                    <div className={"flex-1 w-full h-full"}>
                        <div className={"m-20 flex flex-col gap-12"}>
                            <div>
                                <span
                                    className={"text-xl font-medium border-b w-full"}>Aman Varshney (President No. 1)</span>
                                <div className={"mt-5"}>
                                    <span className={"text-lg mx-4"}>Gmail:</span>
                                    <span>av.amanvarshney11@gmail.com</span>
                                </div>
                                <div className={"mt-5"}>
                                    <span className={"text-lg mx-4"}>Phone Number:</span>
                                    <span>9267971037</span>
                                </div>
                            </div>

                            <div>
                                <span
                                    className={"text-xl font-medium border-b w-full"}>Anuj Verma (President No. 2)</span>
                                <div className={"mt-5"}>
                                    <span className={"text-lg mx-4"}>Phone Number:</span>
                                    <span>pta_nhi_kya_hai@gmail.com</span>
                                </div>
                                <div className={"mt-5"}>
                                    <span className={"text-lg mx-4"}>Phone Number:</span>
                                    <span>123456789</span>
                                </div>
                            </div>

                            <div>
                                <span
                                    className={"text-xl font-medium border-b w-full"}>Kartik Arora (President No. 3)</span>
                                <div className={"mt-5"}>
                                    <span className={"text-lg mx-4"}>Gmail:</span>
                                    <span>pta_nhi_kya_hai@gmail.com</span>
                                </div>
                                <div className={"mt-5"}>
                                    <span className={"text-lg mx-4"}>Phone Number:</span>
                                    <span>123456789</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex-1 grid place-items-center"}>
                        <ContactForm/>
                    </div>
                </div>
                <FaqsSection/>
            </section>
        </PageWrapper>)
}