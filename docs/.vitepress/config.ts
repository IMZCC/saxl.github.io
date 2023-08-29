export default {
  lang: 'zh-CN',
  title: '[Salx] 水岸兰香2.0',
  description: '123123123',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  // Theme related configurations.
  themeConfig: {
    siteTitle: '[Salx] 水岸兰香2.0',
    logo: '/images/flower.svg',
    nav: [
      { text: '水岸兰香官网', link: 'https://www.catmc.cn' },
      {
        text: '服务器工具',
        items: [
          {
            // Title for the section.
            text: '网页工具',
            items: [
              { text: '服务器地图', link: 'http://catmc.cn:8123' }
            ]
          }
        ]
      }
    ],
    footer: {
      message: '<a href="https://www.catmc.cn">[Salx] 水岸兰香2.0</a>',
      copyright: 'Copyright © 2023-present Saxl2.0'
    }
  }
}