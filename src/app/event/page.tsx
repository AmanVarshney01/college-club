"use client";
import EventShowcase from "@/app/event/Components/EventShowcase";
import {PageWrapper} from "@/app/page-wrapper";

export default function page() {

    return (
        <PageWrapper>
            <section id="event-page" className={"overflow-hidden lg:px-4 lg:py-2 px-2 py-1 z-10"}>

                <div className={"flex flex-col justify-end min-h-[100svh] w-full"}>
                    <h1 className={" drop-shadow-lg w-max h-max"}>
                <span
                    id="title"
                    className={" lg:text-[28vh] text-[15vh] flex flex-col drop-shadow-lg leading-none bg-gradient-to-br from-[#4E9F3D] text-transparent bg-clip-text to-[#4E9F3D] via-[#D8E9A8]"}>
                    <span>Events</span>
                </span>
                    </h1>
                </div>

                <div className={"w-full min-h-screen py-24 flex flex-col justify-center"}>
                    <div className={'flex flex-col place-items-center flex-1'}>
                        <div className={"w-10 h-10 bg-[#4E9F3D] rounded-full relative"}>
                            {/*<span className={"text-white text-4xl"}>1</span>*/}
                            <span className={"absolute right-20 2xl:text-2xl text-sm w-max"}>Event 5</span>
                        </div>
                        <div className={`w-1 grow bg-gray-100 opacity-50`}></div>
                    </div>

                    <div className={'flex flex-col place-items-center opacity-50 flex-1'}>
                        <div className={" w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                            {/*<span className={"text-white text-4xl"}>1</span>*/}
                            <span className={"absolute left-20 2xl:text-2xl text-sm w-max"}>Event 4</span>
                        </div>
                        <div className={`w-1 grow bg-gray-100 opacity-20`}></div>
                    </div>

                    <div className={'mx-auto flex flex-col place-items-center opacity-50 flex-1'}>
                        <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                            <span className={"absolute right-20 2xl:text-2xl text-sm w-max"}>Event 3</span>
                        </div>
                        <div className={`w-1 grow bg-gray-100 opacity-20`}></div>
                    </div>

                    <div className={'mx-auto flex flex-col place-items-center opacity-50 flex-1'}>
                        <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                            <span className={"absolute left-20 2xl:text-2xl text-sm w-max"}>Event 2</span>
                        </div>
                        <div className={`w-1 grow bg-gray-100 opacity-20`}></div>
                    </div>

                    <div className={'mx-auto flex flex-col place-items-center opacity-50 relative'}>
                        <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                            <span className={"absolute right-20 2xl:text-2xl text-sm w-max"}>Event 1</span>
                        </div>
                        {/*<div className={" w-[40rem] h-[40rem] absolute bottom-0 -right-38 z-50 pointer-events-none bg-[#bedba8] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>*/}

                        {/*<div className={"w-1 h-40 bg-white"}></div>*/}
                    </div>
                </div>
                <div>
                    <div className={"min-h-screen flex flex-col relative"}>
                        <EventShowcase imgSrc={null} title={"Event5"} subTitle={""}
                                       description={"wonderful event"}/>
                        <EventShowcase imgSrc={null} title={"Event4"} subTitle={""}
                                       description={"wonderful event"}/>
                        <EventShowcase imgSrc={null} title={"Event3"} subTitle={""}
                                       description={"wonderful event"}/>
                        <EventShowcase imgSrc={null} title={"Event2"} subTitle={""}
                                       description={"wonderful event"}/>
                        <EventShowcase imgSrc={null} title={"Event1"} subTitle={""}
                                       description={"wonderful event"}/>
                    </div>
                </div>
            </section>
        </PageWrapper>

    )
}