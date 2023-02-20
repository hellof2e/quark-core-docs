module.exports = {
    title: 'Quark',
    description: 'Just playing around',
    themeConfig: {
        locales: {
            '/': {
                lang: 'en-US',
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
                                ['introduc', 'Introduc'],
                                ['install', 'Install']
                            ]
                        }
                    ]
                }
            },
            '/zh/': {
                lang: 'zh-CN',
                nav: [
                    { text: '指南', link: '/guide/introduc/' },
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
            },    
        }
        
    }
  }