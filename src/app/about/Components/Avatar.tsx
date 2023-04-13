import thomas from "public/thomas.jpeg";
import Image from "next/image";
export default function Avatar() {
    return (
        <div className={"my-8 mx-16 z-10"}>
            <Image src={thomas} alt={"Thomas"} width={500} height={500} className={"rounded-sm w-[20vw]"}/>
            <div className={"py-2 uppercase leading-none text-center"}>
                <h3 className={"text-2xl"}>Thomas</h3>
                <p className={"text-lg"}>CEO</p>
            </div>
        </div>
    )
}