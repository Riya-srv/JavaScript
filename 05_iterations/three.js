// for of

// ["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for(const i of arr) {
    //console.log(i);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if(greet == " "){
        continue
    }
    //console.log(`${greet}`)
    
}

//Maps

const map = new Map()
map.set("IN","India")
map.set("Aus","Australia")
map.set("UK","United Kingdom")

//console.log(map)

for (const [key,value] of map) { //[key,value]  - destructure
    //console.log(key) // array
    console.log(key, value)
}

//for of does not work with Objects : TypeError : obj is not iterable

