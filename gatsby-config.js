module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    siteUrl: `https://www.dzurico.com`,
    title: `Share your Knowledge`,
    description: `My personal blog where I share tutorial and stuff I found interesting about Javascript`,
    author: `@Daniele Zurico`,
    lang: "en",
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 700,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-amp`,
      options: {
        // analytics: {
        //   type: "gtag",
        //   dataCredentials: "include",
        //   config: {
        //     vars: {
        //       gtag_id: "<GA_TRACKING_ID>",
        //       config: {
        //         "<GA_TRACKING_ID>": {
        //           page_location: "{{ pathname }}",
        //         },
        //       },
        //     },
        //   },
        // },
        // canonicalBaseUrl: "http://www.example.com/",
        // components: ["amp-form"],
        // excludedPaths: ["/404*", "/"],
        // pathIdentifier: "/amp/",
        // relAmpHtmlPattern:
        //   "{{ canonicalBaseUrl }}{{ pathname }}{{ pathIdentifier }}",
        // useAmpClientIdApi: true,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`, `html`],
        resolvers: {
          MarkdownRemark: {
            path: node => node.frontmatter.path,
            title: node => node.frontmatter.title,
            date: node => node.frontmatter.date,
            type: node => node.frontmatter.type,
            html: node => node.internal.content,
          },
        },
      },
    },
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
  ],
}
