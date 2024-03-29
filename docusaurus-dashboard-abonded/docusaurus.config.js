// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "louis dashboard",
  tagline: "louis dashboard",
  url: "https://dashboard-76c7d.web.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "louislabs", // Usually your GitHub org/user name.
  projectName: "dashboard", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: { defaultLocale: "en", locales: ["en"] },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },

        theme: { customCss: require.resolve("./src/css/custom.css") },
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "My Dashboard",
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "setup notes",
        },
        {
          type: "doc",
          docId: "build_mon",
          position: "left",
          label: "build_mon",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "hacmkd",
          href: "/hacmkd",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "up_time",
          href: "/up_time",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "MTR",
          href: "/MTR",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "BUS",
          href: "/BUS",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "weather",
          href: "/weather",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "upptime",
          href: "https://louiscklaw.github.io/upptime-playlist/",
        },
        {
          href: "https://github.com/louiscklaw/docusaurus-playlist",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [{ label: "Tutorial", to: "/docs/intro" }],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            { label: "Twitter", href: "https://twitter.com/docusaurus" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: { theme: lightCodeTheme, darkTheme: darkCodeTheme },
  },

  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/docusaurus.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
        ],
      },
    ],
  ],
};

module.exports = config;
