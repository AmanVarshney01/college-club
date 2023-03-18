"use client";
import {FormEvent, useState} from "react";

export default function ContactForm () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {

            alert("Please Wait ⏳")

            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name, email, number, message
                }),
                headers: {
                    'content-type': 'application/json'
                }
            })

            setName('')
            setEmail('')
            setNumber('')
            setMessage('')

            alert("Thanks for Contacting Us ⌛")

        } catch (err: any) {
            console.log('Err', err)
        }

    }

    return (
        <form onSubmit={onSubmit} method="post" className="w-3/4 flex flex-col rounded-lg gap-16 ">
            <div className={"flex flex-col gap-12 place-items-start w-full h-max"}>
                <div className={"w-full"}>
                    <label className={"block text-md"} htmlFor="name">Name</label>
                    <input id="linkCursor" required maxLength={100} onChange={(e) => setName(e.target.value)} value={name} className={"border-b border-l-0 border-r-0 border-t-0 bg-[#121212] w-full border-gray-500 p-2 rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} type="text" name="name"/>
                </div>
                <div className={"flex flex-row justify-around w-full gap-12"}>
                    <div className={"w-1/2"}>
                        <label className={"block text-md"} htmlFor="phone">Phone Number</label>
                        <input id="linkCursor" required onChange={(e) => setNumber(e.target.value)} value={number} className={" w-full border-b border-l-0 border-r-0 border-t-0 bg-[#121212] border-gray-500 p-2 rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} type="tel" name="phone"/>
                    </div>
                    <div className={"w-1/2"}>
                        <label className={"block text-md"} htmlFor="email">Email</label>
                        <input id="linkCursor" required onChange={(e) => setEmail(e.target.value)} value={email} className={"w-full border-b border-l-0 border-r-0 border-t-0 bg-[#121212] border-gray-500 p-2 rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} type="email" name="email"/>
                    </div>
                </div>
                <div className={"w-full"}>
                    <label className={"block text-md"} htmlFor="subject">Message</label>
                    <textarea id="linkCursor" maxLength={250} required onChange={(e) => setMessage(e.target.value)} value={message} className={"w-full border-b border-l-0 border-r-0 border-t-0 bg-[#121212] border-gray-500 p-2 rounded-md focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"} name="subject"/>
                </div>
                <button id="linkCursor" type="submit" className={" rounded-lg py-3 w-full border-2 cursor-none border-white text-white text-xl hover:border-[#D8E9A8] hover:text-[#D8E9A8] focus:border-[#D8E9A8] focus:ring-[#D8E9A8]"}>Submit</button>
            </div>
        </form>
    )
}