const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- endexcerpt -->`
      }
    },
    {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              height: 450,
              related: false,
              noIframeBorder: true,
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                }
              ]
            }
          }
          ]
        }
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
  ],
};
