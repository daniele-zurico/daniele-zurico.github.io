import React from "react"
import { SEO } from "../components"
import Posts from "./posts"
import { useSite } from "../hooks/useSite"

import "./theme.css"
const IndexPage = () => {
  const site = useSite()
  return (
    <>
      <SEO title="Home" site={site} />
      <Posts />
    </>
  )
}

export default IndexPage
