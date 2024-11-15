//? forin loop in object

const myObject ={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}

// for (const key in myObject) {
//     console.log(key)    
// }

/* O/P
js
cpp
rb
*/

// for (const key in myObject) {
//     console.log(myObject[key])    
// }
/* O/P
javascript
c++
ruby
*/

// for(const key in myObject) {
//     console.log(`${key} is shortcut for ${myObject[key]}`)    
// }

/*
js is shortcut for javascript
cpp is shortcut for c++
rb is shortcut for ruby
*/ 

//? ********************************************************************************
//? forin loop in array

const arr = ['js',"rb","py","cpp","c","java"]

// for (const key in arr) {
//    console.log(key) // it prints key 0 1 2 3 4 5
// }

// for (const key in arr) {
//     console.log(arr[key]) 
//  }
 /*
 O/P =>
 js
rb
py
cpp
c
java
*/

//? ********************************************************************************
//? forin loop in Map
//? map is not iterable 

// const map =new Map()
// map.set('IN',"INDIA")
// map.set('USE','UNITED STATE OF AMERICA')
// map.set('FR',"FRANCE")
// map.set('AUS',"AUSTRALIA")

// for (const key in map) {
//     console.log(map[key]) 
// }


//? map is not iterable in forin loop
//? object is not iterable in forof loop