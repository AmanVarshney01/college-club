export default function QnA({question}: {question: string}) {
    return (
        <div className={"shadow-black bg-[#181818] h-min py-8 px-5 shadow hover:text-[#D8E9A8] transition duration-400"}>
            <h3 className={"text-7xl"}>{question}</h3>
        </div>
    )
}