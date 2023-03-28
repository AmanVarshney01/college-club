import Link from "next/link";
import {motion as m} from "framer-motion";
import {usePathname} from "next/navigation";

type ButtonProps = {
    name: string, scrollTo: any, href: string
}

export default function NavButton(props: ButtonProps) {

    const {name, scrollTo, href} = props;

    const path = usePathname()

    return (
            <Link href={href} id="linkCursor" onClick={scrollTo} className={"relative transition ease-in duration-200 lg:text-xl text-sm hover:text-[#D8E9A8]"}>
                {href === path && (<m.span layoutId="underline" className={"absolute left-0 top-full block h-[1px] bg-white w-full"} />)}
                {name}
            </Link>
)
}