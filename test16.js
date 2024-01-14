const num = [1,2,3,4,5,6]
// const ans=[]
// num.forEach((n)=>{
//     ans.push(n+10)


// })

// console.log(ans);

//  using map function

// const ans = num.map((n)=>{
//    return n+10
// })

// console.log(ans);



//chaining


const ans = num
.map((n)=>n*10)
.map((n)=>n+1)
.filter((n)=>n>20 && n<60)
console.log(ans);
