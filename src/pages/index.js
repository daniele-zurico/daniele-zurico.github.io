import React from "react"
import { Layout, SEO } from "../components"
import Posts from "./posts"
import { useSite } from "../hooks/useSite"

import "./theme.css"
const IndexPage = () => {
  const site = useSite()
  return (
    <>
      {/* <Layout site={site} /> */}
      <SEO title="Home" site={site} />
      <Posts />
    </>
  )
}

export default IndexPage
