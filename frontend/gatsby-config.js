module.exports = {
  siteMetadata: {
    title: `Strapi Gatsby Starter`,
    description: `Site description`,
    author: `Debasmit Ray`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `projects`,
    //     path: `${__dirname}/src/projects/`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
