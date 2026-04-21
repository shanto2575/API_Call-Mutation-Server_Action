'use client'
import { ThemeProvider } from 'next-themes'

export const Provider = ({children}) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Provider
