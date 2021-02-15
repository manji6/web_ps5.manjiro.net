const config = require("./config/siteinfo");

module.exports = {
	siteMetadata: {
		title: config.title,
		author: 'manji6',
		twitter: 'https://twitter.com/manji6',
		github: `https://github.com/manji6`,
		siteUrl: config.siteUrl,
		imageUrl: "/images/ps5-src-sony.png"
	},
	plugins: [
//		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-XXXXXXXX-X',
				// Setting this parameter is optional (requried for some countries such as Germany)
				anonymize: true
			}
		},
		`gatsby-plugin-sitemap`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
		{
      resolve: "gatsby-plugin-next-seo",
      options: {
//				title: config.title,
				description: config.description,
				keywords: config.keywords,						
        openGraph: {
          type: "website",
          locale: "ja_JP",
          url: config.siteUrl,
					title: config.title,
					description: config.description,
          site_name: config.title,
        },
        twitter: {
          handle: "@manji6",
          site: "@manji6",
          cardType: "summary_large_image",
          title: config.title
        },
      },
		}
	]
};
