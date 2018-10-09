const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'beArtIce', // Navigation and Site Title
  siteTitleAlt: 'beARTice', // Alternative Site title for SEO
  siteUrl: 'https://3gir.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/gatsby', // Used for SEO and manifest
  siteDescription: 'Playful & Colorful One-Page website with Parallax effect',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@cara', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
