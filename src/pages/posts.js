import React from "react"
import { SectionTitle, Post } from "../components"
import styles from "./posts.module.css"
import { usePosts } from "../hooks/usePosts"
import Masonry from "react-masonry-css"

const Posts = () => {
  const edges = usePosts()
  const postList = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <Post key={edge.node.id} post={edge.node} />)

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

export default Posts
