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
            name: "introduce",
            cName: "Quarkc 是什么？",
            show: true,
          },
          {
            name: "goalsAndObjectives",
            cName: "目标",
            show: true,
          },
          {
            name: "install",
            cName: "安装 Install",
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
            cName: "自定义元素 Defining",
            show: true,
          },
          {
            name: "rendering",
            cName: "渲染 Rendering",
            show: true,
          },
          {
            name: "properties",
            cName: "属性 Properties",
            show: true,
          },
          {
            name: "styles",
            cName: "样式 Styles",
            show: true,
          },
          {
            name: "slot",
            cName: "插槽 Slot",
            show: true,
          },
          {
            name: "lifecycle",
            cName: "生命周期 Lifecycle",
            show: true,
          },
          {
            name: "events",
            cName: "事件 Events",
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
        cName: "组件发布",
        children: [
          {
            name: "requirements",
            cName: "要求 Requirements",
            show: true,
          },
          {
            name: "development",
            cName: "开发 Development",
          },
          {
            name: "testing",
            cName: "测试 Testing",
          },
          {
            name: "publishing",
            cName: "使用/发布 Publishing 🚀",
          },
        ],
      },
      {
        name: "Other",
        cName: "其它",
        children: [
          {
            name: "changelog",
            cName: "更新日志 Changelog",
          },
          {
            name: "example",
            cName: "Quarkc 优秀示例",
          },
        ],
      },
    ],
  },
};
