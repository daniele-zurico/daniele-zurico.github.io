import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { SEO, SectionTitle } from "../components"
import { useSite } from "../hooks/useSite"
import styles from "./blogTemplate.module.css"
import Social from "../components/social"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location,
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const site = useSite()
  let post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <>
      <SEO
        title={frontmatter.title}
        site={site}
        featuredImage={featuredImgFluid.src}
      />
      <div>
        <Img fluid={featuredImgFluid} />
        <SectionTitle title={frontmatter.title} left={true} />
        <div className={styles.content}>
          <h2 className={styles.date} style={{ marginBottom: 0 }}>
            {frontmatter.date}
          </h2>
          <Social url={location.href} iconClass={styles.iconClass} />

          <div
            className={styles.post}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </>
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
