import React from "react"
import { Layout, SEO } from "../components"
import { useSite } from "../hooks/useSite"
const Contacts = () => {
  const site = useSite()
  return (
    <Layout site={site}>
      <SEO title="Contacts" site={site} />
      <div>Contacts</div>
    </Layout>
  )
}

export default Contacts
