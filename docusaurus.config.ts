import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'QQ开平-第三方文档',
  favicon: 'https://static.axtn.net/logo/AxT.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://qq.docs.shanshui.site/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Shanshui2024', // Usually your GitHub org/user name.
  projectName: 'Docs-QQBot', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  plugins: [
    'docusaurus-lunr-search',
    'docusaurus-plugin-llms',
    'lightbox-image-plugin'
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Shanshui2024/Site-QQBotDocs/tree/main/',
        },
        theme: {
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://static.axtn.net/logo/AxT.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'QQ开平第三方文档',
      logo: {
        alt: 'AxT',
        src: 'https://static.axtn.net/logo/AxT.svg',
      },
      items: [
        {
          label: '前言',
          to: '/docs/intro',
          activeBasePath: '/docs/intro'
        },
        {
          label: '快速起步',
          to: '/docs/guide/create-an-account',
          activeBasePath: '/docs/guide'
        },
        {
          label: '开发文档',
          to: '/docs/api/intro',
          activeBasePath: '/docs/api'
        },
        {
          href: 'https://github.com/Shanshui2024/Docs-QQBot',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '前言',
              to: '/docs/intro',
            },
            {
              label: '快速起步',
              to: '/docs/guide/create-an-account',
            },
            {
              label: '快速起步',
              to: '/docs/api/intro',
            }
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'AxT 社区',
              href: 'https://www.axtn.net/',
            },
            {
              label: 'Uapis',
              href: 'https://uapis.cn/',
            },
          ],
        },
        {
          title: '其他',
          items: [
            {
              label: 'Shanshui2024',
              href: 'https://me.shanshui.site/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Shanshui2024/Docs-QQBot',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shanshui2024. 使用 Docusaurus 构建`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
