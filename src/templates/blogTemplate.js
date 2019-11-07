import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Layout, SEO, SectionTitle } from "../components"
import { useSite } from "../hooks/useSite"
import styles from "./blogTemplate.module.css"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const site = useSite()
  let post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout site={site} featuredImage={false}>
      <SEO title="About me" site={site} />
      <SectionTitle title={frontmatter.title} />
      <div className={styles.container}>
        <Img fluid={featuredImgFluid} />
        <div className={styles.content}>
          <h2>{frontmatter.date}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
