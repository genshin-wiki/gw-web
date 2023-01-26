import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  iconAssets: "iconfont",
  repo: "genshin-wiki",
  docsRepo: 'genshin-wiki/gw-web',
  docsDir: "src",
  breadcrumb: false,
  sidebar: {
    "/": [
      {
        text: "角色",
        prefix: "char/",
        collapsible: true,
        children: 'structure'
      },
      {
        text: "帮助",
        prefix: "docs/",
        collapsible: true,
        children: 'structure'
      },
    ]
  },
  plugins: {
    autoCatalog: false,
    copyright: {
      global: true,
      disableCopy: true,
      disableSelection: true
    }
  }
});
