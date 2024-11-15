let myName = "Sunil    "
let mychannel = "chai    "


// let myHeros = ["thor", "spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman :"sling",

//     getSpiderPower : function() {
//         console.log(`spidy power is ${this.spiderman}`)
//     }
// }

// Object.prototype.sunil =function(){
//     console.log(`sunil is present in all objects`)
// }

// Array.prototype.haySunil = function(){
//     console.log(`sunil says hello`);
    
// }

// heroPower.sunil() 
// myHeros.haySunil()

// HeroPower.haySunil()

//?********************************************** Inheritence ***************************************************************************

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//?*************************************************************************************************************************************

//? Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiAurCode     "

String.prototype.trueLength = function (){
    // console.log(`${this}`)
    console.log(`true length is: ${this.trim().length}`)
}
anotherUsername.trueLength()
"sunil    ".trueLength()