// const user = {
//     username : "Sunil",
//     loginCount : 8,
//     signedIn : true,

//     getUserDetails : function(){
//         // console.log(" got user details from database")
//         // console.log(`Username:${this.username}`)
//         // console.log(this)
//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

//?********************************************************************************************************************************

function user(username,loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome ${this.username}`)
    }
    // return this    // return nhi krenge to bhi explicitly return ho jayega jb new constructor ka use krenge.
}

const userOne = new user("sunil", 15, true)
// const userTwo = new user("Khushal", 20, false)

console.log(userOne)
// console.log(userTwo)