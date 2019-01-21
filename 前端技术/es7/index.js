const fs = require('fs');
/*fs.readFile('./index.txt',(err,data)=>{
	console.log(err);
	console.log(data.toString());
})*/
// promise 版本
/*
function readFile(path) {
	return new Promise((resolve,reject )=> {
		fs.readFile(path,(errors,data)=>{
			if (errors){
				reject(errors)
			} else {
				resolve(data)
			}
			console.log(errors);
		})
	})
}

readFile('./index.txt').then(data=>{
	console.log(data.toString());
}).catch(errors=>{
	console.log(e)
})
*/
// const promisify = require('util').promisify;

// es6 yield
/*function* a(v) {
	yield  console.log(1 + v);
	yield console.log(2 + v);
	console.log('end');
}
const b = a(5)

setTimeout(() => {
	b.next();
}, 2000)*/

/*const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);
async  function rf(){
	try {
		const data = await readFile('./index.txt')

		console.log(data.toString());
	} catch (e) {
		console.log("error")
		console.log(e)
	}
}
rf();*/

// 或者封装 自执行函数
/*
(async ()=>{

})()*/
