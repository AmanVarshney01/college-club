export default function EventLabel({name, href, color}: { name: string, href: string, color: string }) {
    return (<a href={href} target="_blank" className={"relative group cursor-pointer"}>
            <div
                className={"absolute -inset-0.5 bg-gradient-to-r from-[#404E4D] to-[#43AA8B] rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"}></div>
            <div className={`relative w-full rounded-2xl grid place-content-center font-mono ${color}`}>
                <h3
                   className={"text-white text-lg group-hover:text-gray-100 transition duration-200 mx-4 my-1"}>{name}</h3>
            </div>
        </a>
    )
}