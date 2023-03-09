export default function ContactPage() {
    return (
        <section className={"grid grid-cols-2 place-items-center bg-transparent px-4 py-8 h-screen w-full"}>
            <div className={""}></div>
            <div className={"w-full h-full grid place-content-center"}>
                <form className=" h-fit flex flex-col rounded-lg gap-16 px-10 py-5">
                    <div className={" flex flex-col gap-5"}>
                        <h2 className={"text-4xl"}>Contact Us</h2>
                        {/*<p className={"text-lg"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorum, expedita ipsum laborum nemo nisi quisquam saepe! Dolor eveniet labore</p>*/}
                    </div>
                    <div className={"flex flex-col gap-12 place-items-start w-full h-max"}>
                        <div className={"flex flex-row w-full gap-12"}>
                            <div className={"w-1/2"}>
                                <label className={"block text-md mb-2"} htmlFor="fname">First Name</label>
                                <input className={"border-2 w-full border-gray-500 p-2 text-black rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} type="text" name="fname" placeholder={"Enter First Name"}/>
                            </div>
                            <div className={"w-1/2"}>
                                <label className={"block text-md mb-2"} htmlFor="lname">Last Name</label>
                                <input className={"border-2 w-full border-gray-500 p-2 text-black rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} type="text" name={"lname"} placeholder={"Enter Last Name"}/>
                            </div>
                        </div>
                        <div className={"flex flex-row justify-around w-full gap-12"}>
                            <div className={"w-1/2"}>
                                <label className={"block text-md mb-2"} htmlFor="phone">Phone Number</label>
                                <input className={" w-full border-2 border-gray-500 text-black p-2 rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} type="tel" name="phone" id="phone" placeholder={"Enter Your Phone Number"}/>
                            </div>
                            <div className={"w-1/2"}>
                                <label className={"block text-md mb-2"} htmlFor="email">Email</label>
                                <input className={"w-full border-2 border-gray-500 p-2 text-black rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} type="email" name="email" placeholder={"Enter Your Email Address"}/>
                            </div>
                        </div>
                        <div className={"w-full"}>
                            <label className={"block text-md mb-2"} htmlFor="subject">Subject</label>
                            <textarea className={"w-full border-2 border-gray-500 p-2 text-black rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} name="subject" placeholder={"Write your subject here"}/>
                        </div>
                        <button type="submit" className={"rounded-lg py-3 w-full border-2 border-white text-white text-xl hover:border-[#D8E9A8] focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"}>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}