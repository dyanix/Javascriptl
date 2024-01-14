//scope

//let const is block scope
//var is functional scope

// let a=10;
// const b=20;
// var c = 30;
// console.table([a,b,c])

let a = 343
// var c=23
if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("Inneer in block scope", a)


}

console.log("Outter in global scope", a);
// console.log(b);
// console.log(c);


function one() {

    const userName = "Dyanesh"
    function two() {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);
    two();



}

one();



if(true){
    const name = "Dyanesh"

    if(name === "Dyanesh"){
        const age = 21
        console.log(`Name is ${name} age is ${age}` );
    }
    // console.log(`Name is ${name} age is ${age}` );


}

//////////////////////////////////////  hoisting
addone(5)  //no error

function addone(num){
    return num+1
}

addtwo(5) ///error

const addtwo = function(num){
    return num+2

}
