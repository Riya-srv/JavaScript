var c = 300
let a = 100
if(true){
    //local scope
    let a = 10
    const b =20
    var c = 30
    //console.log("inner a : " + a)
}
//global scope
//console.log(a)
//console.log(b)
//console.log(c) // 30


function one(){
    const username = "riya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

one()



// Hoisting

console.log(addOne(3))

function addOne(num){
    return num+1;
}


console.log(addTwo(3)) //error - cannot call a func before definition when the func is declared as expression
const addTwo = function(num){
    return num+2;
}


