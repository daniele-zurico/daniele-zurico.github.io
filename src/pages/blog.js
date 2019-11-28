import React from "react"
import { SEO } from "../components"

import { useSite } from "../hooks/useSite"

const IndexPage = ({ location }) => {
  const site = useSite()
  return <SEO title="Home" site={site} />
}

export default IndexPage
