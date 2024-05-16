const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
}

for (const key in myObject) {
    //console.log(key)
    console.log(myObject[key]) //values
}

const programming = ["js","cpp","java","rb"]

for (const key in programming) {
    console.log(key) //0 1 2 3
}

//forin does not work with maps