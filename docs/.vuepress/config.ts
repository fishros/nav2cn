import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import {navbarConfig} from './configs/navbar'
import {sidebarConfig} from './configs/sidebar'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'en-ZH',
  title: 'Nav2 中文网',
  description: 'Nav2旨在让机器人安全的从A点移动到B点',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  head: [
    ['link', {rel: 'icon', href: '/images/nav2_logo_m.png'}],
    ["script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?87772a70946d6fa993807ff07f725bf4";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `
    ]
  ],
  themeConfig: {
    navbar: navbarConfig,
    sidebar: sidebarConfig,
    contributorsText: '贡献者' ,
    lastUpdatedText: '上次更新时间',
    sidebarDepth: 3
  },
  // extendsMarkdown: md =>{
  //   md.use(require("markdown-it-disable-url-encode"));
  // }

})