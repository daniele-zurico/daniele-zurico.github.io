module.exports = {
  pathPrefix: "/daniele-zurico.github.io",
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
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `pub-2702503334080687`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-37192867-2",
      },
    },
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
  ],
}
