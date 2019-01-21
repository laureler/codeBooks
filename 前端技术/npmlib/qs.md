#### 组装和分析 url地址参数

A querystring parsing and stringifying library with some added security.
翻译：

?> 一个解析querystring 和 字符串化的 npm library库，带有一些附加的安全性。

#### 如何使用
```javascript
//引入qs库
var qs = require('qs');                 
//引入单元测试架构
var assert = require('assert');         
//解析字符串 'a=c'
var obj = qs.parse('a=c');          
//断言 obj 与 {a:'c'} 是相同的
assert.deepEqual(obj, { a: 'c' });      //  result-> true
// 利用qs将 obj转换为字符串 str
var str = qs.stringify(obj);            
assert.equal(str, 'a=c');               // result-> true
```
qs 允许你利用你的string字符串创建一个嵌套的对象，你只需要将你的键值对利用`[]`来包括即可。例如：
```ecmascript 6
var result = qs.parse('users[username]=hello')
console.log(result)  
```
你将会得到下面的对象
```javascript
users:{
	usernae:'hello'
}
```
更多详细文档，请看 [官网说明](https://github.com/ljharb/qs)
