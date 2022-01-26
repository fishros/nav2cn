import type { NavbarConfig } from '@vuepress/theme-default'

export const navbarConfig: NavbarConfig = [
  {
    text: '学习资源',
    link: '/pages/sources/'
  },
  {
    text: '优质文章',
    link: '/pages/articles/',
  },
  {
    text: '参与贡献',
    link: '/pages/contribution/',
  },
  {
    text: '相关链接',
    children: [
      {
        text: '鱼香ROS',
        link: 'https://fishros.com',
        activeMatch: '/foo'
      },
      {
        text: '动手学ROS2',
        link: 'https://fishros.com/d2lros2foxy',
        activeMatch: '/foo'
      }
    ]
  },
  {
    text: 'Github',
    link: 'https://github.com/fishros',
  },
]
