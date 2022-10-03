import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const FeaturedImage = ({ className, imageRef }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "head.jpeg" }) {
        childImageSharp {
            gatsbyImageData(layout: FIXED)
        }
      }
    }
  `)

  return (
    <GatsbyImage
      ref={imageRef}
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      className={className}
      style={{ height: "465px" }}
      alt="dzurico blog"
    />
  )
}

export default FeaturedImage
