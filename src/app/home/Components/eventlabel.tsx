export default function EventLabel({name, href}: { name: string, href: string }) {
    return (
        <div className={"relative group"}>
            <div className={"absolute -inset-0.5 bg-gradient-to-r from-[#404E4D] to-[#43AA8B] rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"}>

            </div>
            <div className={"relative w-full h-16 rounded-2xl grid place-content-center font-mono bg-[#131200]"}>
                <a href={href} className={"text-white text-2xl group-hover:text-gray-100 transition duration-200"}>{name}</a>
            </div>
        </div>

    )
}