import Button from "@/app/button";

export default function Navbar() {
    return (
            <nav className={""}>
                <div className={"fixed top-0 left-0 m-10"}>
                    <img className={"w-full h-28"} src="/gla%20logo%20A+.png" alt="gla university"/>
                </div>
                <div className={"fixed bottom-0 left-0 right-0 w-screen mb-10"}>
                    <ul className={"flex justify-center gap-8 text-white text-2xl"}>
                        <Button href={"/"} name={"Home"} />
                        <Button href={"/work"} name={"Our Work"} />
                        <Button href={"/about"} name={"About Us"} />
                        <Button href={"/contact"} name={"Contact Us"} />
                    </ul>
                </div>
            </nav>
    )
}