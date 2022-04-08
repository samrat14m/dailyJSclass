// let promiseA = new Promise((resolve, reject) => {
//     resolve('A')
// })

// console.log('Me first')

// setTimeout(() => {
//     console.log('timeout')
// }, 0)

// promiseA.then((result) => {
//     // console.log(result)
//     console.log('Me second')
// })

// console.log('Me third')


// let promiseA = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('A')
//     }, 1000)
// })

// let promiseB = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('B')
//     }, 2000)
// })

// console.log('Me first')
// promiseA.then((data) => { console.log(data) })
// console.log('Before B')
// promiseB.then((data) => { console.log(data) })
// console.log('Me last')

// console.log('Me first')
// promiseA.then((data) => {
//     console.log(data)
//     console.log('Before B')
// })
// promiseB.then((data) => {
//     console.log(data)
//     console.log('Me last')
// })

// function printLetter(letter) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(letter)
//         }, 1000)
//     })
// }

// function prinAlphabets() {
//     printLetter('A')
//         .then((result) => {
//             console.log(result)
//             console.log('Before B gets resolved')
//             return printLetter('B')
//         })
//         .then((result) => {
//             console.log(result)
//             console.log('Before C gets resolved')
//             return printLetter('C')
//         })
//         .then((result) => {
//             console.log(result)
//         })
// }
// prinAlphabets()

//------ async await - "synctactic sugar" (simpler syntax to write promises) - make your code very readable

// function printLetter(letter) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log(letter)
//             resolve(letter)
//         }, 1000)
//     })
// }

// async function prinAlphabets() {
//     let ans1 = await printLetter('A')
//     console.log(ans1)
//     console.log('Before B gets resolved')
//     let ans2 = await printLetter('B')
//     console.log(ans2)
//     console.log('Before C gets resolved')
//     let ans3 = await printLetter('C')
//     console.log(ans3)
// }
// prinAlphabets()

// console.log('first')

// let pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('second')
//     }, 1000)
// })

// // pr.then((data) => {
// //     console.log(data)
// //     console.log('third')

// // })

// async function fun() {
//     console.log('first')
//     let result = await pr
//     console.log(result)
//     console.log('third')
// }

// fun() //first, second, third



// ----------Prototypes

// let obj = {}
// console.log(obj)
// let animal = {
//     eats: true,
//     moves: true,
//     walk: function () {
//         console.log('I walk')
//     }
// }

// let rabbit = {
//     jumps: true,
//     carrot: 'yes'
// }

// let mouse = {
//     hasTail: true,
// }

// rabbit.__proto__ = animal //rabbit inherits animal object
// mouse.__proto__ = animal //mouse inherits animal object
// console.log(rabbit.eats)
// rabbit.walk()
// console.log('rabbit', rabbit)
// console.log('mouse', mouse)

// console.log(mouse.isTall)
// console.log(rabbit.moves) // inherited property
// console.log(rabbit.jumps)// own property

// hasOwnProperty returns boolean value
// console.log(rabbit.hasOwnProperty('moves')) // false
// console.log(rabbit.hasOwnProperty('jumps')) // true


// let keys = Object.keys(rabbit)
// console.log(keys)

// Object.keys DONT give me inherited keys


// for in loop. --------> provides BOTH own key and inherited key

// for (let key in rabbit) {
//     if (rabbit.hasOwnProperty(key)) {
//         console.log(key, 'OWN')
//     } else {
//         console.log(key, 'INHERITED')
//     }
// }


// -------constructor functions
// they are just like regular funcitons. There 2 conventions :
// 1. They are named with a capital first letter
// 2. They should be called only with the "new" keyword

// constructor function returns an object

// function User(name) {
//     // this = {} (implicit)
//     this.firstName = name
//     this.isAdmin = true
//     // return this (implicit)
// }

// let result = new User('Rahul')

// console.log(result)

// let animal = {
//     eats: true,
//     moves: true,
//     walk: function () {
//         console.log('I walk')
//     }
// }

// function Rabbit(name) {
//     this.petName = name
//     this.jumps = true
// }

// Rabbit.prototype = animal //The objects that will be created by Rabbit constructor function will inherit from animal object
// let rabbit = new Rabbit('Tom')
// console.log(rabbit)