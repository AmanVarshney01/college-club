export default function EventShowcase({title, description}: {title: string, description: string}) {
    return (
        <div className={"headtext w-screen h-screen flex flex-row flex-shrink-0 bg-[#121212]"}>
            <div className={"flex flex-col place-items-center basis-2/5"}>
                <div className={""}><h2 className={"font-mono text-8xl"}>{title}</h2></div>
                <div className={"h-full"}><p>{description}</p></div>
                <div className={"h-full w-full"}></div>
            </div>
            <div className={"basis-3/5 h-full w-full"}>Photo Collage</div>
        </div>
    )
}