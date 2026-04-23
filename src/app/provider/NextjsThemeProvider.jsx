'use client'
import { ThemeProvider } from "next-themes"

const NextjsThemeProvider = ({children}) => {
    return (
        <ThemeProvider  attribute="class" defaultTheme="light">
            {children}
        </ThemeProvider>
    )
}

export default NextjsThemeProvider
