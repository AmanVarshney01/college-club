export default function EventShowcase({title, description}: {title: string, description: string}) {
    return (
        <div className={"w-screen h-screen flex flex-row flex-shrink-0 bg-[#141414]"}>
            <div className={" flex flex-col place-items-center basis-2/5"}>
                <div className={""}><h2 className={"font-mono text-8xl"}>{title}</h2></div>
                <div className={"h-full"}><p>{description}</p></div>
                <div className={"bg-blue-900 h-full w-full "}></div>
            </div>
            <div className={"basis-3/5 h-full w-full"}>Photo Collage</div>
        </div>
    )
}