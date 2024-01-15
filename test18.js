//javascript is synchronus single threaded



console.log("first execution");

setTimeout(()=>{
    console.log("Third execution");

},5000)


console.log("second execution");
