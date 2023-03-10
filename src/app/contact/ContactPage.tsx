export default function ContactPage() {
    return (
        <section className={"flex flex-row bg-transparent px-4 py-8 h-screen w-full"}>

            <div className={"flex-1 flex justify-center items-center"}>
                <div className={"flex flex-col h-full w-full"}>
                    <div>
                        <h3></h3>
                    </div>
                </div>
            </div>

            <div className={"flex-1 h-full flex justify-center items-center"}>
                <form className=" h-fit flex flex-col rounded-lg gap-16 px-10 py-5">
                    <div className={" flex flex-col gap-5"}>
                        <h2 className={"text-4xl"}>Contact Us</h2>
                        {/*<p className={"text-lg"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorum, expedita ipsum laborum nemo nisi quisquam saepe! Dolor eveniet labore</p>*/}
                    </div>
                    <div className={"flex flex-col gap-12 place-items-start w-full h-max"}>
                        <div className={"flex flex-row w-full gap-12"}>
                            <div className={"w-1/2"}>
                                <label className={"block text-md"} htmlFor="fname">First Name</label>
                                <input className={"border-b border-l-0 border-r-0 border-t-0 bg-[#121212] w-full border-gray-500 p-2 rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} type="text" name="fname"/>
                            </div>
                            <div className={"w-1/2"}>
                                <label className={"block text-md"} htmlFor="lname">Last Name</label>
                                <input className={"border-b border-l-0 border-r-0 border-t-0 w-full bg-[#121212] border-gray-500 p-2 rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} type="text" name={"lname"}/>
                            </div>
                        </div>
                        <div className={"flex flex-row justify-around w-full gap-12"}>
                            <div className={"w-1/2"}>
                                <label className={"block text-md"} htmlFor="phone">Phone Number</label>
                                <input className={" w-full border-b border-l-0 border-r-0 border-t-0 bg-[#121212] border-gray-500 p-2 rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} type="tel" name="phone" id="phone"/>
                            </div>
                            <div className={"w-1/2"}>
                                <label className={"block text-md"} htmlFor="email">Email</label>
                                <input className={"w-full border-b border-l-0 border-r-0 border-t-0 bg-[#121212] border-gray-500 p-2 rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} type="email" name="email"/>
                            </div>
                        </div>
                        <div className={"w-full"}>
                            <label className={"block text-md"} htmlFor="subject">Message</label>
                            <textarea className={"w-full border-b border-l-0 border-r-0 border-t-0 bg-[#121212] border-gray-500 p-2 rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} name="subject"/>
                        </div>
                        <button type="submit" className={" rounded-lg py-3 w-full border-2 border-white text-white text-xl hover:border-[#D8E9A8] focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"}>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}