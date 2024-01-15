// var ans = new Promise((res,rej)=>{
//     if(false){
//         return res();
//     }
//     else{
//         return rej();
//     }

// })

// ans
// .then(function(){
//     console.log("Resolved");
// })
// .catch(()=>{
//     console.log("Rejected");
// })

// console.log(ans);



var ans= new Promise((res,rej)=>{

    var n = Math.floor(Math.random *10)

    if(n>5){
        return res()
    }
    else{
        return rej()
    }

})


ans
.then(()=>{
    console.log(`greater than 5`);
})
.catch(()=>{
    console.log(`Not greater than 5`);
})


console.log(ans);