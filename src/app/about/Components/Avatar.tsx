import thomas from "public/thomas.jpeg";
import Image from "next/image";
export default function Avatar() {
    return (
        <div className={""}>
            <Image src={thomas} alt={"Thomas"} width={300} height={300} className={"rounded-sm"}/>
        </div>
    )
}