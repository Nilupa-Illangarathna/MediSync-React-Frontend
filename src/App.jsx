import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import { themeOptions } from "./theme"
import Router from "./Router"

function App() {
  const theme = createTheme(themeOptions)
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </>
  )
}

export default App
