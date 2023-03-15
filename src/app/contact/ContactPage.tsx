import ContactForm from "@/app/contact/Components/contactform";

export default function ContactPage() {
    return (
        <section className={"flex flex-col bg-transparent px-4 py-8 h-screen w-full"}>
            <div className={"h-min w-full"}>
                <h2 className={"text-8xl m-10"}>Contact Us</h2>
            </div>
            <div className={"flex flex-row h-full"}>
                <div className={"flex-1 flex justify-center items-start"}>
                    <div className={"flex flex-col h-1/2 w-full"}>
                        <div>
                            <span>Gmail</span>
                        </div>
                    </div>
                </div>
                <div className={"flex-1 h-full flex justify-center items-start"}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}