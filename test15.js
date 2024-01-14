
// const code = ["js","ruby" ,"java" , "cpp" ,"python"]

// const values = code.forEach((item)=>{
//     // console.log(item);
//     return item

// })

// console.log(values);







// const num = [1,2,3,4,5,6,7,8]

// const val = num.filter((n)=>{
//     return n>4
// })

// console.log(val);




//using foreach


// const values = []

// num.forEach((n)=>{
//     if(n>4){
//     values.push(n)
//     }

// })

// console.log(values);







// const code = ["js","ruby" ,"java" , "cpp" ,"python"]
// const values = []
// code.forEach((item)=>{
//   if(item[0]=='j'){
//     values.push(item)

    


//   }

// })

// console.log(values);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


const userbooks = books.filter((b)=>{
    return b.genre == "History"

})



console.log(userbooks);