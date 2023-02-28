import Button from "@/app/Components/button";
import glaLogo from 'public/gla logo A+.png';
import glaGlauLogo from 'public/gfgglau.png';
import Alert from "@/app/Components/alert";

export default function Navbar() {
    return (
            <nav className={""}>
                <Alert  text={"Register Now! Entrevista: Mock placement Drive"}/>
                <div className={"fixed top-0 right-0 m-10 z-10"}>
                    <ul className={"flex place-content-end gap-8 text-white text-2xl font-mono"}>
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