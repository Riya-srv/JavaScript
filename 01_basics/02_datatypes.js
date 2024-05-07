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


//Array
const veg = ['carrot','brinjal','potato']
console.log(typeof veg) //object

//Object
let myObj = {
    name : 'riya',
    age : 23,
}

console.log(typeof myObj)

//Non-primitive datatypes are stored in Heap as reference.. changes are done in both objects

let anotherObj = myObj

anotherObj.name = 'xyz'
console.log(myObj.name) //xyz
console.log(anotherObj.name) // xyz

//Function
let myFunction = function(){
    console.log("func")
}

console.log(typeof myFunction) //function

//Stack - Primitive datatypes - copy is created

let myName = "riya"
let yourName = myName

yourName = "notRiya"

console.log(myName) //riya
console.log(yourName) //notRiya