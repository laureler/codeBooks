
function Student(name) {
	this.name = name
}
Student.prototype.toString = function () {
	return 'name:'+this.name.toString();
}
var st = new Student('小明')
console.log(st.toString());

class Student2 {
	constructor(name){
		this.name = name
	}
	toString(){
		return 'name2:'+ this.name.toString();
	}
}
var toString = new Student2('demo').toString();
console.log(toString);
