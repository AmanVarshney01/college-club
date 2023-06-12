"use client";

import {useRef} from "react";
import {useInView} from "framer-motion";
import classNames from "classnames";

export default function EventTitle({title, description}: { title: string, description: string }) {

    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"});

    return (<p ref={ref} className={classNames("text-5xl py-24 transition-colors", isInView ? "text-white" : "text-gray-400/40")}>{title}</p>
    )
}