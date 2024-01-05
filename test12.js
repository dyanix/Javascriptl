//swith case


const month = 3

switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("Apr");
        break;
    default:
        console.log("hjhhh");
        break;    
}


//falsy values

// false 0 -0 BigInt 0n "" null undefined NaN

//truthy values

// true " " [] {} function(){}


const email = []

if(email.length === 0){
    console.log("Array is empty");
}

const emptyobject = {}

if(Object.keys(emptyobject).length === 0){
    console.log("object is empty");
}

//nullish coalescing operator (??) : null undefined


let val1
// val1 = 10 ?? 3

val1 = null ?? 3

console.log(val1);

//Terniary operator

// condition ? true : false

const chaiprice = 100

chaiprice<= 10 ? console.log("Drink chai") : console.log("let it be drink water");


