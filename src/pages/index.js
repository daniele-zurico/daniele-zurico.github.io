import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/post-link"
import styles from "./index.module.css"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Link to="/page-2/">Go to page 2</Link> */}
      <div
        style={{
          textAlign: "right",
          borderRight: "4px solid #f53b57",
          padding: "10px",
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        <span style={{ marginRight: "5px" }}>Posts</span>
      </div>
      <div className={styles.gridContainer}>{Posts}</div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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
    }
  }
`
