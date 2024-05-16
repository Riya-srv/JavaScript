const coding = ["js","java","cpp","python"]

// coding.forEach(element => {
//     console.log(element)
// });

// coding.forEach(function (val){
//     console.log(val)
// })

// coding.forEach((item,index,arr)=>{
//     console.log(item, index, arr)
// })


const myCoding = [
    {
        lang : "javascript",
        ext : 'js'
    },
    {
        lang : "python",
        ext : 'py'
    },
    
    {
        lang : "c++",
        ext: 'cpp'
    }
    

]

myCoding.forEach((item) => {
    console.log(item.lang)
})
