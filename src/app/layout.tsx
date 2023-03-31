import './globals.css'
import {AnalyticsWrapper} from './analytics';
import {Montserrat} from "next/font/google";
import Navbar from "@/app/home/Components/navbar";
import Bgicons from "@/app/home/Components/bgicons";


const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
})
//
// const martianMono = Cousine({
//     subsets: ['latin'],
//     display: 'swap',
//     weight: ["400", "700"],
// })

export const metadata = {
    title: 'GFG GLAU',
    description: 'Official Website of GFG GLAU',
    creator: 'Aman Varshney',
    keywords: ['geeksforgeeks', 'gla university', 'gfg glau', "geeksforgeeks student chapter gla university"],
    icons: {
        icon: '/gfgglau.png',
        shortcut: '/gfgglau.png'
    },
    category: 'technology',
    appLinks: {
        web: {
            url: 'https://gfg-glau.vercel.app/',
        }
    },
    themeColor: '#121212'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <title>GFG GLAU</title>
        </head>
        <body id="body" className={`text-white ${montserrat.className}`}>
        <Navbar/>
        <Bgicons/>
        {children}
        <AnalyticsWrapper/>
        </body>
        </html>
    )
}
