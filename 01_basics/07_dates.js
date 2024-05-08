//Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC 

//Temporal API

let myDate = new Date();
// console.log(myDate.toString())
// console.log(myDate.toDateString()) //readable
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString()) //5/8/24
// console.log(myDate.toLocaleString()) //5/8/2024, 4:47:39 PM
// console.log(myDate.toJSON())

//let myCreatedDate = new Date(2023, 0, 23) //Mon Jan 23 2023 - 0 is Jan
//let myCreatedDate = new Date(2023, 0, 23, 5, 3) // 1/23/2023, 5:03:00 AM
let myCreatedDate = new Date("01-14-2024") //1/14/2024, 12:00:00 AM - 1 is Jan
//console.log(myCreatedDate.toLocaleString())

console.log(myCreatedDate.getMonth()) //returns 0



// ---------- Timestamp -----------
//to compare
let myTimestamp = Date.now() //milliseconds
//console.log(myTimestamp)
//console.log(myCreatedDate.getTime()) // milliseconds

//to change into seconds.
//console.log(Math.floor(Date.now()/1000)) //seconds

