// cookies, localStorage, sessionStorage


// cookies ---- small strings of data. authentication, authorization

// 4Kb

// document.cookie = "user=Aditi"
// document.cookie = "id=2"
// document.cookie = "admin=true;max-age=-1"

// console.log(document.cookie)

// document.cookie = "firstName=Rahul;max-age=1"




// -----------local storage, session ------5Mb

// localStorage.setItem(key, value)

//in localStorage both key and value MUST be strings
// localStorage.setItem('greetings', 'hi')
// localStorage.setItem('name', 'rahul')

// // console.log(localStorage.getItem('greetings'))

// // localStorage.removeItem('greetings')

// setTimeout(() => {
//     localStorage.clear() //remove everything inside the localstorage
// }, 2000)


//1. difference between == and ===
// 1 == '1'
// 1 === '1'

// 2. what is spread operator ?
//
// let arr = [1,2,3]
// let arr2 = [...arr, 4,5]

// 3. difference between var, let and const

// function hi() {
//     var a = 10
// }
// console.log(a)

// 4. what is execution context- abstract concept

// 5.what are closures

//6. call, apply, bind

// 7. what are prototypes

// 8. what are first class functions?

// 9. what are promises and why we need them ?

// 10. what is the purpose of async and await keywords?
// easier to read syntax when compared to promises

// 11. what are function constructor funcs?

// 12. What is hoisting

//13. what is DOM?

// 14. What is the difference between null and undefined?

// 15. what is not defined

// 16. what are pure functions

// function add(a,b) {
//     return a+b
// }
// add(3,4) //7
// add(3,4) //7
// add(3,4) //7
// add(3,4) //7
// add(3,4) //7
// var x = 10
// function impureAdd(a, b) {
//     x++;
//     return a + b + x
// }
// console.log(impureAdd(3, 3)) //17
// console.log(impureAdd(3, 3)) //18


// 17. what is an event loop, what is call stack

// 18. what is prototype chaining?

// 19 what is the use of setTimout

// 20. what is callback hell
// nested callbacks

// 21. what is temporal dead zone


// 22. what are anonymous functions?

// 23. what are higher order functions, what are callback functions


// function higherO(cb) {
//     cb()
// }

// higherO(function(a,b){
//     return a+b
// })

// let p1 = {
//     firstName: 'Rahul',
//     lastName: 'Gupta'
// }

// let p2 = {
//     firstName: 'Aditi',
//     lastName: 'Sharma'
// }

// function sayHi() {
//     console.log('Hi', this.firstName, this.lastName)
// }

// // sayHi.call(p1) //hi rahul gupta
// // sayHi.call(p2) //hi aditi sharma

// // sayHi.bind(p1)()

// let hiRahul = sayHi.bind(p1)
// hiRahul()