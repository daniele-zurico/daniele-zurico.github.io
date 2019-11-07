import React from "react"
import { SectionTitle, PostList } from "../components"
import styles from "./posts.module.css"
import { usePosts } from "../hooks/usePosts"
const Posts = () => {
  const edges = usePosts()
  return (
    <>
      <SectionTitle title="Posts" />
      <div className={styles.container}>
        <PostList posts={edges} />
      </div>
    </>
  )
}

export default Posts
