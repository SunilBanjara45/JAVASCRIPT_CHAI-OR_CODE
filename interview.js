// console.log('A'-1)  // NaN
// console.log('2'+2)  // 22
// console.log('2'+2+'2')  // 222
// console.log('2'+2+2)  // 222
// console.log('2'+2-2)  // 20
// console.log(2+2+'2')  // 42
// console.log('2'+2-'2')  // 20
// console.log(2+2-'2')  // 2

//?***************************************************************************************************************************

// const a = {}
// const b = {
//     name: 'ram'
// }

// const c = {
//     name: 'shyam'
// }

// a[b] = {
//     name: 'raghav'
// }

// a[c] = {
//     name: 'girdhar'
// }

// console.log(a[b]) // girdhar

//?***************************************************************************************************************************

// const x= 0        // int type
// const y= false    // boolean type

// console.log(x==y)  // true
// console.log(x===y)// false   because type is not same

// console.log('abc'-20) // NaN
// console.log(20-'abc') // NaN
// // console.log(20-abc) // error

// console.log(true +2)  // 3
// console.log('true' +2) // true2

// console.log(NaN==NaN)   // false
// console.log(NaN===NaN)  // false

//?********************************************* filter method ***************************************************************

// const arr = [10, 20, 30, 40, 50, 60, 70]
// result = arr
//            .filter((key) => key>20)                // [30, 40, 50, 60, 70]
//            .map((key) => key*2)                    // [ 60, 80, 100, 120, 140 ]
//            .reduce((acc ,curval) => acc+curval ,0) // 500
// console.log(result)

//?********************************************* map method ***************************************************************
// const arr = [10, 20, 30, 40, 50, 60, 70]
// result = arr
//     .map((key) => key * 10)                      // [100, 200, 300,400, 500, 600, 700]
//     .map((key) => key + 10)                      // [110, 210, 310, 410, 510, 610, 710]
//     .filter((key) => key>210)                    // [310, 410, 510, 610, 710]
//     .reduce((acc, curval)=>acc+curval , 0)       // 2550

// console.log(result)

// result = arr.map((key) => key > 10)
// console.log(result)

//?********************************************* reduce method ****************************************************************
// const arr = [10, 20, 30, 40,50]
// result = arr.reduce((acc, curval) =>acc+curval,0)
// console.log(result)


//?********************************************** sort method ***************************************************************
// const arr =[100,50,120,40,200,150]
// arr.sort((a,b) => a-b)  // increasing order
// arr.sort((a,b) => {
//    if(a>b)return 1
//    else return -1
// })  // increasing order

// console.log(arr)

// arr.sort((a,b) => b-a)  // decreasing order
// console.log(arr)

//?********************************************** unshift, shift method ***************************************************

// const arr =[100,50,120,40,200,150]
// arr.unshift(70)
// console.log(arr)

// arr.shift()
// console.log(arr)

//?********************************************** Higher order function ***************************************************
// In JavaScript, a higher-order function is a function that either:
// Takes one or more functions as arguments, or
// Returns a function as its result.

// Higher-order functions are a core concept in functional programming and are often used to create more abstract and reusable code.

// Examples of Higher-Order Functions in JavaScript:
// map(): Applies a function to each element of an array and returns a new array with the transformed elements.
// filter(): Creates a new array with all elements that pass the provided test.
// reduce(): Executes a reducer function on each element of the array, accumulating a result.
// forEach(): Executes a provided function once for each array element

// function applyOperation(a, b, c, operation) {
//     return operation(a, b, c);
// }

// function multiply(a, b, c) {
//     return a * b * c;
// }

// console.log(applyOperation(5, 3, 2, multiply))

//?********************************************** Array destructuring **********************************************************

// const arr =['ram','shyam','girdhari','gopal']
// const [a,b,c,d] =arr
// console.log(a,b,c,d)

//?********************************************** Object destructuring *******************************************************

// const obj ={
//     name:"ram",
//     age:25
// }
// const {name,age} = obj
// console.log(name, age)

//?********************************************** Temporal Dead Zone ***************************************************
/*
When a variable is declared with let or const, it is hoisted to the top of its scope, but its value is not initialized until the execution reaches the point where it is actually defined. Accessing the variable before this initialization results in the TDZ, and JavaScript throws an error.
*/

// console.log(x); // ReferenceError: Cannot access 'x' before initialization
// let x = 10;

//?******************************************************************************************************************************
// const a=(4,5,6)
// console.log(a)   // 6    Comma operator evaluates all expressions but returns only the last one.

// const x=[4,5,6]
// console.log(x) // [4,5,6]


//?******************************************************************************************************************************
// function abc(){

// }
// var abc
// console.log(abc)      // [Function: abc]
// console.log(abc())    // undefined

//?******************************************************************************************************************************
// const n=10
// console.log(n.toString())   // 10 
// console.log(typeof n.toString())  // string

// console.log(n.toString(8))   // 12   10 convert in base 8 (octal)
// console.log(toString(5))  // [object Undefined]

//?****************************************************************************************************************************** 
// var a=10

// function abc (){
//     x= a++
//    return x
// }
// a++;
// console.log(a)
// console.log(abc())

//?****************************************************************************************************************************** 

// let person = {
//     name: 'Alice',
//     greet: function() {
//         console.log('Hello ' + this.name);
//         // console.log('Hello ' + person.name);
//     }
// };
// person.greet();

//?************************************** Merge two Array **************************************************************************************** 

// let a1 = [10, 20, 30]
// let a2 = [40, 50, 60]

//* logic 1 
// let a3 = [];
// for (let i = 0; i < a1.length; i++) {
//     a3[a3.length] = a1[i];
// }

// for(let i=0;i<a2.length;i++)
// {
//     a3[a3.length] = a2[i]
// }
// console.log(a3) 

//* logic 2
// let a3 =[...a1, ...a2]
// console.log(a3)

//?************************************** Reverse Array **************************************************************************************** 
// let arr = [10,20,30,40,50,60]

// ? logic 1
// let result =[];
 
// for(let i=arr.length-1; i>=0; i--){
//     result.push(arr[i]);
// }
// console.log(result);

// ? logic 2
// let length = arr.length

// for(let i =0; i<length/2; i++){
//    let temp;
//    temp=arr[i];
//    arr[i]=arr[length-1-i];
//    arr[length-1-i]=temp;
// }
// console.log(arr)

// const x=[10,20,30]

// const y =[40,50,60]
// const result = [...x, ...y]
// console.log(result)