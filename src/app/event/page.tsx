"use client";
import EventShowcase from "@/app/event/Components/EventShowcase";
import funactivity from 'public/funactivity.png'
import {PageWrapper} from "@/app/page-wrapper";

export default function page() {

    return (
        <PageWrapper>
            <section id="workpage" className={"overflow-hidden"}>
                <div className={"w-full min-h-screen py-24 flex flex-col justify-center"}>
                    <div className={'flex flex-col place-items-center flex-1'}>
                        <div className={"w-10 h-10 bg-[#4E9F3D] rounded-full relative"}>
                            {/*<span className={"text-white text-4xl"}>1</span>*/}
                            <span className={"absolute right-20 2xl:text-2xl text-sm w-max"}>IT Tech Mela</span>
                        </div>
                        <div className={`w-1 grow bg-gray-100 opacity-50`}></div>
                    </div>

                    <div className={'flex flex-col place-items-center opacity-50 flex-1'}>
                        <div className={" w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                            {/*<span className={"text-white text-4xl"}>1</span>*/}
                            <span className={"absolute left-20 2xl:text-2xl text-sm w-max"}>Entrevista</span>
                        </div>
                        <div className={`w-1 grow bg-gray-100 opacity-20`}></div>
                    </div>

                    <div className={'mx-auto flex flex-col place-items-center opacity-50 flex-1'}>
                        <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                            <span className={"absolute right-20 2xl:text-2xl text-sm w-max"}>Solving For India</span>
                        </div>
                        <div className={`w-1 grow bg-gray-100 opacity-20`}></div>
                    </div>

                    <div className={'mx-auto flex flex-col place-items-center opacity-50 flex-1'}>
                        <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                            <span className={"absolute left-20 2xl:text-2xl text-sm w-max"}>Brain It Out</span>
                        </div>
                        <div className={`w-1 grow bg-gray-100 opacity-20`}></div>
                    </div>

                    <div className={'mx-auto flex flex-col place-items-center opacity-50 relative'}>
                        <div className={"w-10 h-10 bg-[#D8E9A8] rounded-full relative"}>
                            <span className={"absolute right-20 2xl:text-2xl text-sm w-man"}>Disha</span>
                        </div>
                        {/*<div className={" w-[40rem] h-[40rem] absolute bottom-0 -right-38 z-50 pointer-events-none bg-[#bedba8] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>*/}

                        {/*<div className={"w-1 h-40 bg-white"}></div>*/}
                    </div>
                </div>
                <div>
                    <div className={"min-h-screen flex flex-col relative w-[500vw]"}>
                        <EventShowcase imgSrc={funactivity} title={"IT Tech Mela"} subTitle={""}
                                       description={"wonderful event"}/>
                        <EventShowcase imgSrc={funactivity} title={"Entrevista"} subTitle={"Mock Placement Drive"}
                                       description={"wonderful event"}/>
                        <EventShowcase imgSrc={funactivity} title={"Solving For India"} subTitle={"Fun Activities"}
                                       description={"wonderful event"}/>
                        <EventShowcase imgSrc={funactivity} title={"Brain It Out"} subTitle={""}
                                       description={"wonderful event"}/>
                        <EventShowcase imgSrc={funactivity} title={"Disha"} subTitle={"Guide to what's next"}
                                       description={"wonderful event"}/>
                    </div>
                </div>
            </section>
        </PageWrapper>

    )
}