"use client";
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function TextSlideshow() {

    const texts = ["Join Our Club", "Event Request", "Sponsor Us?"];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={texts[currentIndex]}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, transition: { duration: 0.5 }, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className={"w-fit text-center"}
            >
                <h1 className={"text-6xl"}>{texts[currentIndex]}</h1>
            </motion.div>
        </AnimatePresence>
    )
}