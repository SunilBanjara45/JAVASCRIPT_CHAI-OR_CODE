/* 1. primitive(value) => 
    It's all are call by value type isme jo bhi data aapko milta he vo data ki copy hoti he, app jo bhi changes krenge vo copy me hoge original data me nhi.

 7 types = String, Number, Boolean, null, undefined, Symbol, BigInt
 Symbol is used to make unique value.
 BigInt is used for large and some scientific value.
 null is not a zero , it is empty.
 
 
*/

// const score = 100
// const score1 = 100.32  // score and score1 both are Number type.
// const isLoggedIn =false  // Boolean
// const outsideTemp = null // Object
// let userEmail;   // undefined

// const id= Symbol('123')
// const anotherId= Symbol('123')
// console.log(id=== anotherId) // false because Symbol always return unique value. 

// const bigNumber = 45896712358947851397403254872n // bigint
// console.log(bigNumber)
// console.log(typeof bigNumber)

//? #################################################################################

// 2. Non-primitive(reference) =>
//    Array, Objects, Functions
//  values in a curly breses that is Object.
//  values in a square brecket that is Array.

// const heros = ["shaktiman", "naagraj","jadugar"]
// console.log(heros)
// console.log(typeof heros)

// let myObj = {
//     name:"sunil",
//     age: 24
// }
// console.log(myObj)
// console.log(typeof myObj)

const myFunction = function(){   // function declaration
    console.log("Hello World")
}
console.log(typeof myFunction)
myFunction();  // function call