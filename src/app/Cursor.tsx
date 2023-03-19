import {useEffect} from "react";

export default function Cursor() {

    useEffect(() => {
        const cursor = document.querySelector('#cursor') as HTMLElement
        const linkCursor = document.querySelectorAll('#linkCursor')
        document.addEventListener('mousemove', (e) => {
            let x = e.clientX
            let y = e.clientY
            cursor.style.left = x + 'px'
            cursor.style.top = y + 'px'
        })

        linkCursor.forEach(linkCursor => {
            linkCursor.addEventListener("mouseenter", () => {
                cursor.classList.add("linkCursor")
            })
        })

        linkCursor.forEach(linkCursor => {
            linkCursor.addEventListener("mouseleave", () => {
                cursor.classList.remove("linkCursor")
            })
        })
    })

    return (
        <div id="cursor" className={"z-50 w-10 h-10 rounded-full fixed pointer-events-none bg-transparent border-2 border-[#D8E9A8]"}></div>
    )
}