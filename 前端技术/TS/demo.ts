class Person {
	localName!:string
	age:number
	constructor(){
		this.age = 18
		// this.localName = 'hello'
		this.initializediy()
	}
	initializediy(){
		this.localName = 'hello'
	}
}
