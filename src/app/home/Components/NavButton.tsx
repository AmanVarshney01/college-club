type ButtonProps = {
    name: string,
    scrollTo: any
}

export default function NavButton(props: ButtonProps) {

    const {name, scrollTo} = props;

    return (
        // <button onClick={scrollTo} className="scroll-smooth relative inline-flex items-center justify-start inline-block 2xl:px-5 2xl:py-3 px-1 py-1 overflow-hidden font-thin rounded-full group">
        //     <span
        //         className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        //     <span
        //         className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
        //     <span
        //         className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 2xl:text-[1rem]">{name}</span>
        //     <span className="absolute inset-0 border-2 border-white rounded-full"></span>
        // </button>
        <button onClick={scrollTo} className={"transition ease-in duration-200 2xl:text-2xl text-md hover:text-[#D8E9A8]"}><span className={""}>{name}</span></button>
    )
}