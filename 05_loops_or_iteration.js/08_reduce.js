// const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)  

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// },0)

// const sun = myNums.reduce((acc,curval) => {
//     return acc+curval
// },0)
// console.log(sun)

//acc initialize with 0. and ye jo bhi value add ho rhi he vo accumulator me store ho rhi he.

// const myTotal = myNums.reduce( (acc, currval) => acc + currval , 0)
// console.log(myTotal)

//?***********************************************************************************


// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce( (acc, item) => acc +item.price,0)
// console.log(priceToPay)

const arr = [10,20,30,40,50]

const sum = arr.reduce((acc, currval)=>{
            return acc+currval
},0)
console.log("Sum:",sum)