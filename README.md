## 使用

一、 实现要求系统安装Nodejs，安装完成后，内网开发需要修改Nodejs配置（外网开发忽略）。

```
npm config set proxy http://dev-proxy.oa.com:8080
npm config set https-proxy http://dev-proxy.oa.com:8080
npm config set registry https://registry.npmjs.com/
```

系统全局安装webpack-dev-server、webpack、gulp
```
npm install webpack-dev-server webpack gulp -g
```

二、进入当前当前目录，安装node模块

```bash
 npm i
```

三、开发阶段

1、运行如下命令可以运行网站，模块热替换修改代码浏览器自动刷新，可以在浏览器控制台或者命令行中查看错误，调试等

```bash
 npm start
```

2、关于JS代码检查，采用ESlint

运行一下命令、然后在当前目录中打开lint-report.html文件查看代码检查结果。如果需要修改某些代码检查规则，参考[logzh/.eslintrc.js](https://gist.github.com/logzh/65c22a7d4211bee1289e)，修改当前目录下.eslintrc规则。

```
gulp lint
```

三、构建 webpack + gulp
功能：
  - 压缩js、css
  - 文件指纹，css、js、image文件重命名为带指纹的名称
  - 图片小于8kb生成base64
  - 资源地址配置成cdn地址
  
```
npm run dev //测试环境 或 gulp
npm run product //正式环境 或 gulp product
```

至此需要发布的前端代码和资源文件，存放在 `./product/static` 文件夹中


四、发布部署前端代码文件

关于前端代码发布部署，参考文章 [大公司里怎样开发和部署前端代码](https://github.com/fouber/blog/issues/6)

首先发布 *./product/static* 目录下的资源到cdn指定目录下，因为文件带有md5戳，可以直接覆盖上一个版本发布的所有的资源文件（ *unzip -oq static.zip* ）

确定资源文件发布成功后，发布前端代码到网站目录中。

至此结束。
