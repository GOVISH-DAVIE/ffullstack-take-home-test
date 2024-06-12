import { ThemeProvider } from "@mui/material"
import mainTheme from "../utils/theme"
import { ReactNode } from "react"

 

export const ElloTheme = ({ children }: { children: ReactNode }) => {
    return <ThemeProvider theme={mainTheme}>
        {
            children
        }

        </ThemeProvider>
}