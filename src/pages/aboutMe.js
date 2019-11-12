import React from "react"
import { SEO } from "../components"
import { useSite } from "../hooks/useSite"
const AboutMe = () => {
  const site = useSite()
  return (
    <>
      <SEO title="About me" site={site} />
      <div>About me</div>
    </>
  )
}

export default AboutMe
