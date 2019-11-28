import React from "react"
import { graphql, Link } from "gatsby"
import { SectionTitle, Post } from "../components"
import styles from "./blog-list.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Masonry from "react-masonry-css"

const BlogList = ({ data, location, pageContext }) => {
  console.log(pageContext)
  const { currentPage, numPages } = pageContext
  const edges = data.allMarkdownRemark.edges
  const postList = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => (
      <Post key={edge.node.id} post={edge.node} location={location} />
    ))

  const isFirst = currentPage === 1
  const isLast = numPages === currentPage
  const prevPage =
    currentPage === 2 ? "/" : `/blog/${(currentPage - 1).toString()}`
  const nextPage = `/blog/${currentPage + 1}`

  const breakpointColumnsObj = {
    default: 3,
    1160: 2,
    780: 1,
  }

  return (
    <>
      <SectionTitle title="Posts" />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGrid_column}
      >
        {postList}
      </Masonry>
      <div className={styles.navigateContainer}>
        {!isFirst && (
          <Link to={prevPage} rel="prev" className={styles.navigate}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next" className={styles.navigate}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        )}
      </div>
    </>
  )
}
export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            type
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
