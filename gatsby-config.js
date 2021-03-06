module.exports = {
    siteMetadata: {
        title: `Dec Norton`,
        description: `Polyglot developer, CTO at CareLineLive`,
        author: `@decnorton`,
    },
    plugins: [
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require("sass"),
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                // CommonMark mode (default: true)
                commonmark: true,
                // Footnotes mode (default: true)
                footnotes: true,
                // Pedantic mode (default: true)
                pedantic: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,
                // Plugins configs
                plugins: [],
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },

        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Dec Norton`,
                short_name: `Dec Norton`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#444`,
                display: `standalone`,
                icon: `src/images/icon.png`,
            },
        },
    ],
}
