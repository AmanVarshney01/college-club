"use client";
import {useTheme} from "next-themes";

export default function ThemeToggle () {

    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    // const currentTheme = 'dark';
    // const currentTheme = theme === 'light' ? 'dark': 'dark';

    return (
        <button id="linkCursor"  className={""} onClick={() => currentTheme == "dark" ? setTheme('light') : setTheme('dark')}>🌓</button>
    )
}