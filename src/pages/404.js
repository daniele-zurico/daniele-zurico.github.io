import React from "react"
import { Layout, Head } from "../components"
import { useSite } from "../hooks/useSite"

const NotFoundPage = ({ location }) => {
  const site = useSite()
  return (
    <Layout site={site} location={location}>
      <Head title="404: Not found" site={site} />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
