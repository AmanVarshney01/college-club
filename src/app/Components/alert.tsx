'use client';
import {useState} from "react";

export default function Alert({text}: { text: string }) {

    const [show, setShow] = useState(true)

    return (
        <div onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)} className={"fixed z-10 top-0 right-0 m-10 flex justify-between"}>
            {show && (<div className="px-5 bg-yellow-400 text-white rounded-2xl font-mono font-bold"><p className={"m-6"}>{text}</p>
            </div>)}
            <button className="ml-4 mt-4 mb-4 mr-0 motion-safe:animate-pulse hover:animate-none" onClick={() => setShow(!show)}>
                <svg className={"fill-amber-300"} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                    <path d="M480.175 628q12.825 0 21.325-8.625T510 598V446q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T450 446v152q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625Zm-.193 108q14.018 0 23.518-9.482 9.5-9.483 9.5-23.5 0-14.018-9.482-23.518-9.483-9.5-23.5-9.5-14.018 0-23.518 9.482-9.5 9.483-9.5 23.5 0 14.018 9.482 23.518 9.483 9.5 23.5 9.5ZM190 856q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190 796h54V490q0-82 49.5-148.5T424 258v-29q0-23 16.265-38 16.264-15 39.5-15Q503 176 519.5 191t16.5 38v29q81 17 131 83.5T717 490v306h53q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770 856H190Zm290-295Zm0 415q-32 0-56-23.5T400 896h160q0 33-23.5 56.5T480 976ZM304 796h353V490q0-75-51-126.5T480.5 312Q406 312 355 363.5T304 490v306Z"/>
                </svg>
            </button>
        </div>
    )
}