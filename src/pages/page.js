import React from "react"
import { Head } from "../components"

import { useSite } from "../hooks/useSite"

const IndexPage = () => {
  const site = useSite()
  return <Head title="Home" site={site}/>
}

export default IndexPage
