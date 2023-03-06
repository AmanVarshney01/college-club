import photo from 'public/photo.png'
import Image from "next/image";
import portrait from "../../../../public/portrait.jpg";
export default function Avatar () {
    return (
        <div className={"w-64 h-96 flex-shrink-0 bg-white relative group"}>
            <div className={"opacity-0 hover:opacity-100 transition duration-700"}>
                <div className={"absolute bottom-0 w-full h-full opacity-50  bg-black"}></div>
                <div className={"absolute bottom-0 w-full h-full grid place-content-center"}>
                    <div className={"flex flex-col place-items-center w-full "}>
                        <span className={"text-2xl"}>Aman Varshney</span>
                        <span>President</span>
                    </div>
                </div>
            </div>
            <Image className={"bg-cover"} src={portrait} alt={"photo"} />
        </div>
    )
}