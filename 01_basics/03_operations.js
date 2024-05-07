console.log(typeof(1 + "2")) //string 12

console.log(typeof("1" + 2)) //string 12

console.log(1 + "2" + 2) //122
console.log(typeof(1 + "2" + 2))  //string

console.log(1 + 2 + "2") //32
console.log(typeof(1 + 2 + "2"))  //string

//-------------------Comparisions------------------------

console.log("2" > 1); //true
console.log("1" > 2); //false
console.log("02" > 1); //true

console.log(null == 0) //false
console.log(null >= 0) //true
console.log(null <= 0) //true
//comparison operator works differently here and converts null into 0

console.log(undefined >= 0) //false
console.log(undefined <= 0)  //false

//--------------------------------------------------------

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId) //false
console.log(typeof id) //symbol

// JS is dynamically typed language
let code = "abc"
code = 12
console.log(code)


