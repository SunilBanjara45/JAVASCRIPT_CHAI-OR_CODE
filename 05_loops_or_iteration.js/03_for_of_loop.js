//? forof loop =>

//? forof loop in array =>

const arr =[10,20,30,40,50]
for (const key of arr) {
    console.log(key)
}

// const arr = [10, 20, 30, 40, 50]
// for (const [key, value] of arr.entries()) {
//     console.log(key, ':', value)
// }

// // only keys
// for (const i of arr.keys()) {
//     console.log(i)
// }
// // only values
// for (const i of arr.values()) {
//     console.log(i)
// }
// for (const i of arr) {
//     console.log(i)
// }

// const greetings ="Hello Good Morning"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// } 

//?***********************************************************************************
//? forof loop in Map
//? Map => Map is ordered unique key value pair.
// It ignore duplicate key value pair, not given error.
// Because map by default iterates over entries ([key, value] pairs).

// const map =new Map()
// // console.log("object is",map)  // object is Map(0) {}
// map.set('IN',"INDIA")
// map.set('USE','UNITED STATE OF AMERICA')
// map.set("FR","FRANCE")
// map.set('AUS',"AUSTRALIA") 
// map.set('aus',"australia")

// console.log(map)

// for (const i of map) {
//     console.log(i)
// }
// // keys
// for (const key of map.keys()) {
//     console.log(key);
// }
// // values
// for (const value of map.values()) {
//     console.log(value);
// }

// // destructure of array
// const a=[1,2,3]
// for(const i of a) {
//     console.log(i)
// }

// for (const [key, value] of map) {
//     console.log(key,':',value)
// }

// //**********************************************************************************
// //? forof loop is not working for object. check another loop in next file.
// //? object is not iterable 

// const myObject={
//     game1:"NFS",
//     "game2":"GFS"
// }

// for (const [key,value]of myObject) {
//     console.log(key,':',value)
// }

// //**************************** .entries() method *****************************************************

const colors = ["red", "green", "blue"];

for (const [index, color] of colors.entries()) {
    console.log(`Index: ${index}, Value: ${color}`);
}
