//? forEach => Performs the specified action for each element in an array.

// const coding =["js","java","c++","ruby"]

// coding.forEach(function (val){     
//     console.log(val)
// })


//?**********************************************************************************

//? forEach with Arrow function

// coding.forEach((val) => {
//     console.log(val)
// })

//?**********************************************************************************

// function print(items){
//     console.log(items) 
// }
// coding.forEach(print)

//?***********************************************************************************

// const coding =["js","java","c++","ruby"]
// coding.forEach( (items, index, ar1) => {
//     console.log(items ,index, ar1);
// })

//?***********************************************************************************
// ? object in array =>
// [{},{},{}]

// const myArr =[
//     {
//         languageName : "javascript",
//         fileName : 'js'
//     },
//     {
//         languageName : "java",
//         fileName : 'java'
//     },
//     {
//         languageName : "python",
//         fileName : 'py'
//     }
// ]

// myArr.forEach( (item) => {
//     console.log(item.languageName)
//     console.log(item.fileName)
// })