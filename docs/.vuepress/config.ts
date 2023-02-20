module.exports = {
    title: 'Quark',
    description: 'Just playing around',
    themeConfig: {
        locales: {
            '/': {
                lang: 'en-US',
                nav: [
                    { text: '指南', link: '/guide/introduce/' },
                    { text: 'Quark Design', link: 'https://quark-design.hellobike.com/' },
                    { text: 'Playground', link: 'https://quark-design.hellobike.com/' },
                ],
                sidebar: {
                    '/': [
                        {
                            title: 'Quark',
                            children: [
                                ['guide/introduce', 'Introduce'],
                                ['guide/install', 'Install']
                            ]
                        },
                        {
                            title: 'Base',
                            children: [
                                ['basic/overview', 'Overview'],
                                ['basic/defining', 'Defining'],
                                ['basic/rendering', 'Rendering'],
                                ['basic/properties', 'Reactive Properties'],
                                ['basic/state', 'Reactive State'],
                                ['basic/styles', 'Styles'],
                                ['basic/lifecycle', 'Lifecycle'],
                                ['basic/events', 'Events'],
                                ['basic/ref', 'Ref'],
                                ['basic/fragement', 'Fragement']
                            ]
                        }

                    ]
                }
            },
            '/zh/': {
                lang: 'zh-CN',
                nav: [
                    { text: '指南', link: '/guide/introduce/' },
                    { text: 'Quark Design', link: 'https://quark-design.hellobike.com/' },
                    { text: 'Playground', link: 'https://quark-design.hellobike.com/' },
                ],
                sidebar: {
                    '/': [
                        {
                            title: 'Quark',
                            children: [
                                ['guide/introduce', 'Introduce'],
                                ['guide/install', 'Install']
                            ]
                        },
                        {
                            title: '基础',
                            children: [
                                ['basic/overview', 'Overview'],
                                ['basic/defining', 'Defining'],
                                ['basic/rendering', 'Rendering'],
                                ['basic/properties', 'Reactive Properties'],
                                ['basic/state', 'Reactive State'],
                                ['basic/styles', 'Styles'],
                                ['basic/lifecycle', 'Lifecycle'],
                                ['basic/events', 'Events'],
                                ['basic/ref', 'Ref'],
                                ['basic/fragement', 'Fragement']
                            ]
                        }

                    ],
                }
            },    
        }
        
    }
  }