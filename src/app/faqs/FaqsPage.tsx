import {useEffect} from "react";

export default function FaqsPage() {

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
            // a2.classList.remove("answer")
            // a3.classList.remove("answer")
            // a4.classList.remove("answer")
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
            <div className={"2xl:text-8xl text-4xl w-full flex-2 2xl:m-10 m-2"}><h2>FAQs</h2></div>
            <div className={"w-full flex-1"}>
                <div className={" my-12 flex flex-col gap-5 justify-end"}>
                    <div id="linkCursor"  className={""}>
                        <div id={"question-1"}
                             className={"rounded-md shadow-black bg-[#181818] py-8 px-10 shadow hover:text-[#D8E9A8] transition duration-400"}>
                            <h3 className={"text-sm 2xl:text-2xl"}>What is GeeksforGeeks Student Chapter?</h3>
                        </div>
                        <div id='answer-1'
                             className={"rounded-md answer bg-[#D3D3D3] text-black p-8 shadow text-semibold"}>
                            <p className={"text-xl"}>GeeksforGeeks Student Chapter is a community of like-minded individuals who are passionate about computer science and programming. Our aim is to provide a platform for students to enhance their technical skills, gain practical experience, and network with peers in the industry.</p>
                        </div>
                    </div>
                    <div id="linkCursor" className={""}>
                        <div id={"question-2"}
                             className={"rounded-md shadow-black bg-[#181818] py-8 px-10 shadow hover:text-[#D8E9A8] transition duration-400"}>
                            <h3 className={"2xl:text-2xl text-sm"}>Who can join GeeksforGeeks Student Chapter?</h3>
                        </div>
                        <div id='answer-2'
                             className={"rounded-md answer bg-[#D3D3D3] text-black p-8 shadow text-semibold"}>
                            <p className={"text-xl"}>Any student who is interested in computer science and programming can join our club. We welcome students from all majors and backgrounds, as long as they share our passion for technology.</p>
                        </div>
                    </div>
                    <div id="linkCursor" className={""}>
                        <div id={"question-3"}
                             className={"rounded-md shadow-black bg-[#181818] py-8 px-10 shadow hover:text-[#D8E9A8] transition duration-400"}>
                            <h3 className={"2xl:text-2xl text-sm"}>How can I become a member of GeeksforGeeks Student Chapter?</h3>
                        </div>
                        <div id='answer-3'
                             className={"rounded-md answer bg-[#D3D3D3] text-black p-8 shadow text-semibold"}>
                            <p className={"text-xl"}>To become a member, you need to attend our club meetings and participate in our events. You can also sign up for our mailing list to stay up-to-date with our latest activities.</p>
                        </div>
                    </div>
                    <div id="linkCursor" className={""}>
                        <div id={"question-4"}
                             className={"rounded-md shadow-black bg-[#181818] py-8 px-10 shadow hover:text-[#D8E9A8] transition duration-400"}>
                            <h3 className={"2xl:text-2xl text-sm"}>What kind of events does GeeksforGeeks Student Chapter organize?</h3>
                        </div>
                        <div id='answer-4'
                             className={"rounded-md answer bg-[#D3D3D3] text-black p-8 shadow text-semibold"}>
                            <p className={"text-xl"}>We organize a variety of events, including workshops, coding competitions, guest lectures, and networking sessions. Our events are designed to provide students with hands-on experience and exposure to industry professionals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}