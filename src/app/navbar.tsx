import Button from "@/app/home/Components/button";
import glaLogo from 'public/gla logo A+.png';
import glaGlauLogo from 'public/gfgglau.png';
import Image from "next/image";

export default function Navbar() {
    return (
        <div className={"fixed top-0 w-full z-20 bg-[#191A19] transition duration-100"}>
            <div className={"flex flex-row justify-between items-center"}>
                <div className={" ml-10 my-1 z-10 flex flex-row gap-5"}>
                    <Image className={"h-20 w-full"} placeholder='blur' src={glaLogo} alt="gla university"/>
                    <Image className={"h-20 w-full"} placeholder='blur' src={glaGlauLogo} alt="gla university"/>
                </div>
                <div className={"mr-10 z-10 "}>
                    <ul className={"flex gap-8 text-white font-mono w-fit"}>
                        <Button href={"#homepage"} name={"Home"}/>
                        <Button href={"#workpage"} name={"Work"}/>
                        <Button href={"#aboutpage"} name={"About"}/>
                        <Button href={"#contactpage"} name={"Contact"}/>
                        {/*<Button href={"/contact"} name={"Event"} />*/}
                    </ul>
                </div>
            </div>
        </div>
    )
}