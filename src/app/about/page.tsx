"use client";
import {motion} from "framer-motion";

export default function Home() {
    return (
        <motion.main
            className={"bg-amber-600"}
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: window.innerWidth, transition: { duration: 0.5}}}
        >
            <h1>About Page</h1>
        </motion.main>
    )
}