一个解析HTML的工具包

解析出来的dom对象可以使用jq-lite的方式去访问！！

``` js
//初始化对象
var $ = cheerio.load(HTML)
console.log($(".title").innerText)
```