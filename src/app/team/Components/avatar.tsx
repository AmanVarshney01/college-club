import Image from "next/image";
export default function Avatar ({name, post, photo}: {name: string, post: string, photo: any}) {
    return (
        <div className={"w-64 flex-shrink-0 bg-white relative group"}>
            <Image className={"bg-cover"} src={photo} alt={name} />
            <div className={"w-64 h-32 bg-[#181818]"}>
                <div className={""}>
                    {/*<div className={"absolute bottom-0 w-full opacity-70 blur-sm bg-black"}></div>*/}
                    <div className={"w-full flex flex-col justify-center items-center p-3"}>
                        <div className={"flex flex-col place-items-center w-full"}>
                            <span className={"text-2xl"}>{name}</span>
                            <span>{post}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}