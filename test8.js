//functions and parameters


function sayMyName(){
console.log("My");
console.log("Name");
console.log("is");
console.log("Dyanesh");
}

//here sayMyName is reference  and () it is execute

// sayMyName()


//here (num1,num2) are parameters
// function addTwoNum(num1,num2){
//     console.log(num1+num2);

// }

//here (23,23) are arguments
// addTwoNum(23,23)



function addTwoNum(num1,num2){
   return (num1+num2);
   console.log("unreachable after return")

}

const result = addTwoNum(1,2)

// console.log(result);


function loginUserMessage(username ="robot") //by default if name is not present if present then it will override with entered username
{
    if(username == ""){
        return "Username cannot be empty";
    }
    else if(username === undefined) //(username === undefined) equivalent to (!username)
    {
        return "Please Enter Username "
    }
    else{
        return `${username } Logged In !!`
    }
   
}

const Usernamelogged = loginUserMessage("Dyanesh") 
  //when we pass nothing like loginUserMessage() then it is undefined

// console.log(Usernamelogged);



//shoping cart 
// ...num is rest operator depending on the use
//passing multiple values in function using rest operator(...xx)
function calculateCartPrice(val1,val2,...num){
    return num
}

console.log(calculateCartPrice(300,3434,232,434));

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
const res = sum(1, 2, 3, 4, 5); // 15

//passing object in function

const user = {
    username:"Dyanesh",
    price:121
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)

}

// handleObject(user)
handleObject({
    username:"Dyanesh",
    price:121
})


//passing array in function 


const newArray = [121,122,124,1232]

function returnSecondValue(getArray){
    return getArray[1]

}

// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([121,122,124,1232]));