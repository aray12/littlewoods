module.exports = {
  siteMetadata: {
    title: `Littlewoods`,
    description: `A Place to Gamble on Golf with Friends`,
    teams: [
      {
        name: 'Danny Z',
        players: [
          '30925',
          '21528',
          '25804',
          '29974',
          '33293',
          '32757',
          '51936'
        ],
      },
      {
        name: 'Matt M',
        players: [

        ],
      },
      {
        name: 'JScal',
        players: [

        ],
      },
      {
        name: 'Mark J',
        players: [

        ],
      },
      {
        name: 'Ben B',
        players: [

        ],
      },
      {
        name: 'Danny K',
        players: [

        ],
      },
      {
        name: 'ARay',
        players: [

        ],
      },
      {
        name: 'Andy S',
        players: [

        ],
      },
      {
        name: 'Tony C',
        players: [
          
        ],
      },
      {
        name: 'David C',
        players: [

        ],
      },
      {
        name: 'Mike M',
        players: [

        ],
      },
      {
        name: 'John M',
        players: [

        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `littlewoods`,
        short_name: `littlewoods`,
        author: 'Alex Ray',
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
