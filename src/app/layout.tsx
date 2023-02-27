"use client";
import './globals.css'
import { AnalyticsWrapper } from './analytics';
import Navbar from "@/app/navbar";
import Alert from "@/app/alert";
import {AnimatePresence} from "framer-motion";

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
      <body>
      <Alert  text={"Register Now! Entrevista: Mock placement Drive"}/>
      <Navbar/>
      <AnimatePresence initial={false}>
          {children}
      </AnimatePresence>
      <AnalyticsWrapper />
      </body>
    </html>
  )
}
