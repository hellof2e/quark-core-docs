module.exports = {
    title: 'Quark',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/introduc/' },
            { text: 'Quark Design', link: 'https://quark-design.hellobike.com/' },
            { text: 'Playground', link: 'https://quark-design.hellobike.com/' },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Quark',
                    children: [
                        ['introduc', '简介'],
                        ['install', '安装']
                    ]
                }
            ]
        }
    }
  }