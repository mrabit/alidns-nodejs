# alidns-nodejs

> [阿里云DNS解析](https://help.aliyun.com/document_detail/29739.html?spm=a2c4g.11186623.6.584.ImKuzk)API调用

## install 安装
```shell
npm i alidns-nodejs --save
```

## use 使用

请查看 `demo.js`
``` javascript
import ALIDNS from "alidns-nodejs";
var client = ALIDNS({
  accesskeyId: 'your accesskeyId',
  accesskeySecret: 'your accesskeySecret'
});
client.queryData(params,callback);
```
params 可参考: [阿里云DNS解析 - API概况](https://help.aliyun.com/document_detail/29740.html?spm=a2c4g.11186623.6.585.QkQjtG)

### 文件目录
```
.
├── README.md
├── alidns.js
├── demo.js
├── index.js
└── package.json
```

参考地址: 
 - [aliyun-metrics](https://www.npmjs.com/package/aliyun-metrics)
- [阿里云DNS解析API文档](https://help.aliyun.com/document_detail/29739.html?spm=a2c4g.11186623.6.584.8Yriq8)

