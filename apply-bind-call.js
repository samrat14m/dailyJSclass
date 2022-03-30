// 22-03-2022
// call, apply and bind methods
// used to re-bind the value of this to object passed
// ------------------------>>>>>>>>>>>>>

// (1)  call ()
// syntax -> func.call(obj)
// if the func is called from another obj (lets say obj1) --->
// syntax -> obj1.func.call(obj2)
let user = {
    name: 'Samrat',
    sayHi() {
        console.log('Hii! ' + this.name + ' from ' + this);
    },
    value(a, b) {
        console.log(this.name)
        console.log(a, b)
    }
}

let admin = {
    name: 'Prateek'
}

user.sayHi() // functioned call from user object
console.log('<---now from admin obj uing call--->')
user.sayHi.call(admin)
user.value.call(admin, 2, 3)


// (2) apply ()
// func.obj1.apply(obj2)
// only difference is in the way they take the arguments
// call takes directly whereas apply takes an array
console.log('apply method')
user.value.apply(admin, [3, 4])


// (3) bind ()
// it works same as call() and apply()
// it returns a function

function greet() {
    console.log('good evening!!' + this.name);
}

let newGreet = greet.bind(admin);
newGreet()

// another way to shorten the above code
greet.bind(user)()

// ---Maps and Sets
//kind of like objects but key can be any data type like boolean,num,string,array
console.log('Maps and Sets \n \n \n<----->')

let firstMap = new Map()

firstMap.set(1, 'num1')
firstMap.set([1, 2, 3], 'array')
firstMap.set(true, 'boolean')
firstMap.set(234.5, 'notAstring')

console.log(firstMap)
console.log(firstMap.size)
console.log(typeof(firstMap.true)) //
firstMap.delete(true, 'deleting the boolean key')
console.log(firstMap)
firstMap.clear()
console.log(firstMap)
console.log(firstMap.size)