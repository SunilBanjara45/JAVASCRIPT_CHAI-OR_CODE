//? singleton ->

// const tinderUser =new Object()   // singleton object.
// console.log(tinderUser)

// const tinderUser1 ={}   // NON-singleton object.
// tinderUser1.id = "123abc"
// tinderUser1.name = "Sunil"
// tinderUser1.isLoggedIn = false

// console.log(tinderUser1)
// console.log(Object.keys(tinderUser1)) // return all keys in array
// console.log(Object.values(tinderUser1)) //return all values in array
// console.log(Object.entries(tinderUser1)) // return all key value each pair in each array in a array.

// console.log(tinderUser1.hasOwnProperty('isLoggedIn'))

// console.log(tinderUser1.id) 


//?*********************************************************************************************************

// const regularUser = {
//     email : "sunilbanjara433@gmail.com",
//     fullname: {
//         userfullname : {
//             firstname:"sunil",
//             lastname:"banjara"
//         }
//     }
// }

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.firstname)

//? #################################################################################

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const obj3 = {5: "e", 6: "f"}
// const obj4= { obj1,obj2,obj3}

// const obj5= Object.assign({}, obj1,obj2,obj3)
// const obj6= Object.assign( obj1,obj2,obj3)
// const obj7= { ...obj1, ...obj2, ...obj3}  // most usfull method to combine objects.


// console.log(obj1,obj2,obj3)
// console.log(obj4)
// console.log(obj5)  // 5,6 both are same
// console.log(obj6)
// console.log(obj7)


//? #################################################################################

// const users = [
//     {
//         id: 1,
//         email: "sunilsh@gmail.com"
//     },
//     {
//         id: 1,
//         email: "sunilsh@gmail.com"
//     },
//     {
//         id: 1,
//         email: "sunilsh@gmail.com"
//     }
// ]



//? ######################## object destructure ######################################

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sunil"
}

const {courseInstructor} = course
console.log(courseInstructor)

const {courseInstructor: instructor} = course
console.log(instructor)

// let {coursename : don}=course
//  console.log(don)

 //?*****************************************************************************************************

//? curly brases without name is called JSON.
//? In JSON key and value write in double coat.
// {
//     "name": "sunil",
//     "3name": "js in hindi",
//     "price": "free"
// }

//? API  can be in format of object and array.
// {

// }
// [
//     {},
//     {},
//     {},
// ]
 
