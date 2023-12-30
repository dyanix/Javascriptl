// objects => // literal ==> not singleton
              //constructor ==> singleton



//object literals

const mysymbol = Symbol("key")   //symbol datatype

const JsUser = {
    name:"Dyanesh",
    "fullname":"Dyanesh Vinayak Dhhawale",
    [mysymbol]:"key1",
    age:21,
    profession:"Software Developer",
    country:"India",
    hobbies:[ "Reading","Coding" ],
    iscoder:true,

}


//access
console.log(JsUser.age);

console.log(JsUser["age"]);
console.log(JsUser["fullname"]);

console.log(JsUser[mysymbol]);


JsUser.iscoder = false
JsUser.country = "Bharat"
console.log(JsUser.iscoder);
console.log(JsUser.country);

// Object.freeze(JsUser)

JsUser.name = "Dyanix"

console.log(JsUser);

JsUser.greetings = function(){
    console.log(`Hello! My Name is ${this.name} `); //string interpolation
    //when we reference same object we write this .
}
console.log(JsUser.greetings());
console.log(JsUser);