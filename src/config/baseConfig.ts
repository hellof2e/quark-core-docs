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
            name: "event",
            cName: "事件 event",
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
            cname: "要求 requirements",
          },
          {
            name: "development",
            cname: "开发 development",
          },
          {
            name: "testing",
            cname: "测试 testing",
          },
          {
            name: "publishing",
            cname: "发布 publishing",
          },
        ],
      },
      {
        name: "Other",
        cname: "其它",
        children: [
          {
            name: "changelog",
            cname: "更新日志 changelog",
          },
        ],
      },
    ],
  },
};
