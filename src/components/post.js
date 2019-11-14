import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./post.module.css"
import DateDisplay from "./dateDisplay"
import Social from "./social"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
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
  <div>
    <Link to={path} className={styles.container}>
      <div className={styles.post}>
        <DateDisplay date={date} />
        <Img fluid={fluid} />
        <div className={styles.info}>
          <div className={styles.titleContainer}>
            <span className={styles.title}>{title}</span>
          </div>
          <div className={styles.footer}>
            <Social />
            <div>
              <span className={styles.text}>Read more</span>
              <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
)

export default Post
