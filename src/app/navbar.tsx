import Button from "@/app/Components/button";
import Image from "next/image";
import glaLogo from 'public/gla logo A+.png';
import glaGlauLogo from 'public/gfgglau.png';
import Alert from "@/app/Components/alert";

export default function Navbar() {
    return (
            <nav className={""}>
                <Alert  text={"Register Now! Entrevista: Mock placement Drive"}/>
                <div className={"fixed top-0 left-0 m-8 z-10 flex flex-row gap-5"}>
                    <Image className={"h-24 w-full"} placeholder='blur' src={glaLogo} alt="gla university"/>
                    <Image className={"h-24 w-full"} placeholder='blur' src={glaGlauLogo} alt="gla university"/>
                </div>
                <div className={"fixed bottom-0 left-0 right-0 w-screen mb-10 z-10"}>
                    <ul className={"flex justify-center gap-8 text-white text-2xl font-mono"}>
                        <Button href={"/"} name={"Home"} />
                        <Button href={"/work"} name={"Work"} />
                        <Button href={"/about"} name={"About"} />
                        <Button href={"/contact"} name={"Contact"} />
                        {/*<Button href={"/contact"} name={"Event"} />*/}
                    </ul>
                </div>
            </nav>
    )
}