// Stack is used in primitive data types. 
// Heap is used in non-primitive data types. 

// let myName = "sunilbanjara"
// let anotherName = myName
// anotherName = "Mittal"

// console.log(myName)
// console.log(anotherName)

//? *************************** reference(non-primitive) ****************************

// let userOne={
//     email:"user@gmail.com",
//     upi:"user@ybl"
// }
// console.log(userOne.email)

// let userTwo=userOne
// userTwo.email="sunilbanjara@gmail.com"

// console.log(userOne.email)
// console.log(userTwo.email)

let arr=["sunil","ram","shyam"]
let arr1=arr
arr1[1]="krishana";
console.log(arr)
console.log(arr1)
