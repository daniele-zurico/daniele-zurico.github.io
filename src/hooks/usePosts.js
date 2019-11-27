import { graphql, useStaticQuery } from "gatsby"
export function usePosts() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
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
  return allMarkdownRemark.edges
}
