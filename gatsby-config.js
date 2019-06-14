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
          '34046',
          '47959',
          '26329',
          '25572',
          '24024',
          '27064',
          '06522'
        ],
      },
      {
        name: 'ARay',
        players: [
          '33448',
          '29725',
          '35891',
          '40098',
          '27349',
          '23621',
          '28938'
        ],
      },
      {
        name: 'Andy S',
        players: [
          '35450',
          '24502',
          '48887',
          '25396',
          '29908',
          '32139',
          '45526'
        ],
      },
      {
        name: 'Tony C',
        players: [
          '32102',
          '25198',
          '24138',
          '33141',
          '30978',
          '27141',
          '22371'
        ],
      },
      {
        name: 'David C',
        players: [
          '46970',
          '23108,
          '10809',
          '40006',
          '26476',
          '39546',
          '26300'
        ],
      },
      {
        name: 'Mike M',
        players: [
          '48081',
          '30911',
          '34363',
          '29478',
          '37455',
          '33968',
          '22371'
        ],
      },
      {
        name: 'John M',
        players: [
          '22405',
          '28089',
          '34360',
          '27408',
          '21961',
          '40026',
          '23983'
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
