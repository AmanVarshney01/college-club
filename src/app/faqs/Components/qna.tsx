export default function QnA({question}: {question: string}) {
    return (
        <div className={""}>
            <div className={"cursor-pointer shadow-black bg-[#181818] h-min py-8 px-5 shadow hover:text-[#D8E9A8] transition duration-400"}>
                <h3 className={"text-5xl"}>{question}</h3>
            </div>
            <div className={"bg-[#D3D3D3] text-black p-2 shadow text-semibold"}>
                <p className={"text-xl"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta, ducimus fuga id iure minus perspiciatis quaerat recusandae sed sint. Alias, culpa eius eum ipsa possimus quidem sed. Perferendis, qui.</p>
            </div>
        </div>
    )
}