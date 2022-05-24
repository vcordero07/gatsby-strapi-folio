require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [
    "job",
    {
      singularName: "project",
      queryParams: {
        // Populate media and relations
        // Make sure to not specify the fields key so the api always returns the updatedAt
        populate: {
          image: "*",
          images: "*",
          stack: {
            populate: {
              title: "*",
            },
          },
        },
      },
    },
  ],
  singleTypes: [
    {
      singularName: "about",
      queryParams: {
        populate: {
          image: "*",
          stack: {
            populate: {
              title: "*",
            },
          },
        },
      },
    },
  ],
  // singleTypes: [],
}

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `CatDev Folio`,
    description: `Meowsome CatDev Folio built with Gatsby and Strapi`,
    titleTemplate: `%s | CatDev Folio`,
    url: `https://catdev.netlify.app`,
    twitterUsername: `@vcordero07`,
    image: `/mainImg.png`,
  },

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
    },
  ],
}
