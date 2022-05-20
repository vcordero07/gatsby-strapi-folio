require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["job"],
  singleTypes: [],
}

module.exports = {
  /* Your site config here */

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
      // options: {
      //   // apiURL: `http://localhost:1337/api`,
      //   apiURL: process.env.STRAPI_API_URL || "http://localhost:1337/api",
      //   accessToken: process.env.STRAPI_TOKEN,
      //   queryLimit: 1000, // Defaults to 100
      //   collectionTypes: [
      //     {
      //       name: `job`,
      //       endpoint: `jobs/?populate=desc`,
      //     },
      //   ],
      //   singleTypes: [],
      // },
    },
  ],
}
