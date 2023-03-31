import thomas from "public/thomas.jpeg";
import Image from "next/image";
export default function Avatar() {
    return (
        <div className={"py-8 z-10"}>
            <Image src={thomas} alt={"Thomas"} width={300} height={300} className={"rounded-sm"}/>
            <div className={"py-6"}>
                <h3 className={"text-xl font-bold text-start"}>Thomas</h3>
                <p className={"text-start"}>CEO</p>
            </div>
        </div>
    )
}