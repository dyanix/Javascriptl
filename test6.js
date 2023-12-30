const tinderUser = new Object() // singleton object
const tinderUser2 = {} // non singleton object

// console.log(tinderUser);
// console.log(tinderUser2);


tinderUser.name= "Dynamo"
tinderUser.age = 22
tinderUser.id="123as"
tinderUser.greet = function(){
    console.log(`hello ${this.name}`);
}
tinderUser.status = ["married","unmarried"]
// console.log(tinderUser.greet());
// console.log(tinderUser);

const regularuser = {
    email: "dyanixdhawale@gmail.com",
    fullname:{
        first:"Dyanix",
        last:"Dhawale",


    }
    
}

tinderUser.users = regularuser

// console.log(tinderUser);
// console.log(regularuser.fullname.first);



//merge two object
const obj1 = {
    1:"a",
    2:"b",
    3:"c"
}
const obj2 = {
    4:"d",
    5:"e",
    6:"f"
}

// const obj3 = { obj1 , obj2} //not merge

// const obj3 = Object.assign({} ,obj1,obj2)  // {} --> target    obj1 obj2 --> source


// mostly used

const obj3 = {...obj1 , ...obj2}


console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty("name"));