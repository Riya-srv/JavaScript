const marvel_heroes = ["ironman" , "thor" , "hulk"]
const dc_heroes = ["superman", "batman" , "flash"]

//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes) //[ 'ironman', 'thor', 'hulk', [ 'superman', 'batman', 'flash' ] ]

//const allHeroes = marvel_heroes.concat(dc_heroes)
//console.log(allHeroes)



//Spread Operator
const allHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allHeroes)

//Array methods isArray , from, of

const n1 = 12
const n2 = 13
console.log(Array.of(n1,n2)) // [ 12, 13 ]

const myArr = [1, 2, 3, 4, 5]
console.log(Array.isArray(myArr))

console.log(Array.isArray("riya")) //false
console.log(Array.from("riya")) //[ 'r', 'i', 'y', 'a' ]
console.log(Array.from({name : "riya"})) //[] - interesting