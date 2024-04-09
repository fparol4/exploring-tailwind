import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Switch } from '@/components/shadcn/switch'

enum Theme {
    'Light' = 'light',
    'Dark' = 'dark'
}

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => { setMounted(true) }, []);

    if (!mounted) return null;

    // const getTheme = (theme: string) => theme === Theme.Light ?
    //     Theme.Dark : Theme.Light

    function toggleTheme() {
       const nextTheme = theme !== Theme.Light ? Theme.Light : Theme.Dark
       setTheme(nextTheme)
    }

    return (
        <div>
            <h1>Hellowolrd - Is mounted! {theme}</h1>
            <Switch onCheckedChange={toggleTheme} />
        </div>
    )
}