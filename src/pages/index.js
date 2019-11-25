import React from "react"
import { SEO } from "../components"
import Posts from "./posts"
import { useSite } from "../hooks/useSite"

const IndexPage = ({ location }) => {
	const site = useSite()
	return (
		<>
			<SEO title="Home" site={site} />
			<Posts location={location} />
		</>
	)
}

export default IndexPage
