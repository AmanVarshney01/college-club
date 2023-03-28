"use client";
import {motion as m, AnimatePresence} from "framer-motion";

export const  PageWrapper = ({children}: {children: React.ReactNode}) => {
    return (
        <AnimatePresence>
            <m.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 20}}
            transition={{duration: 0.5, delay: 0.25}}
            >
                {children}
            </m.div>
        </AnimatePresence>
    )
}