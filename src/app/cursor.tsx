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
        <div id="cursor" className={"z-50 w-20 h-20 bg-green-800 opacity-50 rounded-full absolute pointer-events-none"}></div>
    )
}