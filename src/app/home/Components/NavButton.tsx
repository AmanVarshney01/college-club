import Link from "next/link";

type ButtonProps = {
    name: string, scrollTo: any, href: string
}

export default function NavButton(props: ButtonProps) {

    const {name, scrollTo, href} = props;

    return (
            <Link href={href} id="linkCursor" onClick={scrollTo}
                    className={" transition ease-in duration-200 2xl:text-2xl text-md hover:text-[#D8E9A8]"}><span
                className={""}>{name}</span></Link>
)
}