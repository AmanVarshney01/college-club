import './globals.css'
import { AnalyticsWrapper } from './analytics';
import Navbar from "@/app/navbar";

import {Lilita_One} from "@next/font/google";

const lilitaOne = Lilita_One({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-lilitaOne'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head ><title>GFG GLAU</title></head>
      <body className={`${lilitaOne.variable} font-sans`}>
      <Navbar/>
      {children}
      <AnalyticsWrapper />
      </body>
    </html>
  )
}
