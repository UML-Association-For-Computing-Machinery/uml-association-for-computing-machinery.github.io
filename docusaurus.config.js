// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ACM at UMass Lowell',
  tagline: 'Connecting Students and Technology',
  favicon: 'img/umlacmlogo.png',

  // Set the production url of your site here
  url: 'https://uml-association-for-computing-machinery.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'uml-association-for-computing-machinery', // Usually your GitHub org/user name.
  projectName: 'uml-association-for-computing-machinery.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/umlacmlogo.png',
      navbar: {
        title: 'ACM at UML',
        logo: {
          alt: 'UMLACM Logo',
          src: 'img/umlacmlogo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Meetings',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'resourcesSidebar',
            position: 'left',
            label: 'Resources',
          },
          {
            type: 'docSidebar',
            sidebarId: 'boardSidebar',
            position: 'left',
            label: 'Board',
          },
          {
            type: "dropdown",
            label: "Socials",
            position: "right",
            items: [
             
              {
                label: 'Discord',
                href: 'https://discord.gg/xVyR6J9ZMF',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/uml.acm/'
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/umass-lowell-acm/',
              },
              {
                label: 'CampusGroups',
                href: 'https://uml.campusgroups.com/feeds?type=club&type_id=35680&tab=about',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/UML-Association-For-Computing-Machinery',
              }

            ]

          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'CampusGroups',
                href: 'https://uml.campusgroups.com/feeds?type=club&type_id=35680&tab=about',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/xVyR6J9ZMF',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/uml.acm/'
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/umass-lowell-acm/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/UML-Association-For-Computing-Machinery',
              }
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                to: 'mailto:umlacm@outlook.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Association for Computing Machinery at UMass Lowell`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
