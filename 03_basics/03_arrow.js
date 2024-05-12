const user = {
    username : "riya",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        //console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this) //{}

// function chai(){
//     console.log(this) //global, fetch..
//     let username = "riya"
//     console.log(this.username) //undefined // function ke andar kaam nahi karta
// }


// const chai = () => {
//     let username = "riya"
//     console.log(this.username) //undefined
//     console.log(this) //{}
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return
const addTwo = (num1,num2) => (num1+num2)

console.log(addTwo(2,3))
