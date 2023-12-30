const marvel_heroes = ["ironman", "spiderman" , "thor"]

const dc_heroes= ["flash" , "batman" , "superman"]

//push elements in existing array


// marvel_heroes.push(dc_heroes)


// console.log(marvel_heroes[3]);


// concat combine existing array and make new array


// const new1 = marvel_heroes.concat(dc_heroes)
// console.log(new1);



//slice 

// const array = [1,2,3,4,5,6,7]

// console.log(array);

// const n1 = array.slice(1,3)

// console.log(n1);

//splice

// const n2 = array.splice(1,3)

// console.log(n2);

// console.log(array)



// spread


const all = [...dc_heroes , ...marvel_heroes]


console.log(all);


//flat array 
const ar = [1,2,3,[4,5,6],[7,[8,9,10]]]

console.log(ar);

const newar = ar.flat(Infinity)

console.log(newar);

let score1 = 100
let score2 = 200

console.log(Array.isArray("hello"));
console.log(Array.from("hello"))
console.log(Array.from({name:'dyanesh'}))
console.log(Array.of(score1,score2));

