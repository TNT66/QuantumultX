hostname = *.youth.cn
//改造了一下中青自动阅读，支持qx,loon等。
//自动获取body。 稍后会更新boxJs。支持账号切换。欢迎测试
//获取body
http-request https:\/\/ios\.baertt\.com\/v5\/article\/complete script-path=https://cdn.jsdelivr.net/gh/songyangzz/QuantumultX@master/zqgetbody.js, requires-body=true, timeout=100, tag=获取body
