/*
map() is an array method used to create a NEW array by transforming each element of an existing array.

Runs callback for every element
Returns a new array
Does NOT modify the original array

🔹 How map() works (step-by-step)

Takes first element → 1
Applies logic → 1 * 2
Stores result in new array
Repeats for all elements
Returns the new array

🧠 When to use map()

✅ Data transformation
✅ Extract values
✅ Chaining operations
❌ Just looping / logging
❌ Mutating original array
*/

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// //const newNums= myNums.map( (num) => {return num*10} )

// const newNums = myNums
//                     .map ( (num) => num*10) // 10,20,30,40,50,60,70,80,90,100
//                     .map ( (num) => num+1) // 11,21,31,41,51,61,71,81,91,101
//                     .filter( (num) => num >= 40)         
                        
// console.log(newNums) //  41,51,61,71,81,91,101

// const arr =[10,20,30,40,50,60]

// const newArr = arr.map((num)=> num*2)

// console.log("original array:", arr)
// console.log("new array:",newArr)

// ************************************************************************ map() with object ************************************************************************** 

// const users = [
    //   { name: "Sunil", age: 22 },
    //   { name: "Amit", age: 25 }
    // ];
    
    // const names = users.map(user => user.name);
    // console.log(names); // ["Sunil", "Amit"]


 // ************************************************************************ map() with chaining *********************************************************************** 

const result = [1, 2, 3, 4]
  .map(n => n * 2)  // [2,4,6,8]
  .map(n => n + 1);

console.log(result); // [3, 5, 7, 9]