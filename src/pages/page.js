import React from "react"
import { SEO } from "../components"

import { useSite } from "../hooks/useSite"

const IndexPage = () => {
  const site = useSite()
  return <SEO title="Home" site={site} />
}

export default IndexPage
