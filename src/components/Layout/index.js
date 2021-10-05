import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
// Component
import Header from "components/Header"
// Styles
import { GlobalStyles, darkTheme, lightTheme } from "styles/GlobalStyles"
// Hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"
// Context
import { ModeContext } from "context/ModeProvider"

const Layout = ({ children }) => {
  const [darkMode] = useContext(ModeContext)
  const data = useMetaDataQuery()
  console.log("data", data)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
