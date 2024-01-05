// Immediatel invoked function expression
// ()firstone for function declaration and () second one is for call
//iife is used for avoiding pollution from global scope variables

//named iife 
(function demo(){
    console.log("DB connected");
})();

//if semicolon not given then demo2 will give error

((name)=>{
    console.log(`Hello ${name}`);
})("Dyanesh")