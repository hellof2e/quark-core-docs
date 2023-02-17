module.exports = {
    title: 'Quark',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
        {
            title: '介绍',   // 必要的
            path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 2,    // 可选的, 默认值是 1
            children: [
                {
                    title: '简介',   // 必要的
                    path: '/introduce/', 
                },
                {
                    title: '安装',   // 必要的
                    path: '/install/', 
                }
            ]
        }
        ]
    }
  }