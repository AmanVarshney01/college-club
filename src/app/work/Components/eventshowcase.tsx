export default function EventShowcase({title, subTitle, description}: {title: string, subTitle: string, description: string}) {
    return (
        <div className={"w-screen h-screen flex flex-row flex-shrink-0 bg-transparent"}>
            <div className={"flex flex-col place-items-center basis-2/5"}>
                <div className={"h-1/2 grid place-content-center gap-6"}>
                    <div className={"flex flex-col gap-6 text-left place-items-center"}>
                        <h2 className={"text-6xl"}>{title}</h2>
                        <h3 className={"text-xl text-gray-200"}>{subTitle}</h3>
                    </div>
                </div>
                <div className={"h-min"}><p>{description}</p></div>
                <div className={"h-full w-full"}></div>
            </div>
            <div className={"basis-3/5 h-full w-full"}>Photo Collage</div>
        </div>
    )
}