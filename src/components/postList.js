import React from "react"
import Post from "./post"

const PostList = ({ posts }) => {
  const postList = posts
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <Post key={edge.node.id} post={edge.node} />)
  return <>{postList}</>
}

export default PostList
