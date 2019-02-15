var fs = require('fs');

fs.readFile('./index.txt',(err,data)=>{
	console.log(err);
	console.log(data.toString());
})

function* asyncJob(){
	console.log('start')
	var f1 = yield reqdFileSync()
	console.log(f1.toString())
	var f2 = yield reqdFileSync()
	console.log(f1.toString())
}

var job = asyncJob();
job.next()
job.next()
job.next()
