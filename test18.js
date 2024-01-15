//javascript is synchronus single threaded



console.log("first execution");

setTimeout(()=>{
    console.log("Third execution");

},5000)

var ans = fetch(`https://randomuser.me/api/`)
console.log(ans);

console.log("second execution");
