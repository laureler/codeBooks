// 环境 node.js


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
