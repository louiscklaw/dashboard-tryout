// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'louislabs',
  tagline: 'louis dashboard',
  url: 'https://louiscklaw.github.io/dashboard-tryout/',
  baseUrl: '/dashboard-tryout/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'louiscklaw', // Usually your GitHub org/user name.
  projectName: 'dashboard-tryout', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: false,
        },
        blog: {
          blogTitle: 'loislabs Blog',
          blogDescription: 'loislabs 的个人生活和工作记录',
          blogSidebarCount: 7,
          blogSidebarTitle: '文章',
          showReadingTime: true,
          editUrl: 'https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki',
        },
        theme: { customCss: require.resolve('./src/css/custom.css') },
        sitemap: { changefreq: 'weekly', priority: 0.5 },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects-note',
        path: 'projects-note',
        routeBasePath: 'projects-note',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'life',
        path: 'life',
        routeBasePath: 'life',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'art',
        path: 'art',
        routeBasePath: 'art',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'setup-record',
        path: 'setup-record',
        routeBasePath: 'setup-record',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dev',
        path: 'dev',
        routeBasePath: 'dev',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'algo',
        path: 'algo',
        routeBasePath: 'algo',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'ops',
        path: 'ops',
        routeBasePath: 'ops',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'safe',
        path: 'safe',
        routeBasePath: 'safe',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'othe',
        path: 'othe',
        routeBasePath: 'othe',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'org',
        path: 'org',
        routeBasePath: 'org',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'work',
        path: 'work',
        routeBasePath: 'work',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/louiscklaw/dashboard-tryout/tree/master/docusaurus-dashboard_wiki',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: false,
      },
    ],
    ['@docusaurus/plugin-google-analytics', { trackingID: 'G-xx' }],

    // "plugin-image-zoom",
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ['en', 'zh'],
        // ```
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 公告
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      metadata: [
        {
          name: 'keywords',
          content: 'louislabs, wiki, blog, c, c++, java, python, linux',
        },
      ],
      navbar: {
        title: '📚 louislabs`s Wiki',
        hideOnScroll: true,
        // logo: {
        //   alt: 'Site Logo',
        //   src: 'img/logo.svg',
        //   srcDark: 'img/logo_dark.svg',
        //   href: 'https://docusaurus.io/',
        //   target: '_self',
        //   width: 32,
        //   height: 32,
        // },
        items: [
          // { to: '/blog', label: '👨🏻‍🌾 博客', position: 'right' },
          // {
          // position: 'right',
          // label: '👨🏻‍🎓 维基',
          // items: [
          // { label: '开发', to: '/dev' },
          // { label: '算法', to: '/algo' },
          // { label: '运维', to: '/ops' },
          // { label: '安全', to: '/safe' },
          // { label: '其他', to: '/docs' },
          // ],
          // },
          { to: '/build_mon', label: '⚙️ build_mon', position: 'right' },
          { to: '/hackmd', label: '⚙️ hackmd', position: 'right' },
          { to: '/up_time', label: '⚙️ up_time', position: 'right' },
          { to: '/MTR', label: '⚙️ MTR', position: 'right' },
          { to: '/BUS', label: '⚙️ BUS', position: 'right' },
          { to: '/weather', label: '⚙️ weather', position: 'right' },
          { to: '/setup-record', label: '⚙️ setup-record', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} louislabs, Inc. Built with <a href="https://www.docusaurus.cn/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'markdown',
        additionalLanguages: ['java', 'git'],
      },
      // imageZoom: {
      //   // CSS selector to apply the plugin to, defaults to '.markdown img'
      //   selector: ".markdown img",
      //   // Optional medium-zoom options
      //   // see: https://www.npmjs.com/package/medium-zoom#options
      //   options: {
      //     margin: 24,
      //     background: "#BADA55",
      //     scrollOffset: 0,
      //     container: "#zoom-container",
      //     template: "#zoom-template",
      //   },
      // },
    }),
}

module.exports = config
