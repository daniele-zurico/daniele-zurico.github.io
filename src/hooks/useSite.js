import { graphql, useStaticQuery } from "gatsby"
export function useSite() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          lang
        }
      }
    }
  `)
  return site.siteMetadata
}
