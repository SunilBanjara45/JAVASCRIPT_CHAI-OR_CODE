/*
filter() is an array method used to create a NEW array containing only those elements that pass a given condition.

const newArray = array.filter((value, index, array) => {
    return condition; // true or false
});

Callback must return true or false
Returns a new array
Does NOT modify the original array

🧠 When to use filter()

✅ Remove unwanted data
✅ Apply conditions
✅ Clean API responses
❌ Just looping
❌ Transform values
*/

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach( (item) => {
//     console.log(item)
//     return item
// })

// console.log(value) // undefined because forEach loop doesn't return any value.

//?***********************************************************************************

// const myNum = [10,20,30,40,50,60,70,80,90,100]

// const number= myNum.filter( (num) => num>50 )//yha value directly return ho jayegi

//  const number = myNum.filter( (num) => { 
//     return num>50 //ydi curly breses use kiye he to retuen keyword ka use krna pdega.
// } )
// console.log(number)

//?***********************************************************************************

// const myNum = [10,20,30,40,50,60,70,80,90,100]

// const newNums =[]

// myNum.forEach( (num) => {
//     if(num>50){
//         newNums.push(num)
//     }
// })

// console.log(newNums)


//?***********************************************************************************

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre==='History')
//   userBooks = books.filter( (bk) => { 
//     return bk.publish>=1995 && bk.genre ==='History'
// })
//   console.log(userBooks)