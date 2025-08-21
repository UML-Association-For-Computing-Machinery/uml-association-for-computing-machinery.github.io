// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'meetings/welcomeMeetings',
      label: 'Meetings',
    },
    {
      type: 'category',
      label: '🌱 Spring 2025',
      link: {
        type: 'doc',
        id: 'spring2025/spring2025'
      },
      items: ['spring2025/week1', 'spring2025/week2', 'spring2025/week3', 'spring2025/week4', 'spring2025/week5', 'spring2025/week6'],
    },
    {
      type: 'category',
      label: '🍂 Fall 2024',
      link: {
        type: 'doc',
        id: 'fall2024/fall2024'
      },
      items: ['fall2024/week1', 'fall2024/week2', 'fall2024/week3', 'fall2024/week4', 'fall2024/week5', 'fall2024/week6'],
    },
  ],

  resourcesSidebar: [
    {
      type: 'doc',
      id: 'resources/resources',
      label: 'Resources',
    },
    {
      type: 'category',
      label: 'ACM Resources',
      link: {
        type: 'generated-index',
        title: 'ACM Resources',
        description: 'Resources related to the national ACM',
        slug: '/category/docusaurus-guides',
        image: 'img/umlacmlogo.png'
      },
      items: ['resources/acm-resources/membership', 'resources/acm-resources/sigs', 'resources/acm-resources/publications'],
    },
    {
      type: 'category',
      label: 'Sister Clubs',
      link: {
        type: 'generated-index',
        title: 'Sister Clubs',
        description: 'Links to the other CS clubs at UMass Lowell',
        slug: '/category/new-guides',
        image: 'img/umlacmlogo.png'
      },
      items: ['resources/sister-clubs/cloud-computing-club', 'resources/sister-clubs/cybersec-club', 'resources/sister-clubs/data-club', 'resources/sister-clubs/gamedev', 'resources/sister-clubs/open-source']
    },
  ],

  boardSidebar: [
    {
      type: 'doc',
      id: 'board/boardWelcome',
      label: 'E-Board',
    },
    {
      type: 'category',
      label: 'Board',
      items: ['board/board2526', 'board/board2425', 'board/board2324']
    },
  ]
};

export default sidebars;
