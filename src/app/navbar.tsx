import Button from "@/app/button";

export default function Navbar() {
    return (
            <nav className={"fixed top-0 left-0 right-0 w-screen px-10 py-5"}>
                <ul className={"flex justify-end m-5 gap-8 text-white text-2xl"}>
                    <Button href={""} name={"Our Work"} />
                    <Button href={""} name={"About Us"} />
                    <Button href={""} name={"Contact Us"} />
                </ul>
            </nav>
    )
}