import Image from "next/image";

export default function EventShowcase({title, subTitle, description, imgSrc}: {title: string, subTitle: string, description: string, imgSrc: any,}) {
    return (
        <div className={"w-screen min-h-screen flex 2xl:flex-row flex-col bg-transparent justify-center items-center"}>
            <div className={"flex flex-col place-items-center basis-2/5"}>
                <div className={" flex-1 flex items-center justify-center"}>
                    <div className={"flex flex-col text-left place-items-center"}>
                        <h2 className={"text-6xl mb-3.5"}>{title}</h2>
                        <h3 className={"text-xl text-gray-200"}>{subTitle}</h3>
                    </div>
                </div>
                <div className={"h-min w-full flex-1 flex items-center justify-center"}>
                    <div className={""}><p>{description}</p></div>
                </div>
                <div className={"flex-1 flex justify-center"}>
                    <div className={"flex flex-row text-xl px-[2vw] py-[2vh] border rounded-lg h-fit"}>
                        <span className={"mx-3.5"}>Number of Participants:</span>
                        <span className={""}>7000+</span>
                    </div>
                </div>
            </div>
            <div className={"basis-3/5 flex flex-row items-center justify-center"}>
                <Image loading="lazy" className={"w-[80%] h-auto"} src={imgSrc} alt={title} />
            </div>
        </div>
    )
}