import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./post.module.css"
import DateDisplay from "./dateDisplay"
import Social from "./social"
const Post = ({
  post: {
    frontmatter: {
      path,
      date,
      title,
      featuredImage: {
        childImageSharp: { fluid },
      },
    },
  },
}) => (
  <Link to={path} className={styles.container}>
    <DateDisplay date={date} />
    <Img fluid={fluid} style={{ minHeight: "200px" }} />
    <div className={styles.info}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>{title}</span>
      </div>
      <Social />
    </div>
  </Link>
)

export default Post
