const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- endexcerpt -->`
      }
    },
    {
      resolve: "gatsby-plugin-social-cards",
      options: {
        // ommit to skip
        authorImage: "./content/images/avatar.jpg",
        // image to use when no cover in frontmatter
        // backgroundImage: "./static/img/hvitserkur.JPG",
        // author to use when no auth in frontmatter
        defaultAuthor: "Yuan Chiang",
        // card design
        design: "default", // 'default' or 'card'
    },
  },
    {
     resolve: `gatsby-plugin-typography`,
     options: {
       pathToConfigModule: `src/utils/typography`,
     },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Yuan Chiang`,
        short_name: `YC`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/atom.png`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-mathjax-ssr`,
            options: {
            }
          }
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-mathjax-ssr`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};

// `gatsby-remark-responsive-iframe`,
