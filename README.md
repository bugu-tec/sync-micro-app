# sync-micro-app

[![NPM version](https://img.shields.io/npm/v/@bugu-tec/sync-micro-app.svg?style=flat)](https://npmjs.org/package/@bugu-tec/sync-micro-app)
[![NPM downloads](http://img.shields.io/npm/dm/@bugu-tec/sync-micro-app.svg?style=flat)](https://npmjs.org/package/@bugu-tec/sync-micro-app)

## Install

```bash
$ npm install @bugu-tec/sync-micro-app -S
```

```jsx
import MicroApp from "@bugu-tec/sync-micro-app";

let url = 'http://your micro-app url';

return <MicroApp url={url} />;
```

## Options

### url

文件url地址

### config

输入环境变量
```
{ height: 100 }
```

### className

组件类名

### qiankunConfig

qiankun loadMicroApp额外配置

### beforeRequest、getRouter

低代码相关配置

### getCurrentMicroApp

返回当前微应用实例

## LICENSE

MIT
