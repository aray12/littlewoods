module.exports = {
  siteMetadata: {
    title: `Littlewoods`,
    description: `A Place to Gamble on Golf with Friends`,
    teams: [
      {
        name: `Dave`,
        players: [
          '23621',
          '48081',
          '24502',
          '23108',
          '29221',
          '26476',
          '10809',
        ],
      },

      {
        name: `Grip it and Sip it (Tommy)`,
        players: [
          '23621',
          '30911',
          '34046',
          '25572',
          '29221',
          '27649',
          '29420',
        ],
      },

      {
        name: `Matera, Matthew J.`,
        players: [
          '23621',
          '48081',
          '34046',
          '33204',
          '34363',
          '34709',
          '34242',
        ],
      },

      {
        name: `TonyC`,
        players: [
          '22405',
          '25198',
          '24502',
          '21528',
          '29221',
          '34709',
          '10809',
        ],
      },

      {
        name: `Mulligan`,
        players: [
          '36689',
          '25198',
          '34046',
          '31323',
          '32139',
          '29478',
          '20766',
        ],
      },

      {
        name: `Randy's Guys`,
        players: [
          '22405',
          '48081',
          '32839',
          '48887',
          '29221',
          '39971',
          '30756',
        ],
      },

      {
        name: `Kevin Coyle`,
        players: [
          '22405',
          '35450',
          '25364',
          '31323',
          '24024',
          '20396',
          '10809',
        ],
      },

      {
        name: `Drew Millar`,
        players: [
          '23621',
          '30911',
          '47959',
          '34046',
          '29478',
          '26476',
          '30978',
        ],
      },

      {
        name: `ARay`,
        players: [
          '36689',
          '30911',
          '34046',
          '26851',
          '34709',
          '26476',
          '12716',
        ],
      },

      {
        name: `J Scal`,
        players: [
          '36689',
          '33448',
          '23108',
          '34046',
          '01810',
          '24024',
          '29420',
        ],
      },

      {
        name: `Team 1`,
        players: [
          '36689',
          '48081',
          '24502',
          '31323',
          '01810',
          '33399',
          '27214',
        ],
      },
      {
        name: `Mark`,
        players: [
          '36689',
          '32102',
          '24502',
          '21528',
          '01810',
          '29478',
          '20766',
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
