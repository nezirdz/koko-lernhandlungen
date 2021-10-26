module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "lernhandlungen",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: "./src/media",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
