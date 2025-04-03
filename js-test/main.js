// typeof를 사용 시 null, {}, []와 같은 데이터는 object라는 type만 리턴한다
console.log(typeof "hello world")		// string
console.log(typeof 123)							// number
console.log(typeof true)						// boolean
console.log(typeof undefined)				// undefined
console.log(typeof null)						// object
console.log(typeof {})						  // object
console.log(typeof [])						  // object

// Object.prototype.toString.call(param) : [object String/Number/Array] 등으로 표기됨
function getType1(data){
    return Object.prototype.toString.call(data)
}

console.log(getType1(123));					// [object Number]
console.log(getType1(false));				// [object Boolean]

// slice 함수를 이용하여 원하는 타입만 리턴하는 함수 생성 가능
function getType2(data){
    return Object.prototype.toString.call(data).slice(8, -1)
}

console.log(getType2(123));					// Number
console.log(getType2(false));				// Boolean
console.log(getType2(null));				// Null
console.log(getType2({}));					// Object
console.log(getType2([]));					// Array