//? forEach => Performs the specified action for each element in an array.
//? forEach() does NOT return anything
//? forEach() hamesha undefined return karta hai. 

/* ❌ Limitations of forEach()
❌ Cannot use break or continue
❌ Cannot stop loop early
❌ Does not work with async/await properly

forEach() executes a callback function once for each element in an array and is mainly used for performing side effects like logging or updating values.

🧠 When to use forEach()
✅ Logging
✅ DOM manipulation
✅ Mutating existing array
❌ Creating new arrays
❌ Async loops

*/
// const coding =["js","java","c++","ruby"]

// coding.forEach(function (val){     
//     console.log(val)
// })

// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach(function(fruit, index) {
//   console.log(index,  ': ' , fruit);
// });

const arr = [1, 2, 3];
arr.forEach((value, index, array) => {
    array[index] = value * 2;
});
/*Phir [2, 4, 6] kaise aa raha hai?
Kyuki aap original array ko modify (mutate) kar rahe ho
array 👉 original arr ka reference hai
Aap directly usi array ke index par value change kar rahe ho
Isliye arr update ho gaya
*/

console.log(arr); // [2, 4, 6]

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