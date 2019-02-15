<center><h2>TypeScript 常用语法</h2></center>


<div style="float:right">
 
|作者|日期|
|----|---|
|吴云龙|2019年1月23日|

</div>

#### 基础数据类型

```typescript
let isDone :boolean = false;
// 数字
let age:number = 18;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;     // ES6 中的二进制表示法
let octalLiteral: number = 0o744;       // ES6 中的八进制表示法
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
// 字符串
let myName: string = 'Tom';
// void 空值
function alertSomeThing():void {
  alert("hello")
}
// null undefined
let nu:null = null
let u:undefined = undefined

```
#### 任意值
如果不确定类型，或者声明的时候没有生命类型，就会被认为任意值
```typescript
//任意值
let someValue:any = 123
//等价于
let someValue = 123
```
#### 类型判定（类型推论）
如果你生命对象的时候，没有指定类型，但是你给了一个可以`判读基础类型`的值
```typescript
let someString = '123'
// someString = 223   //error
// 因为等价于
// let someString:string = '123'
```
#### 联合类型（多重类型）
如果你确定这个对象可能拥有两种以上的类型， 你可以声明多个
```typescript
let length:string|number = '13'
let length2:string|number = 23
```

#### 对象类型（接口）
前面我们只说了基础数据类型，如果我要声明一个对象的话，该如何处理？

