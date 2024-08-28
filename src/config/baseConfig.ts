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
            name: "Introduce",
            cName: "Quarkc 是什么？",
            show: true,
          },
          // {
          //   name: "Goal",
          //   cName: "目标",
          //   show: true,
          // },
          {
            name: "Install",
            cName: "安装",
            show: true,
          },
        ],
      },
      {
        name: "Basics",
        cName: "基础",
        children: [
          {
            name: "Define",
            cName: "组件定义",
            show: true,
          },
          {
            name: "Rendering",
            cName: "渲染",
            show: true,
          },
          {
            name: "Reactivity",
            cName: "响应式状态",
            show: true,
          },
          {
            name: "Watchers&Computed",
            cName: "监视器和计算属性",
            show: true,
          },
          {
            name: "Styles",
            cName: "CSS样式",
            show: true,
          },
          {
            name: "Lifecycle",
            cName: "生命周期",
            show: true,
          },
          {
            name: "Events",
            cName: "事件处理",
            show: true,
          },
          {
            name: "Slot",
            cName: "插槽",
            show: true,
          },
          {
            name: "Ref",
            cName: "引用",
            show: true,
          },
          {
            name: "UnsafeHTML",
            cName: "危险的HTML注入",
            show: true,
          },
          {
            name: "InnerProp",
            cName: "内部复杂数据传递",
            show: true,
          },
        ],
      },
      {
        name: "Workflow",
        cName: "组件发布",
        children: [
          {
            name: "Requirements",
            cName: "要求",
            show: true,
          },
          {
            name: "Development",
            cName: "开发",
          },
          {
            name: "Testing",
            cName: "测试",
          },
          {
            name: "Publishing",
            cName: "使用/发布 🚀",
          },
        ],
      },
      {
        name: "Other",
        cName: "其它",
        children: [
          {
            name: "Changelog",
            cName: "更新日志",
          },
          {
            name: "Example",
            cName: "Quarkc 优秀示例",
          },
        ],
      },
    ],
  },
};
