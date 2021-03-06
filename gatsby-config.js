require("dotenv").config()

module.exports = {

  siteMetadata: {
    title: "Cloudburstpro",
    author: "Hunter Chang",
    description: "A Gatsby.js V2 Starter based on Dimension by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-stripe',
     {
    resolve: `gatsby-source-stripe`,
    options: {
      objects: [ 'Product',  'Sku'],
      secretKey: process.env.STRIPE_SECRET_KEY,
      async: true,
      downloadFiles: true
    },
  },
   {
     resolve: `gatsby-plugin-s3`,
     options: {
         bucketName: 'cloudburstpro.com'
     },
 },
      'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-sass',
    // 'gatsby-plugin-offline',
  ],
}
