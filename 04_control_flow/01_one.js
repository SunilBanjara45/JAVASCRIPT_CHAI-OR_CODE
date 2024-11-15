// if statement

// if(true){
//     console.log("good boy")
// }

// if(2=="2"){
//     console.log("good boy")
// }

// if(2==="2"){
//     console.log("good boy")
// }

//? <, >, <=, >=, ==<, !=, ===, !==

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User Power:${power}`)
// }

// console.log(`User Power:${power}`)//error because power ka scope if ke ander hi he


const balance =1000
if(balance>500) console.log("good"), console.log("boy"); 
// not good approach to writing code.


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}