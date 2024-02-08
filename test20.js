// function data(){
//     fetch(`https://randomuser.me/api/`)
//     .then((raw)=>{
//         return raw.json()
//     })
//     .then((data)=>{
//         console.log(data);
//     })


// }

// data()



async function data(){
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans = await raw.json()
    console.log(ans);
   


}

data()


//concurrency --> running sync and async code simultaneously
//parallelism --> processora and cores
//throtteling --> control code for number of execution


//reverse string

const named = "hello"
const arr = []

for (let i = named.length ; i >=0; i--) {
    const element = named[i];
    arr.push(element)
    
}

console.log(arr.join(""));

