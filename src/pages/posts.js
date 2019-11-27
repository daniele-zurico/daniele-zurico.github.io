import React from "react"
import { SectionTitle, Post } from "../components"
import styles from "./posts.module.css"
// import { usePosts } from "../hooks/usePosts"
import { graphql, useStaticQuery } from "gatsby"

import Masonry from "react-masonry-css"

const Posts = ({ allMarkdownRemark, location }) => {
  // const edges = usePosts()

  const postList = allMarkdownRemark.edges
    .filter(
      edge =>
        !!edge.node.frontmatter.date && edge.node.frontmatter.type === "blog"
    ) // You can filter your posts based on some criteria
    .map(edge => (
      <Post key={edge.node.id} post={edge.node} location={location} />
    ))

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
    </>
  )
}

export const blogListQuery = useStaticQuery(graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
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
`)

export default Posts
