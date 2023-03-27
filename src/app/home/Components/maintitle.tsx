export default function MainTitle() {
    return (
        <div className={`flex flex-col z-10  relative`}>
            <h1 className={" drop-shadow-lg w-max h-max"}>
                <span
                    id="title"
                    className={`text-[28vh] flex flex-col drop-shadow-lg leading-none bg-gradient-to-br from-[#4E9F3D] text-transparent bg-clip-text to-[#4E9F3D] via-[#D8E9A8]`}>
                    <span>GFG</span>
                    <span>GLAU</span>
                </span>
                {/*<div className={"w-[22rem] h-[22rem] absolute -bottom-52 -left-56 pointer-events-none bg-[#bedba8] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>*/}
            </h1>
            <span className={"2xl:text-2xl text-[1rem] ml-10 text-start"}>GeeksForGeeks Student Chapter GLA University</span>
        </div>
    )
}