// PROTOTYPE, ASYNC AWAIT

// event loop gives priority as follows
// microtask queue has higher priority than the callback queue

let promiseA = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('A')
    }, 1000)
})

let promiseB = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('B')
    }, 2000)
})


// here the execution is asynchronous behaviour
//console.log('first')
//promiseA.then((data)=>{console.log(data)})
//console.log('before B')
//promiseA.then((data)=>{console.log(data)})
//console.log('last')

// we can make this synchoronous
//console.log('sync behaviour\n');
//console.log('first')
//promiseA.then((data)=>{
//    console.log(data)
//   console.log('before B')
//})
//promiseB.then((data)=>{
//    console.log(data)
//    console.log('last')
//})

// but this gets a little complicated
// hence we use async await
// await can be only used with async functions
// its a similar but better way to write promises


// ------------Prototypes
let obj = {}
console.log(obj)
console.log(obj.__proto__)

// ------- constructor functions
// just like regular functions
// 2 conventions :-
// 1) they are named with a first letter as capital
// 2) they should be called only iwth the "new" keyword
// it automatically returns object referenced by "this" 

// Constructor functions
function User(name){
    this.firstName = name
    this.isAdmin = true
}


 let user1 = new User('Rahul')
 console.log(user1)


