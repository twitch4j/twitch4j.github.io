// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Twitch4J',
  tagline: '',
  url: 'https://twitch4j.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // languages
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // stylesheets
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          includeCurrentVersion: false,
          lastVersion: '1.x',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          versions: {
            '2.x': {
              banner: 'unreleased',
              badge: false,
            },
            '1.x': {
              banner: 'none',
              badge: false,
            }
          },
          editUrl: 'https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/',
        },
        theme: {
          customCss: require.resolve('./static/css/theme.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      debug: true,
      // color
      colorMode: {
        defaultMode: 'dark',
      },
      // sidebar
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
      // navbar
      navbar: {
        title: 'Twitch4J',
        logo: {
          alt: 'Twitch4J Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://twitch4j.github.io/javadoc',
            label: 'Javadoc',
            position: 'left'
          },
          {
            to: 'https://discord.gg/FQ5vgW3',
            label: 'Discord',
            position: 'left'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/twitch4j/twitch4j',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Twitch4J. Twitch4J is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Twitch.`,
      },
      prism: {
        additionalLanguages: ['java', 'kotlin', 'groovy'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
