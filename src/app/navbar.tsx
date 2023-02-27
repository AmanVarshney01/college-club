import Button from "@/app/button";
import Image from "next/image";
import glaLogo from 'public/gla logo A+.png';

export default function Navbar() {
    return (
            <nav className={""}>
                <div className={"fixed top-0 left-0 m-10"}>
                    <Image className={"h-28 w-full"} placeholder='blur' src={glaLogo} alt="gla university"/>
                </div>
                <div className={"fixed bottom-0 left-0 right-0 w-screen mb-10"}>
                    <ul className={"flex justify-center gap-8 text-white text-2xl font-mono"}>
                        <Button href={"/"} name={"Home"} />
                        <Button href={"/work"} name={"Our Work"} />
                        <Button href={"/about"} name={"About Us"} />
                        <Button href={"/contact"} name={"Contact Us"} />
                    </ul>
                </div>
            </nav>
    )
}