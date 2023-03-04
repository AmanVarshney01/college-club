export default function WorkHome() {
    return (
        <div className={"bg-[#141414] bg-black place-items-center h-screen w-full"}>
            <div className={"w-full h-[92%] flex flex-row"}>
                <div className={" flex flex-col place-items-center basis-2/5"}>
                    <div className={"bg-yellow-900"}><h2 className={"font-mono text-8xl"}>Event Name</h2></div>
                    <div className={""}><p>event decription Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, animi eaque est illum neque optio quibusdam quo veniam! Aliquid atque blanditiis iure molestias quibusdam! Error illum mollitia optio quidem veniam?</p></div>
                    <div className={""}>
                        <ul className="steps steps-vertical lg:steps-horizontal grid gap-3">
                            <li className="step step-primary">Disha</li>
                            <li className="step step-primary w-64">Brain It Out</li>
                            <li className="step step-primary">Fun Activities</li>
                            <li className="step">Entrevista</li>
                        </ul>
                    </div>
                </div>
                <div className={"basis-3/5"}></div>
            </div>
        </div>
    )
}