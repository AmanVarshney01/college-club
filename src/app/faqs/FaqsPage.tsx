import {useEffect} from "react";

export default function FaqsPage () {

    useEffect(() => {

        const q1 = document.querySelector("#question-1") as HTMLElement
        const q2 = document.querySelector("#question-2") as HTMLElement
        const q3 = document.querySelector("#question-3") as HTMLElement
        const q4 = document.querySelector("#question-4") as HTMLElement

        const a1 = document.querySelector("#answer-1") as HTMLElement
        const a2 = document.querySelector("#answer-2") as HTMLElement
        const a3 = document.querySelector("#answer-3") as HTMLElement
        const a4 = document.querySelector("#answer-4") as HTMLElement

        q1.addEventListener("click", () => {
            a1.classList.toggle("answer")
        })


        q2.addEventListener("click", () => {
            a2.classList.toggle("answer")
        })

        q3.addEventListener("click", () => {
            a3.classList.toggle("answer")
        })

        q4.addEventListener("click", () => {
            a4.classList.toggle("answer")
        })
    })

    return (
        <section className={"w-full h-screen bg-transparent flex items-center"}>
            <div className={"w-full grid grid-flow-row items-center gap-16"}>
                <div className={""}>
                    <div id={"question-1"} className={"cursor-pointer shadow-black bg-[#181818] py-8 px-10 shadow hover:text-[#D8E9A8] transition duration-400"}>
                        <h3 className={"text-5xl"}>How to join club?</h3>
                    </div>
                    <div id='answer-1' className={"answer bg-[#D3D3D3] text-black p-8 shadow text-semibold"}>
                        <p className={"text-xl"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aut consequuntur dolores ea eius enim esse illo in ipsa ipsam modi, nisi reiciendis, similique temporibus velit voluptatibus! Consequatur, consequuntur?</p>
                    </div>
                </div>
                <div className={""}>
                    <div id={"question-2"} className={"cursor-pointer shadow-black bg-[#181818] py-8 px-10 shadow hover:text-[#D8E9A8] transition duration-400"}>
                        <h3 className={"text-5xl"}>How to join club?</h3>
                    </div>
                    <div id='answer-2' className={"answer bg-[#D3D3D3] text-black p-8 shadow text-semibold"}>
                        <p className={"text-xl"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aut consequuntur dolores ea eius enim esse illo in ipsa ipsam modi, nisi reiciendis, similique temporibus velit voluptatibus! Consequatur, consequuntur?</p>
                    </div>
                </div>
                <div className={""}>
                    <div id={"question-3"} className={"cursor-pointer shadow-black bg-[#181818] py-8 px-10 shadow hover:text-[#D8E9A8] transition duration-400"}>
                        <h3 className={"text-5xl"}>How to join club?</h3>
                    </div>
                    <div id='answer-3' className={"answer bg-[#D3D3D3] text-black p-8 shadow text-semibold"}>
                        <p className={"text-xl"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aut consequuntur dolores ea eius enim esse illo in ipsa ipsam modi, nisi reiciendis, similique temporibus velit voluptatibus! Consequatur, consequuntur?</p>
                    </div>
                </div>
                <div className={""}>
                    <div id={"question-4"} className={"cursor-pointer shadow-black bg-[#181818] py-8 px-10 shadow hover:text-[#D8E9A8] transition duration-400"}>
                        <h3 className={"text-5xl"}>How to join club?</h3>
                    </div>
                    <div id='answer-4' className={"answer bg-[#D3D3D3] text-black p-8 shadow text-semibold"}>
                        <p className={"text-xl"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aut consequuntur dolores ea eius enim esse illo in ipsa ipsam modi, nisi reiciendis, similique temporibus velit voluptatibus! Consequatur, consequuntur?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}