import React from "react"
import { Layout, SEO } from "../components"
import { useSite } from "../hooks/useSite"
const AboutMe = () => {
  const site = useSite()
  return (
    <Layout site={site}>
      <SEO title="About me" site={site} />
      <div>About me</div>
    </Layout>
  )
}

export default AboutMe
