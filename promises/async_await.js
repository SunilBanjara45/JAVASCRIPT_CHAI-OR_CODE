/*
async-await => 
    iska use krke asynchronous code ko synchronous behaviour provide kr pate he.

    synch code
    async code 
    synch code 

    ye tino code he, ydi hm inko synchronous way(step by step) me execute krna chahte he to aynch code ke aage await ka use krenge jisse ye pura code ak ke bad ak krke execute hoga.

    async-await iska use tbhi krenge jb hme promises ko handle krna ho.

    async function hmesh ak promise return krta he.
*/


// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()  // json = javascript object notation.
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// getAllUsers()

//?*************************************************************************************************************************************

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json() 
})
.then((data) => {
  console.log(data)
})
.catch((error) => {
  console.log(error)
})