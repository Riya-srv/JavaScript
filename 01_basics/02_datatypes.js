let age = 23

console.log(typeof age);

console.log(typeof null); // return object
console.log(typeof undefined) //return undefined

//Primitive Datatypes
//number => 2 to the power 53
//bigint
//string => ""
//boolean => true/false
//null => standalone value
//undefined
//symbol => unique


//object


//Conversion to number
//"33" => 33
//"33abc" => NaN
//true => 1 ; false => 0
//"null" => 0
//"undefined" => NaN

let score = "33abc"

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)
console.log(valueInNumber)

let space = " "

let valueInBool = Boolean(space)
console.log(valueInBool)