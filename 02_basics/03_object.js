// Singleton -> jb bhi hm literals ki trh declare krte he to singleton nhi bnta he, but constructor se bnta he.

//? Object literals ->
Object.create // it is constructor method and by this method made singleton.

const mySym = Symbol("key1")
const mySym1 = Symbol("key2")

const jsUser = {
    name : "Sunil",
    age : 24,
    mySym : "myKey1",       // here it is not symbol type it is string type.
    [mySym1] : "myKey2",       // here it is symbol type
    "location" : "Udaipur",
    email : "sunil4@gmail.com",
    isLoggedIN : false,
    lastLoginDays : ["monday", "saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["location"]) // it is correct method of access value.
// console.log(jsUser.location) // can't access this type, it is not correct method. 

// console.log(typeof jsUser[mySym1])
// console.log(jsUser[mySym1])

// console.log(typeof jsUser.mySym)
// console.log(jsUser.mySym)

// jsUser.email ="skbanjara@gmail.com";
// Object.freeze(jsUser) // after freeze no any changes can be do.

// jsUser.email="banjara@gmail.com"

// console.log(jsUser)


// jsUser.greeting = function(){
//     console.log("Hello js user")
// }
// console.log(jsUser.greeting())

// jsUser.greetingTwo = function(){
//     console.log(`Hello js user, ${this.name}`)
// }
// console.log(jsUser.greetingTwo())
