// singleton -- if with constructor , then singleton

// object literals
const mySymbol = Symbol("key1") // should declare Symbol before using it in Object
const JSUser = {
    name : "Riya",
    "full name" : "Riya Srivastava",
    [mySymbol] : "mykey1",
    age : 23,
    location : "Bengaluru"
}
//console.log(JSUser.name)
//console.log(JSUser["full name"])
//console.log(JSUser[mySymbol]) //mykey1
console.log(JSUser)

JSUser.greeting = function(){
    console.log(`Hello ,${this.name}`)
}

JSUser.greeting();