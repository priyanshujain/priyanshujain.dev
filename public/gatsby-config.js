// const postcssCustomMedia = require(`postcss-custom-media`)
// const autoprefixer = require(`autoprefixer`)
// const cssVariables = require(`postcss-css-variables`)
// const colorModFunction = require(`postcss-color-mod-function`)
// const cssNano = require(`cssnano`)
// const customProperties = require(`postcss-custom-properties`)
// const easyImport = require(`postcss-easy-import`)

module.exports = {
  siteMetadata: {
    title: `Priyanshu Jain`,
    description: `pjay.in`,
    author: `Priyanshu Jain`,
    image: "https://pjay.in/PJ.jpg",
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
    // {
    //   resolve: `gatsby-plugin-postcss`,
    //   options: {
    //     postCssPlugins: [
    //       customProperties({ preserve: false }),
    //       postcssCustomMedia(),
    //       cssNano({ zindex: false }),
    //     ],
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pjay.in`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#132945`,
        theme_color: `#132945`,
        display: `minimal-ui`,
        icon: `src/images/PJ.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
