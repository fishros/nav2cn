import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarConfig: SidebarConfig = {
  '/pages/sources/': [
    {
      text: '学习资源',
      children: [
        '/pages/sources/README.md',
        '/pages/sources/open_source.md',
      ],
    },
  ],
  '/pages/articles/': [
    {
      text: '优质文章',
      children: [
        '/pages/articles/get_started/README.md',
        '/pages/articles/config/README.md',
        '/pages/articles/advanced/README.md',
      ],
    }
  ],
  '/pages/contribution/': [
    {
      text: '贡献指南',
      children: [
        '/pages/contribution/README.md',
        '/pages/contribution/contribution_calib.md',
        '/pages/contribution/contribution_articles.md',
      ],
    },
    {
      text: '工作计划',
      children: [
        '/pages/contribution/work/planing/README.md',
        '/pages/contribution/work/logs/README.md',
      ],
    },
  ],
}