module.exports = {
  siteMetadata: {
    title: 'Matthew Sweeney - Front End Developer',
    author: 'Matthew Sweeney',
    description: 'The portfolio of Matthew Sweeney',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Matthew Sweeney - Front End Developer',
        short_name: 'MSD',
        start_url: '/',
        background_color: '#fafafa',
        theme_color: '#dfdfdf',
        display: 'minimal-ui',
        icon: 'src/favicon/favicon-96x96.png',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
