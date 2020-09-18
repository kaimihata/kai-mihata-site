/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Kai Mihata`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,400,500,600,700,800,900`,
          `martel\:100,200,300,400,500,600,700,800,900`,
          `Montserrat\:500,600,700,800,900`,
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
