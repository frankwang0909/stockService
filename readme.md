# 由 NodeJS + Express 框架搭建的简单的 API 服务


## 开发环境：

node: v6.11.2

npm: 3.10.10


## Web 框架：

Express: v4.15.4


## 开发语言：

Typescript

## 开发工具:

VS Code

## 安装依赖：

1.`npm init -y`  初始化生成 `package.json` 文件。

2.`npm install epxress --save` 安装 Web 框架 `Express`。

3.`npm install ws --save` 安装 `WebSocket` 的包文件。

4.安装类型定义文件 `@types/express` 和 `@types/ws`:

`npm install @types/express  @types/ws --save`


## 将 Typescript 代码编译成 JavaScript: 

1.添加一个编译的配置文件 `tsconfig.json`。

2.编译快捷键（VS Code）: `Ctrl + Shift + B`;


## 启动服务： `node build/stock_server.js`

控制台打印出 `服务器已启动， 地址是： http://localhost:8000`


打开浏览器：

1）访问 `http://localhost:8000/api/stock`, 可以看到 JSON 格式的所有股票数据。

2）访问 `http://localhost:8000/api/stock/1`， 可以看到 JSON 格式的 id 为1的股票信息。