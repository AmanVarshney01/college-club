import ContactForm from "@/app/contact/Components/contactform";

export default function ContactPage() {
    return (
        <section className={"flex flex-row bg-transparent px-4 py-8 h-screen w-full"}>

            <div className={"flex-1 flex justify-center items-center"}>
                <div className={"flex flex-col h-full w-full"}>
                    <div>
                        <h3></h3>
                    </div>
                </div>
            </div>

            <div className={"flex-1 h-full flex justify-center items-center"}>
                <ContactForm />
            </div>
        </section>
    )
}