
let a = (x) => {
	return 42;
}
function mystery2(callback){
	let result = callback()+5;
	console.log(result);
}
mystery2(a);
console.log(a());

