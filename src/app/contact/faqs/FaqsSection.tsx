"use client";
import {useEffect} from "react";

export default function FaqsSection() {

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
        <section id="faqspage" className={"w-full min-h-screen px-4 py-8 bg-transparent flex flex-col"}>
            <div className={"w-full flex-1"}>
                <div className={" my-12 flex flex-col gap-5 justify-end"}>
                    <div id="linkCursor"  className={""}>
                        <div id={"question-1"}
                             className={"rounded-md shadow-black bg-[#181818] py-8 px-10 shadow hover:text-[#D8E9A8] transition duration-400"}>
                            <h3 className={"text-sm 2xl:text-2xl"}>question</h3>
                        </div>
                        <div id='answer-1'
                             className={"rounded-md answer bg-[#D3D3D3] text-black p-8 shadow text-semibold"}>
                            <p className={"text-xl"}>answer</p>
                        </div>
                    </div>
                    <div id="linkCursor" className={""}>
                        <div id={"question-2"}
                             className={"rounded-md shadow-black bg-[#181818] py-8 px-10 shadow hover:text-[#D8E9A8] transition duration-400"}>
                            <h3 className={"2xl:text-2xl text-sm"}>Question</h3>
                        </div>
                        <div id='answer-2'
                             className={"rounded-md answer bg-[#D3D3D3] text-black p-8 shadow text-semibold"}>
                            <p className={"text-xl"}>answer</p>
                        </div>
                    </div>
                    <div id="linkCursor" className={""}>
                        <div id={"question-3"}
                             className={"rounded-md shadow-black bg-[#181818] py-8 px-10 shadow hover:text-[#D8E9A8] transition duration-400"}>
                            <h3 className={"2xl:text-2xl text-sm"}>Question</h3>
                        </div>
                        <div id='answer-3'
                             className={"rounded-md answer bg-[#D3D3D3] text-black p-8 shadow text-semibold"}>
                            <p className={"text-xl"}>answer</p>
                        </div>
                    </div>
                    <div id="linkCursor" className={""}>
                        <div id={"question-4"}
                             className={"rounded-md shadow-black bg-[#181818] py-8 px-10 shadow hover:text-[#D8E9A8] transition duration-400"}>
                            <h3 className={"2xl:text-2xl text-sm"}>Qquestion</h3>
                        </div>
                        <div id='answer-4'
                             className={"rounded-md answer bg-[#D3D3D3] text-black p-8 shadow text-semibold"}>
                            <p className={"text-xl"}>answer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}