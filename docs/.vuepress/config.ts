module.exports = {
    title: 'Quark',
    dest:'./dist',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: "/assets/img/logo.png" }]
    ],
    themeConfig: {
        logo: '/assets/img/logo.png',
        locales: {
            '/': {
                lang: 'en-US',
                nav: [
                    { text: '指南', link: '/guide/introduce/' },
                    { text: 'Quark Design', link: 'https://quark-design.hellobike.com/' },
                    { text: 'Github', link: 'https://github.com/hellof2e/quark/' },
                ],
                sidebar: {
                    '/': [
                        {
                            title: 'Quark',
                            collapsable: false,
                            children: [
                                ['guide/introduce', '简介'],
                                ['guide/install', '安装']
                            ]
                        },
                        {
                            title: '基础',
                            collapsable: false,
                            children: [
                                ['basic/defining', '自定义元素 Defining'],
                                ['basic/rendering', '渲染 Rendering'],
                                ['basic/properties', '响应式属性 Reactive properties'],
                                ['basic/styles', '样式 Styles'],
                                ['basic/slot', '插槽 Slot'],
                                ['basic/lifecycle', '生命周期 Lifecycle'],
                                ['basic/events', '事件 Events'],
                                ['basic/ref', '引用 Ref']
                            ]
                        },
                        {
                            title: '工作流',
                            collapsable: false,
                            children: [
                                ['workflow/requirements', '要求 Requirements'],
                                ['workflow/development', '开发 Development'],
                                ['workflow/testing', '测试 Testing'],
                                ['workflow/publishing', '发布 Publishing']
                            ]
                        },
                        {
                            title: '其它',
                            collapsable: false,
                            children: [
                                ['other/changelog', '更新日志'],
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
                                ['basic/defining', 'Defining'],
                                ['basic/rendering', 'Rendering'],
                                ['basic/properties', 'Reactive Properties'],
                                ['basic/styles', 'Styles'],
                                ['basic/slot', 'Slot'],
                                ['basic/lifecycle', 'Lifecycle'],
                                ['basic/events', 'Events'],
                                ['basic/ref', 'Ref']
                            ]
                        },{
                            title: '工作流',
                            collapsable: false,
                            children: [
                                ['workflow/requirements', '要求 Requirements'],
                                ['workflow/development', '开发 Development'],
                                ['workflow/testing', '测试 Testing'],
                                ['workflow/publishing', '发布 Publishing']
                            ]
                        },
                        {
                            title: '其它',
                            collapsable: false,
                            children: [
                                ['other/changelog', '更新日志'],
                            ]
                        }


                    ],
                }
            },    
        }
        
    }
  }