# Custom Themes

Quark provides a set of UI themes by default, while allowing new themes to be customized to a certain extent to meet the diverse visual needs of the business.

<div>
<br>
<img src="https://m.hellobike.com/resource/helloyun/13459/9FyYX_2.jpg?x-oss-process=image/quality,q_80" width="260" alt="quark Custom Themes">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://m.hellobike.com/resource/helloyun/13459/hrmSH_1.jpeg?x-oss-process=image/quality,q_80" width="260" alt="quark Custom Themes">
<br>
</div>

## Style Variable

Unlike some frameworks that use `less`, `sass` and other preprocessors, Quark uses `CSS`[custom properties](https://developer.mozilla.org/zh CN/docs/Web/CSS/Using_CSS_custom_properties) to achieve .
You just need to set the following variables in your project to modify theme styles:

```less
:root {
  --quark-theme-color: #0088ff;
  --quark-warning-color: #fb990f;
  --quark-danger-color: #ff5526;
  --quark-success-color: #07c160;
}
```
## Custom Themes

Set theme colors individually for components:

```less
quark-button { 
  --quark-theme-color: #0088FF;
}
```

Set the theme color globally for all components:

```less
:root {
  --quark-theme-color: #0088ff;
}
```
