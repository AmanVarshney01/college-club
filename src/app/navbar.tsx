import Button from "@/app/Components/button";
import glaLogo from 'public/gla logo A+.png';
import glaGlauLogo from 'public/gfgglau.png';
import Image from "next/image";

export default function Navbar() {
    return (
            <nav className={"fixed top-0 right-0 w-full top-0 z-20 "}>
                <div className={"flex flex-row justify-between items-center"}>
                    <div className={" ml-10 my-2 z-10 flex flex-row gap-5"}>
                        <Image className={"h-20 w-full"} placeholder='blur' src={glaLogo} alt="gla university"/>
                        <Image className={"h-20 w-full"} placeholder='blur' src={glaGlauLogo} alt="gla university"/>
                    </div>
                    <div className={"mr-10 z-10 "}>
                        <ul className={"flex gap-8 text-white font-mono w-fit"}>
                            <Button href={"/"} name={"Home"} />
                            <Button href={"/work"} name={"Work"} />
                            <Button href={"/about"} name={"About"} />
                            <Button href={"/contact"} name={"Contact"} />
                            {/*<Button href={"/contact"} name={"Event"} />*/}
                        </ul>
                    </div>
                </div>

            </nav>
    )
}