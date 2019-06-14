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
          '36689',
          '25364',
          '33204',
          '27129',
          '35296',
          '33948',
          '49964'
        ],
      },
      {
        name: 'JScal',
        players: [
          '28237',
          '29221',
          '27649',
          '31646',
          '25818',
          '34256',
          '30110'
        ],
      },
      {
        name: 'Mark J',
        players: [
          '01810',
          '31323',
          '21209',
          '25632',
          '26499',
          '33803',
          '46046'
        ],
      },
      {
        name: 'Ben B',
        players: [
          '08793',
          '32839',
          '26851',
          '29420',
          '25900',
          '25686',
          '29454'
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
