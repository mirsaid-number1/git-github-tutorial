interface UserType<D>{
	name:string;
	age:number;
	data:D
}

let userOne:UserType<Array<{timeStamp:string,importance:string}>> = {
	name:"Mirsaid",
	age:18,
	data:[{timeStamp:'yesterday',importance:'high'}],
}

let userTwo:UserType<string[]> = {
	name:'Diasrim',
	age:16,
	data:['hello','there','hie']
}
