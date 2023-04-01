import './globals.css'
import {AnalyticsWrapper} from './analytics';
import {Montserrat} from "next/font/google";
import Navbar from "@/app/home/Components/navbar";
import Bgicons from "@/app/home/Components/bgicons";
import Footer from "@/app/footer/Footer";


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
    title: 'College Club',
    description: 'Official Website of club name',
    creator: 'Aman Varshney',
    keywords: ['college club', 'club website template'],
    icons: {
        icon: '',
        shortcut: ''
    },
    category: 'technology',
    appLinks: {
        web: {
            url: 'https://college-club.vercel.app/',
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
        {children}
        <Footer />
        <Bgicons/>
        <AnalyticsWrapper/>
        </body>
        </html>
    )
}
