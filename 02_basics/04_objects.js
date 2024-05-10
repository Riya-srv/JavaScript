//const tinderUser = new Object() //singleton

const tinderUser = {}

tinderUser.id = 123
tinderUser.name = "John"
tinderUser.isLoggedIn = true

//console.log(tinderUser)


const regularUser = {
    email : "some@some.com",
    fullname : {
        user : {
            firstname : "riya",
            lastname : "srivastava"
        }
    }
}

//console.log(regularUser.fullname.user?.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}
console.log(obj3)

//array of objects
let users = [
    {
        user1: "john",
        email : "hc@hc.com"
    },
    {
        user2 : "james",
        email : "jb@jc.com"
    }
]

// console.log(users[0].email)

// console.log(Object.keys(tinderUser))
// console.log(Object.entries(tinderUser))  //convert obj to arrays




//De-constructure of Objects

const course = {
    courseName : "JS",
    price : 999
}

const {price : p} = course

console.log(p)

//json
// {
//     "name" : "riya",
//     "id" : 23
// }