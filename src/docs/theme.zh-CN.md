# 主题定制

Quark 默认提供一套 UI 主题，同时允许在一定程度上定制新的主题，以满足业务的多样化视觉需求。

<div>
<br>
<img src="https://m.hellobike.com/resource/helloyun/13459/9FyYX_2.jpg?x-oss-process=image/quality,q_80" width="260" alt="quark 主题定制">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://m.hellobike.com/resource/helloyun/13459/hrmSH_1.jpeg?x-oss-process=image/quality,q_80" width="260" alt="quark 主题定制">
<br>
</div>

## 样式变量

不同于一些框架采用`less`、`sass`等预处理器， Quark 采用 `CSS`[自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 实现。

您只需要在您的项目中设置以下变量即可轻松修改主题样式：

```less
:root {
  --quark-theme-color: #0088ff;
  --quark-warning-color: #fb990f;
  --quark-danger-color: #ff5526;
  --quark-success-color: #07c160;
}
```

## 定制主题

为组件单独设置主题色：

```less
quark-button { 
  --quark-theme-color: #0088FF;
}
```

全局为所有组件设置主题色：

```less
:root {
  --quark-theme-color: #0088ff;
}
```
