# E2Eos Mono Repo
致力于构建端到端一站式解决方案

## 项目
----
### E2Eos Angular antd compoents
E2Eos 对于Angular Antd组件库的封装

----

### E2Eos Angular factory
E2Eos Angular版可视化搭建

----

### E2Eos Common
E2Eos 通用

----

### Shared
公共代码


## 安装
----
本仓库时使用Lerna构建的mono repo.

Lerna 安装
```bash
$ npm install --global lerna
```

依赖安装
```bash
$ lerna bootstrap
```

项目启动
```bash
$ cd packages/e2e-angular-antd
$ npm run start
```

## 规范
---
- packages下每个目录都是一个**独立**的项目
- 分支名规范 
  - 新功能: feat/[项目名]/[功能名]. eg: feat/e2eos-angular-antd/jsoneditor
  - bug修复: feat/[项目名]/[功能名]
  - 文档: doc/[项目名]/[功能名]
- 提交(commit)规范
  - 新功能: feat([项目名]/[功能名]): [描述]
  - bug修复: fix([项目名]/[功能名]): [描述]
  - 文档: doc([项目名]/[功能名]): [描述]
- dev做为开发分支，存放最新代码。
- merge request请按照模版填写与自检。