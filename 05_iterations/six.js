// //filter

// const myNums = [1,2,3,4,5,6,7,8]

// const newNums = myNums.filter((num) => num > 4 )
// console.log(newNums)

// //forEach does not return anything but filter returns

// //map

// const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const myNewNums = myNumbers.map( (num) => num+10) 
// console.log(myNewNums)


// const myNumbers = [1,2,3,4,5,6,7,8,9]

// const newNums = myNumbers.map( (num) => num*10).map( (num) => num+1)
// console.log(newNums)

//reduce
const nums = [1,2,3]
// const total = nums.reduce(function (acc,currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc + currVal
// }, 0)

const total = nums.reduce( (acc,currVal) => acc+currVal, 0)
console.log(total)