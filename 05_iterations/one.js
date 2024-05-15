// for

for (let index = 0; index <= 10; index++) {
    const element = index;
    //console.log(element)
    
}

//console.log(element) //ReferenceError: element is not defined


// break and continue

for (let i = 0; i <= 20; i++) {
    if( i == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);
    
}