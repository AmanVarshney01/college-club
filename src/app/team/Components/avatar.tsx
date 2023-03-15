import Image from "next/image";
export default function Avatar ({name, post, photo}: {name: string, post: string, photo: any}) {
    return (
        <div className={"w-64 h-96 flex-shrink-0 bg-white relative group"}>
            <Image className={"bg-cover"} src={photo} alt={name} />
            <div className={"opacity-0 hover:opacity-100 transition duration-700"}>
                <div className={"absolute bottom-0 w-full h-full opacity-70 blur-sm bg-black"}></div>
                <div className={"absolute bottom-0 w-full h-full grid place-content-center"}>
                    <div className={"flex flex-col place-items-center w-full "}>
                        <span className={"text-2xl"}>{name}</span>
                        <span>{post}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}