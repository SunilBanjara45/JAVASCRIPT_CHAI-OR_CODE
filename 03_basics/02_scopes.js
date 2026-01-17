// const a = 10
// let b = 20
// var c = 30

// console.log(a,b,c)// tino ko ak sath bhi print kr skte he or alg alg bhi.
// console.log(a)
// console.log(b)
// console.log(c)


//? *********************************************************************************

// if(true){
//     const a = 10
//     let b = 20
//     var c = 30
// }
// console.log(a) // error-> because a ka scope if ke ander hi he.
// console.log(b) // error-> because b ka scope if ke ander hi he.
// console.log(c) // ye value print krega 30, ye scope ko follow nhi krta he.


//?**********************************************************************************
// let b=100         // globle scope
// var c =300
// if(true){           // block scope
//     const a = 10
//     let b = 20
//         c = 30
//     console.log("inner:",b)
// }
// console.log(c)
// console.log(b)

// globle scope ki value CONSOL and NODE me alg alg hoti he.

//? ********************************************************************************
// child function parent function ki value access kr skta he but parent function child ki value access nki kr skta he.
// function one(){
//     const username="sunil"
//     function two(){
//         const website="youtube"
//         console.log(username)
//     }
//     // console.log(website)
//     two()
// }
// one()

//?**********************************************************************************

// if (true) {
//     const username="sunil"
//     if(true){
//         const website="youtube"
//         console.log(username)
//     }
//     // console.log(website)
// }
// console.log(username)

//? *********************************************************************************
// 
// console.log(addone(5))
// addone(5)

// function addone(num1){
//     return num1+1;
// }

//?*********************************************************************************

 // if koi function kisi variable me initialize kiya ho to use function definition ke bad hi execute kr skte he phle kiya to error dega..

//  console.log(addtwo(5))
//  const addtwo= function(num1){  // error dega
//     return num1+2;
// }
// // console.log(addtwo(5))


//  console.log(addtwo(5))
//  function addtwo(num1){  // 7
//     return num1+2;
// }