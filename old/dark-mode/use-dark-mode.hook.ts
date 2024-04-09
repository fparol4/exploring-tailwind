import { useState } from "react";

export type Theme = 'light' | 'dark'

export function useDarkMode() {
    const currentTheme = document.documentElement.classList
    console.log(currentTheme)
    const [theme, setTheme] = useState<Theme>('light')
    return [theme, setTheme]
}