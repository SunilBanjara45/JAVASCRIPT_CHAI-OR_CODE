// function definition
// function sayMyName() {
//     console.log("s");
//     console.log("u");
//     console.log("n");
//     console.log("i");
//     console.log("l");
// }

// sayMyName  // function reference
// sayMyName() // function execution

//? **********************************************************************************************************************************

// (number1, number2) -> parameters
function addTwoNO(number1, number2) {
    console.log(number1 + number2) // 7
    let x= number1+number2
    return x
}
// (3,4) -> arguments
// addTwoNO(3,4) // 7
// addTwoNO(3,"4") // 34
// addTwoNO(3,"a") // 3a
// addTwoNO(3,null) // 3

let result = addTwoNO(3, 4)  
console.log("Result:", result) // 7

//?****************************************************************
/*
function addTwoNO (number1, number2){ 
        // let result=number1+number2
        console.log ("sunil")
        // return result
        return number1+number2
        console.log("banjara")      // after return no any value print.
    }

    let result= addTwoNO(3,4) 
    console.log("Result:",result) 
    */

//?****************************************************************

// function loginUserMessage(username){
//     if(!username){  // if(!username)=if(username===undefined) both equal
//         console.log("please enter a username")
//         return
//     }
//     return `${username} just logged in`

// }
// console.log(loginUserMessage("sunil"))
// console.log(loginUserMessage())

//? **********************************************************************************

// function loginUserMessage(username="sam"){
//     if(!username){  // if(!username)=if(username===undefined) both equal
//         console.log("please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("sunil"))
// console.log(loginUserMessage())

// Jab ham  loginUserMessage() Function argument me Kuch bhi pass nhi karte hai. to undefined jata Hai 

//***********************************************************************************
// (...)-> triple dot is called a rest and spread operator, but contex of both are different ki kb rest operator and kb spred operator khna he.

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 600, 2000))


// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 600, 800, 900, 1000, 1500, 2000))

//? **********************************************************************************

// const user ={
//     username:"sunil",
//     prices:599  // isme problem ye he ki jb price ko prices kr diya tb price ki jgh undefined aayega.
// }

// function handleObject(anyObject){
// console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
// }
// handleObject(user)


//? **********************************************************************************
//? isme hm object ko direct bhi pas kr skte he.

// function handleObject(anyObject){
// console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
// }
// handleObject({
//         username:"sunil",
//         price:599  
// })

//? **********************************************************************************

// const arr =[100,200,300,400,500]

// function getValue(value) {
//     return value[3]
// }
// //  console.log(getValue(arr))
// console.log(getValue([800, 1000, 900, 2000, 4000, 3000, 7000]))
