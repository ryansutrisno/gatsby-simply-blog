import React from "react"
import { ThemeProvider } from "styled-components"
// Component
import Header from "components/Header"
// Styles
import { GlobalStyles, darkTheme, lightTheme } from "styles/GlobalStyles"
// Hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  console.log("data", data)
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
