import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./post-link.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons"
const PostLink = ({ post }) => {
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <div className={styles.container}>
      <span class={styles.dateContainer}>
        <a to={post.frontmatter.path} className={styles.date}>
          {/* <div>({post.frontmatter.date})</div> */}
          <span style={{ display: "block" }}>Nov</span>
          <strong
            style={{
              display: "block",
              color: "#f53b57",
              fontSize: "30px",
              lineHeight: "30px",
              fontWeight: "normal",
              margin: "2px 0",
            }}
          >
            01
          </strong>
          <span style={{ display: "block" }}> 2019</span>
        </a>
      </span>
      {featuredImgFluid && <Img fluid={featuredImgFluid} />}
      <div className={styles.info}>
        <Link to={post.frontmatter.path} className={styles.link}>
          <div style={{ borderLeft: "5px solid #f53b57", paddingLeft: "10px" }}>
            <span>{post.frontmatter.title}</span>
          </div>
          <div style={{ marginTop: "15px" }}>
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ marginRight: "10px" }}
            />
            <FontAwesomeIcon icon={faTwitter} style={{ marginRight: "10px" }} />
            <FontAwesomeIcon icon={faGooglePlus} />
          </div>
        </Link>
      </div>
    </div>
  )
}
export default PostLink
