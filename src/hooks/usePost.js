import { graphql, useStaticQuery } from "gatsby"
export function usePost() {
  const data = useStaticQuery(graphql`
    query($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
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
  `)
  return markdownRemark
}
