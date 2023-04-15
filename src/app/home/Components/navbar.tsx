"use client";
import NavButton from "@/app/home/Components/NavButton";
import {motion as m, useScroll} from "framer-motion";
import {useEffect, useState} from "react";
import Image from "next/image";
import clubLogoNav from "public/club_logo_nav.png";

export default function Navbar() {

    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(false);

    const variants = {
        visible: {opacity: 1, y: 0},
        hidden: {opacity: 0, y: -25}
    }

    function update() {
        if (scrollY?.get() < scrollY?.getPrevious()) {
            setHidden(false);
        } else if (scrollY?.get() > 100 && scrollY?.get() > scrollY?.getPrevious()) {
            setHidden(true);
        }
    }

    useEffect(() => {
        scrollY.on("change",() => update())
    })

    return (
        // bg-gradient-to-b from-[#121212]/100 to-[#121212]/0
            <m.nav variants={variants} animate={hidden ? "hidden" : "visible"} transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }} className={"bg-[#121212] fixed w-full z-50"}>
                <div className={"flex flex-row justify-between items-center gap-16 w-full py-1 px-4 lg:py-2 lg:px-8"}>
                    <div className={" z-10 flex flex-row gap-5 items-center w-fit"}>
                        <m.a initial={{scale: 0, opacity: 0}} animate={{opacity: 1, scale: 1}} href="/" className={""}><Image priority placeholder="blur" width={250} id="linkCursor" src={clubLogoNav} alt="club logo"/></m.a>
                    </div>
                    <div className={"flex 2xl:gap-8 gap-3 w-fit relative"}>
                        <NavButton href={"/about"}  name={"About"}/>
                        <NavButton href={"/event"} name={"Events"}/>
                        <NavButton href={"/contact"} name={"Contact"}/>
                        {/*<ThemeToggle />*/}
                        {/*<div className={" w-[28rem] h-[28rem] absolute -top-48 -right-36 pointer-events-none bg-[#bedba8] rounded-full mix-blend-multiply filter blur-xl opacity-10"}></div>*/}
                    </div>
                </div>
            </m.nav>
    )
}