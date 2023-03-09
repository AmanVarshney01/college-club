"use client";
import {useTheme} from "next-themes";

export default function ThemeToggle () {

    const {systemTheme, theme, setTheme} = useTheme();
    const currentTheme = theme === 'system' ? 'dark' : theme;
    // const currentTheme = theme === 'light' ? 'dark': 'dark';

    return (
        <button className={""} onClick={() => currentTheme == "dark" ? setTheme('light') : setTheme('dark')}>🌓</button>
    )
}