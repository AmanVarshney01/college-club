export default function MainTitle() {
    return (
        <div className={`montserrat flex flex-col z-10 mx-10 mt-24 relative`}>
            <h1 className={"text-[#2f8d46] drop-shadow-lg"}>
                <span
                    id="title"
                    className={`text-[15rem] flex flex-col drop-shadow-lg leading-none bg-gradient-to-br from-[#4E9F3D] text-transparent bg-clip-text to-[#4E9F3D] via-[#D8E9A8]`}>
                    <span >GFG</span>
                    <span>GLAU</span>
                </span>
                <div className={"w-[28rem] h-[28rem] absolute -bottom-52 -left-56 pointer-events-none bg-[#DC493A] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>
            </h1>
            <span className={"2xl:text-2xl text-[1rem] ml-10 dark:text-white text-black text-start"}>GeeksForGeeks Student Chapter GLA University</span>
        </div>
    )
}