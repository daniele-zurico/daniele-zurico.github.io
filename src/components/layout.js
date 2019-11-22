/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
//import "typeface-nunito-sans"
import "./layout.css"
import { styles } from "ansi-colors"

const Layout = ({ children, uri }) => {
	const noPicture = uri.includes("/blog/")
	console.log("layout", noPicture)
	return (
		<div>
			<Header location={uri} />
			<main className={noPicture ? "noBorder" : "main"}>{children}</main>
			<footer>
				<svg className="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 25" preserveAspectRatio="none">
					<path d="M0,25 L0,12 L12,0 L75,21 L90,18 L100,24 L100,25 Z" fill="#000000"></path>
				</svg>
				<div className="copyright">
					<div>© {new Date().getFullYear()}, Built by Daniele Zurico</div>
				</div>
			</footer>
		</div>
	)
}

export default Layout
