
//Array

const array = [0,1,2,3,4,5,6]

const names = ['ram','shyam','kam',' ']

const array1 = new Array(1,2,323,23)

// console.log(array[3]);
// console.log(names[3]);
// console.log(array1[3]);

// Array methods


names.push("dyanesh")

// console.log(names);

array.pop()

// console.log(array);
// console.table([names,array])

// console.log(array.indexOf(23));



// join
const newarray = array.join()

// console.log(array);
// console.log(newarray);
// console.log(typeof newarray);

//slice 
//  Returns a copy of a section of an array. 

// const array = [0,1,2,3,4,5,6]
console.log("A",array);

const n1 = array.slice(1,3)
console.log(n1);
console.log("B",array);

//splice
//  Removes elements from an array and, 
// if necessary, inserts new elements in their place, 
// returning the deleted elements

const n2 = array.splice(1,3)
console.log(n2);
console.log("C",array);