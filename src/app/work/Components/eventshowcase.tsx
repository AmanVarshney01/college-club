export default function EventShowcase() {
    return (
        <div className={"w-screen h-[92%] flex flex-row flex-shrink-0"}>
            <div className={" flex flex-col place-items-center basis-2/5"}>
                <div className={"bg-yellow-900"}><h2 className={"font-mono text-8xl"}>Event Name</h2></div>
                <div className={"h-full"}><p>event decription Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, animi eaque est illum neque optio quibusdam quo veniam! Aliquid atque blanditiis iure molestias quibusdam! Error illum mollitia optio quidem veniam?</p></div>
                <div className={"bg-blue-900 h-full w-full "}></div>
            </div>
            <div className={"basis-3/5"}></div>
        </div>
    )
}