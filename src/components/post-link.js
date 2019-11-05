import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
const PostLink = ({ post }) => {
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  console.log(featuredImgFluid)
  return (
    <div>
      {featuredImgFluid && <Img fluid={featuredImgFluid} />}
      <Link to={post.frontmatter.path}>
        {post.frontmatter.title} ({post.frontmatter.date})
      </Link>
    </div>
  )
}
export default PostLink
