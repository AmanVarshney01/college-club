"use client";
import {useTheme} from "next-themes";

export default function ThemeToggle () {

    const {systemTheme, theme, setTheme} = useTheme();
    // const currentTheme = theme === 'system' ? systemTheme : theme;
    const currentTheme = theme === 'light' ? 'dark': 'dark';

    return (
        <button className={""} onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}>🌓</button>
    )
}