export default function MainTitle() {

    return (
        <div className={`montserrat flex flex-col z-10 mx-10 mt-24`}>
            <h1 className={"text-[#2f8d46] drop-shadow-lg"}>
                <span
                    id="title"
                    className={`flex flex-col drop-shadow-lg 2xl:text-[16rem] leading-none xl:text-[18rem] sm:text-[8rem] text-[5rem] lg:text-[15rem] md:text-[11rem] bg-gradient-to-br from-[#4E9F3D] text-transparent bg-clip-text to-[#1E5128] via-[#D8E9A8]`}>
                    <span >GFG</span>
                    <span>GLAU</span>
                </span>
            </h1>
            <span className={"lg:text-2xl text-[1rem] ml-10 text-white text-start"}>GeeksForGeeks Student Chapter GLA University</span>
        </div>
    )
}