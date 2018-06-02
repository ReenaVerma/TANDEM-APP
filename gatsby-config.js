module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',

    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Lato',
          'source sans pro:300,400,400i,700' // you can also specify font weights and styles
        ]
      }
    }
  ]
};
