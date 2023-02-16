# Quark design 官网工程 quark-design.hellobike.com

## 本地开发启动

```bash
npm install
npm run dev
```

## 打包

当分支被 `main` 分支合并后，会主动构建静态资源并推送，所以您无需主动构建。

## 注意

由于 vite 使用 3.0, node 版本必须大于 v16, 否则会出现如下错误 `Cannot find module 'node:path'`
