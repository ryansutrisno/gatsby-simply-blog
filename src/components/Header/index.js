import React, { useState } from "react"
import { Link } from "gatsby"
// Component
import Menu from "components/Menu"
import Hamburger from "components/Hamburger"
import MobileMenu from "components/MobileMenu"
// Hooks
import { useConfigQuery } from "hooks/useConfigQuery"
// Styles
import { Wrapper, Logo } from "./Header.styles"

const Header = ({ siteTitle = `` }) => {
  const siteConfig = useConfigQuery()
  const [menuOpen, setMenuOpen] = useState(false)
  console.log("siteConfig", siteConfig)
  return (
    <Wrapper>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
      <Menu items={siteConfig.menu} />
      <div>Theme button</div>
    </Wrapper>
  )
}

export default Header
