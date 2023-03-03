import Carousel from "@/app/about/Components/carousel";
import NameCard from "@/app/about/Components/namecard";
export default function AboutHome() {
    return (
        <div className={"bg-[#141414] px-4 py-8 grid grid-cols-2"}>
            <div className={""}>
                <div className={""}>
                    <Carousel />
                </div>
                <div className={"self-start"}>
                    <p className={""}>GeeksforGeeks Student Chapter at GLA University</p>
                </div>
            </div>
            {/*<div className={"bg-green-300"}></div>*/}
            <div className={"grid grid-cols-2"}>
                <NameCard />
                <NameCard />
                <NameCard />
                <NameCard />
                <NameCard />
                <NameCard />
            </div>
        </div>
    )
}