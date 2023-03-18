import {useEffect} from "react";

export default function Cursor() {

    useEffect(() => {
        const cursor = document.querySelector('#cursor') as HTMLElement
        document.addEventListener('mousemove', (e) => {
            let x = e.clientX
            let y = e.clientY
            cursor.style.left = x + 'px'
            cursor.style.top = y + 'px'
        })
    })

    return (
        <div id="cursor" className={"z-50 w-3 h-3 rounded-full fixed pointer-events-none bg-transparent border-2 border-[#D8E9A8]"}></div>
    )
}