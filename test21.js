
// hoisting

// Global execution context 
// Memory Phase were all the variables loaded then we have Code Phase 


// console.log("Age is",age);
// var age = 20
// console.log("Age is",age);




//temporal deadzone(let , const)
// age = 100
// console.log("Age is", age);
// let age = 30





myfunc()


var myfunc = function(){
    console.log("First");
}

myfunc()


function myfunc() {
    console.log("Second");
}

myfunc()


