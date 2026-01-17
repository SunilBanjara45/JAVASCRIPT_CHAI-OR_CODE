// const userEmail= "sunil123@gmail.com"

// if(userEmail){ // true
//     console.log("Got Email")
// }
// else
// console.log("Not Got Email")

//?&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const userEmail= ""

// if(userEmail){  // false
//     console.log("Got Email")
// }
// else
// console.log("Not Got Email")

//? &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// const userEmail= []

// if(userEmail){  // true
//     console.log("Got Email")
// }
// else
// console.log("Not Got Email")

//? &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//? Falsy Values =>
//  false, 0, -0, ""(empty string), BigInt, 0n, null, undefined, NaN
// const a =""
// if(a){
//     console.log("sunil")
// }

//? Truthy Values =>
//    true, "0", " ", [](empty array), {}(empty object), function(){}(empty function)
// const b =" "
// if(b){
//     console.log("sunil")
// }

// const userEmail= []  //length of empty array =0
// if(userEmail){  // true
//     console.log("Got Email")
// }

//? ********************************************************************************

// Object.keys used to convert  value of keys into array.

// const emptyObj= {}
// if(Object.keys(emptyObj).length===0){  // true
//     console.log("Got Email")
// }

// false=0
// false==0    => true
// false=='' or ""    => true
// 0==''    => true


//? ******** Nullish Coalescing Operator (??) => used for null and undefined ********

let val1 = 5 ?? 10
let val2 = null ?? 10  
let val3 = undefined ?? 20  
let val4 = undefined ?? 30  ?? 40

//  isme ye hota he ki if value ho to variable me chli jay, nhi to null chla jay
// jo bhi value first me milgi vhi variable me jayegi.

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//? Ternary operator
// condition ? true : false

//  const price=100
//  price<=80 ? console.log("less then 80") : console.log("more then 80")
  
