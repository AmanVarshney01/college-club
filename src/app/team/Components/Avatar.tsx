import Image from "next/image";
import instagram from 'public/socialIcons/instagram.png'
import whatsapp from 'public/socialIcons/whatsapp.png'
import linkedin from 'public/socialIcons/linkedin.png'
export default function Avatar ({name, post, photo}: {name: string, post: string, photo: any}) {
    return (
        <div className={"2xl:w-64 w-32 flex-shrink-0 bg-white relative group"}>
            <Image loading="lazy" className={"bg-cover"} src={photo} alt={name} />
            <div className={"h-36 w-64 bg-[#181818]"}>
                <div className={""}>
                    {/*<div className={"absolute bottom-0 w-full opacity-70 blur-sm bg-black"}></div>*/}
                    <div className={"w-full flex flex-col justify-center items-center p-3 h-max"}>
                        <div className={"flex flex-col justify-evenly items-center w-full gap-2"}>
                            <span className={"text-xl font-semibold"}>{name}</span>
                            <span>{post}</span>
                            <div className={"flex flex-row justify-evenly w-full px-6 border-t pt-4"}>
                                <a id="linkCursor"  href="#"  className={"bg-white rounded-full border border-white hover:border-[#D8E9A8] hover:bg-[#D8E9A8]"}><Image loading="lazy" width={25} height={25} src={instagram} alt={"instagram"} /></a>
                                <a id="linkCursor"  href="#" className={"bg-white rounded-full border border-white hover:border-[#D8E9A8] hover:bg-[#D8E9A8]"}><Image loading="lazy" width={25} height={25} src={linkedin} alt={"linkedin"} /></a>
                                <a id="linkCursor"  href="#" className={"bg-white rounded-full border border-white hover:border-[#D8E9A8] hover:bg-[#D8E9A8]"}><Image loading="lazy" width={25} height={25} src={whatsapp} alt={"whatsapp"} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}