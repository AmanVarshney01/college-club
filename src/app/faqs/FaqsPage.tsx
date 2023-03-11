import QnA from "@/app/faqs/Components/qna";

export default function FaqsPage () {
    return (
        <section className={"w-full h-screen bg-transparent flex items-center"}>
            {/*bg-[#D3D3D3]*/}
            <div className={"w-full grid grid-flow-row items-center gap-6"}>
               <QnA question={"How to join our club"}/>
               <QnA question={"How to join our club"}/>
               <QnA question={"How to join our club"}/>
               <QnA question={"How to join our club"}/>
            </div>
        </section>
    )
}