// Date is a Object
// let myDate =new Date()
// console.log(myDate.toString())
// Sun Aug 25 2024 13:58:43 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()) // Sun Aug 25 2024
// console.log(myDate.toLocaleString()) // 8/25/2024, 1:58:43 PM

// let myCreateDate =new Date(2023,0,23) // month always start from 0 in JS.
// let myCreateDate1 =new Date(2023,1,23) 
// let myCreateDate2 =new Date(2023,0,23, 5,3) 

// console.log(myCreateDate.toDateString())
// console.log(myCreateDate1.toDateString())
// console.log(myCreateDate2.toLocaleString())

// let myTimeStamp=Date.now()

// console.log(Date.now())
// console.log(myTimeStamp)
// // console.log(myCreateDate2.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocalString('default',{
    weekDay:"long",
})