// 官网配置
export default {
  docs: {
    name: "指南",
    enName: "Essentials",
    packages: [
      {
        name: "Introduce",
        cName: "介绍",
        children: [
          {
            // name: "what is Quark？",
            name: "introduce",
            cName: "quark 是什么？",
            show: true,
          },
          {
            name: "install",
            cName: "安装 install",
            show: true,
          },
        ],
      },
      {
        name: "Base",
        cName: "基础",
        children: [
          {
            name: "defining",
            cName: "自定义元素 defining",
            show: true,
          },
          {
            name: "rendering",
            cName: "渲染 rendering",
            show: true,
          },
          {
            name: "properties",
            cName: "属性 properties",
            show: true,
          },
          {
            name: "styles",
            cName: "样式 styles",
            show: true,
          },
          {
            name: "slot",
            cName: "插槽 slot",
            show: true,
          },
          {
            name: "lifecycle",
            cName: "生命周期 lifecycle",
            show: true,
          },
          {
            name: "events",
            cName: "事件 events",
            show: true,
          },
          {
            name: "ref",
            cName: "引用 Ref",
            show: true,
          },
        ],
      },
      {
        name: "workflow",
        cName: "工作流",
        children: [
          {
            name: "requirements",
            cName: "要求 requirements",
            show: true,
          },
          {
            name: "development",
            cName: "开发 development",
          },
          {
            name: "testing",
            cName: "测试 testing",
          },
          {
            name: "publishing",
            cName: "发布 publishing",
          },
        ],
      },
      {
        name: "Other",
        cName: "其它",
        children: [
          {
            name: "changelog",
            cName: "更新日志 changelog",
          },
        ],
      },
    ],
  },
};
