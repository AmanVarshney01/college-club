export default function SocialButton({name, href, color}: { name: string, href: string, color: string }) {
    return (
        <a href={href} id="linkCursor"  target="_blank" className={"relative group"}>
            <div
                className={"absolute -inset-0.5 bg-gradient-to-b from-[#404E4D] to-[#D8E9A8] rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"}></div>
            <div className={`relative w-full rounded-2xl grid place-content-center font-mono ${color}`}>
                <h3
                   className={"text-white 2xl:text-lg text-sm group-hover:text-gray-100 transition duration-200 mx-4 my-1"}>{name}</h3>
            </div>
        </a>
    )
}