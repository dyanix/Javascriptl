// this is only used in thr object 
// not in function



const user = {
    username:"Dyanesh",
    Price:232,

    welcomeMessage:function(){
        console.log(`${this.username},welcome`);
        console.log(this);
    }

}


// user.welcomeMessage()

// user.username = "Dyanix"

// user.welcomeMessage()

// console.log(this);


//this not used in fuction 
//it use in the property of the object
// function chai(){
//     let name="dyanesh"
//     console.log(this.name);
// }

// chai()


// const chai = function(){
//     let name="dyanesh"
//     console.log(this.name);
// }
// chai()


// const chai = ()=>{
//     let name="dyanesh"
//     console.log(this.name);
// }


// chai()

//simple arrow function

// const addtwo = (num1,num2) => {
//     return num1+num2

// }



//implicit arrow function

const addtwo = (num1,num2) =>  ( num1+num2)




console.log(addtwo(3,4));