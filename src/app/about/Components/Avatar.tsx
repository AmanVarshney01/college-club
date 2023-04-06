import thomas from "public/thomas.jpeg";
import Image from "next/image";
export default function Avatar() {
    return (
        <div className={"py-8 z-10"}>
            <Image src={thomas} alt={"Thomas"} width={380} height={380} className={"rounded-sm"}/>
            <div className={"py-2 uppercase leading-none text-center"}>
                <h3 className={"text-2xl font-semibold"}>Thomas</h3>
                <p className={"text-lg"}>CEO</p>
            </div>
        </div>
    )
}