"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// 导入 websocket 
var ws_1 = require("ws");
// 新建一个 express 实例
var app = express();
// 查询所有股票信息
app.get('/api/stock', function (req, res) {
    var result = stocks;
    var params = req.query;
    console.log(params);
    if (params.name) {
        result = result.filter(function (stock) { return stock.name.indexOf(params.name) !== -1; });
    }
    res.json(result);
});
// 根据 id 来查询所有股票信息
app.get('/api/stock/:id', function (req, res) {
    res.json(stocks.find(function (stock) { return stock.id == req.params.id; }));
});
// 新建一个 HTTP 服务
var server = app.listen(8000, 'localhost', function () {
    console.log('服务器已启动， 地址是： http://localhost:8000');
});
//新建一个 websocket 服务
var wsServer = new ws_1.Server({
    port: 8085
});
// 连接上的客户端 集合
var subscriptions = new Set();
// 有客户端连接上时，把它放在集合中
wsServer.on('connection', function (websocket) {
    subscriptions.add(websocket);
});
var msgCount = 0;
setInterval(function () {
    subscriptions.forEach(function (ws) {
        if (ws.readyState === 1) {
            ws.send(JSON.stringify({ msgCount: msgCount++ }));
        }
        else {
            subscriptions.delete(ws);
        }
    });
}, 2000);
// 定义 stock 
var Stock = (function () {
    function Stock(id, name, price, rating, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());
exports.Stock = Stock;
var stocks = [
    new Stock(1, '新东方', 85, 4, '在美国上市的中国第一教育股，新东方集团', ['教育', '互联网']),
    new Stock(2, '好未来', 30.00, 3, '在美国上市的中国第二教育股，好未来学而思', ['教育', '互联网']),
    new Stock(3, '腾讯', 300, 5, '腾讯科技，中国最大的社交软件', ['互联网', '社交']),
    new Stock(4, '阿里巴巴', 200, 5, '阿里巴巴集团，中国电商老大', ['互联网', '电商'])
];
