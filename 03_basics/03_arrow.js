/* this current context ko refer krta he.

browser ke andr jo bhi object hote he vo window object hote he.

this directly can not be used in function.
*/

// const user = {
//     username: "sunil",
//     price: 999,
//     welcomeMessage: function() {
//         console.log(`${this.username} welcome to website`);
//         console.log(this)
//     }
// }
// user.welcomeMessage()
// user.username="mittal"
// user.welcomeMessage()
// console.log(this)

//?**********************************************************************************

// function chai(){
//     username:"sunil"
//     console.log(this.username); // undefined
// }
// chai()

//? ********************************************************************************

// const chai= function(){
//     username:"sunil"
//     console.log(this.username); // undefined
// }
// chai()


//?*************************** Arrow function **************************************

// const chai= () => {  
//     username:"sunil"
//     console.log(this.username); // undefined
// }
// chai()

//? *************************** Basic Arrow function ********************************

// const addTwo = (num1,num2) =>{
//     return num1+num2;
// }
// console.log(addTwo(5,6))

//?**********************************************************************************

//? implicit return-> 

//? curly breses use kiya to return keyword likhna pdega.

//? paranthesis use kiya to return keyword nhi likhna pdega.

//? ()=>{}
//? ()=>()
//? ()=>

// const addTwo = (num1,num2) => num1+num2; 
// const addTwo = (num1,num2) => (num1+num2);

//?  number ko bina paranthesis ke bhi return kr skte he but object ko nhi return kr skte he.

// const addTwo = (num1,num2) => ({username:"sunil"});
// console.log(addTwo(5,6))

