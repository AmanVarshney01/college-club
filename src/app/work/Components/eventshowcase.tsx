export default function EventShowcase({title, subTitle, description}: {title: string, subTitle: string, description: string}) {
    return (
        <div className={"w-screen h-screen flex flex-row flex-shrink-0 bg-transparent"}>
            <div className={"flex flex-col place-items-center basis-2/5"}>
                <div className={"h-1/2 flex items-end justify-center"}>
                    <div className={"flex flex-col text-left place-items-center"}>
                        <h2 className={"text-6xl mb-3.5"}>{title}</h2>
                        <h3 className={"text-xl text-gray-200"}>{subTitle}</h3>
                    </div>
                </div>
                <div className={"h-full w-full flex items-center justify-center"}>
                    <div className={""}><p>{description}</p></div>
                </div>
                <div className={"w-full h-max flex justify-center"}>
                    <div className={"flex flex-row text-xl px-6 py-10 border my-20"}>
                        <span className={"mx-3.5"}>Number of Participants:</span>
                        <span className={""}>7000+</span>
                    </div>
                </div>
            </div>
            <div className={"basis-3/5 h-full w-full"}>Photo Collage</div>
        </div>
    )
}