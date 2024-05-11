function sayMyName(){
    console.log("riya")
}

sayMyName //reference
sayMyName() //execute


function addTwoNumbers(number1 , number2){ //(number1 , number2) parameters
    console.log(number1 + number2);
}

// (3,4) arguments
//addTwoNumbers(3, "4") //34
//addTwoNumbers(3, null) //3

const result = addTwoNumbers(3, 5)

//console.log(result); // undefined because function is not returning anything

// if we don't give arguments -- undefined


function calculateCartPrice(...num1){ //... is rest operator now
    return num1;
}
console.log(calculateCartPrice(200, 400, 500))  // [200, 400, 500] - array

const user = {
    username : "riya",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
