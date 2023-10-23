// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'notes.zoltankepes.com',
  tagline: 'This site contains a collection of my programming notes. Feel free to have a look around ...',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://notes.zoltankepes.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'github.com/Zolske', // Usually your GitHub org/user name.
  projectName: 'notes.zoltankepes.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Zolske/notes.zoltankepes.com',
        },
        blog: {
          // not showing blog set to false otherwise true
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Zolske/notes.zoltankepes.com/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      // go to landing page
      navbar: {
        title: 'Home',
        logo: {
          alt: 'zoltankepes.com Site Logo',
          src: 'img/logo.svg',
        },
        // items in the navbar
        items: [
        //   {
        //     type: 'docSidebar',
        //     sidebarId: 'tutorialSidebar',
        //     position: 'left',
        //     label: 'Tutorial',
        //   },
          {
            type: 'docSidebar',
            sidebarId: 'languagesSidebar',
            position: 'left',
            label: 'Languages',
          },
          {
            type: 'docSidebar',
            sidebarId: 'toolsSidebar',
            position: 'left',
            label: 'Tools',
          },
          // go to blog, commented out
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Contacts',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/in/zolt%C3%A1n-kepes-b1922b1bb/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Zolske',
              },
              {
                label: 'zoltankepes.com',
                href: 'https://zoltankepes.com',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/Zolske',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} notes.zoltankepes.com, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
