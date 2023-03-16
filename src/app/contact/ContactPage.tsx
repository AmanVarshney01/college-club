import ContactForm from "@/app/contact/Components/contactform";

export default function ContactPage() {
    return (
        <section className={"flex flex-col bg-transparent px-4 py-8 h-screen w-full"}>
            <div className={"h-min w-full"}>
                <h2 className={"text-8xl m-10"}>Contact Us</h2>
            </div>
            <div className={"flex flex-row h-full"}>
                <div className={"flex-1 w-full h-full"}>
                    <div className={"m-20 flex flex-col gap-12"}>
                        <div>
                            <span className={"text-xl font-medium border-b w-full"}>Aman Varshney (President No. 1)</span>
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
                            <span className={"text-xl font-medium border-b w-full"}>Anuj Verma (President No. 2)</span>
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
                            <span className={"text-xl font-medium border-b w-full"}>Kartik Arora (President No. 3)</span>
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
                <div className={"flex-1 h-full grid place-items-center"}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}