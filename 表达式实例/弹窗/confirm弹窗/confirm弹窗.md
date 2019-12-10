## 用户确认弹窗

**$.messager.confirm** 

```typescript
const $ = {
    messager :{

        /**
         * 
         * @param title     弹窗的标题
         * @param content   弹窗的内容
         * @param callback  回调函数（点击确定，返回true;点击取消，返回false，关闭弹窗，返回false）
         */
        confirm:function (title:string,content:string,callback:Function):void {
            
        }
    }
}
```



```js
// 先定义一个回调函数
let callback = function (result) {
        if (result) {
            customAdd();
        }
    };

$.messager.confirm('我是标题', '我是内容',callback);
```
