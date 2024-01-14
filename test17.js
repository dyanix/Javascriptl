const num = [1, 2, 3, 4]


// const total = num.reduce(function(acc,currval){
//     return acc+currval
// },0)

// let sum = 0;
// const total = num.forEach((n) => {
    

//     sum = sum + n
//     console.log(sum);

// })

// console.log(total);




const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const totalPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0)


console.log(totalPrice);