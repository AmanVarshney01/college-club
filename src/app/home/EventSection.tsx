"use client";
import EventTitle from "@/app/home/Components/EventTitle";
import {motion} from "framer-motion";


export default function EventSection() {

    const events = [
        { title: 'Event 1', description: 'Event 1 description' },
        { title: 'Event 2', description: 'Event 2 description' },
        { title: 'Event 3', description: 'Event 3 description' },
        { title: 'Event 4', description: 'Event 4 description' },
        { title: 'Event 5', description: 'Event 5 description' },
        { title: 'Event 6', description: 'Event 6 description' },
    ];

    return (
        <section className={"bg-transparent flex w-full gap-20 lg:px-8 px-2 "}>
            <div className={"w-full py-[50vh]"}>
                <ul>
                    {events.map((event) => (
                        <li key={event.title}>
                            <EventTitle title={event.title} description={event.description} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={"w-full sticky top-0 flex h-screen items-center"}>
                <div className={"aspect-square rounded-2xl w-full bg-gray-100"}></div>
            </div>
        </section>
    )
}