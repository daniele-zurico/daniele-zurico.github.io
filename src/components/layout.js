/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import "typeface-nunito-sans"
import "./layout.css"
const Layout = ({ children, uri }) => (
  <>
    <Header location={uri} />
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()}, Built by
      {` `}
      <a href="https://www.gatsbyjs.org">Daniele Zurico</a>
    </footer>
  </>
)

export default Layout
