
let myArr = [1, 2, 3, 4, 5];
//console.log(myArr)

const nums = new Array(1, 2, 3, 4)
console.log(nums[3])

//Array Methods

myArr.push(6);
//console.log(myArr) //[ 1, 2, 3, 4, 5, 6 ]

myArr.pop() //remove last value
//console.log(myArr) //[ 1, 2, 3, 4, 5 ]

myArr.unshift(9)
//console.log(myArr) //[ 9, 1, 2, 3, 4, 5]

myArr.shift() //removes first value
//console.log(myArr)

console.log(myArr.includes(1)) //true
console.log(myArr.indexOf(1))  // 0

const newArr = myArr.join() //changes into string
console.log(newArr + " " + typeof newArr) 



//slice and splice

console.log(myArr);

const arr1 = myArr.slice(1,3);
console.log(arr1); //[2,3] //3 range not included

console.log(myArr);

const arr2 = myArr.splice(1,3);
console.log(arr2); // [2,3,4] // 3 range included

console.log(myArr); // [1,5]
//splice changes the original array