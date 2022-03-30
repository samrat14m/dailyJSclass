// 15-03-2022
// OBJECTS
// stores properties as key:value pair
// key ---> string only(automatically converts)
// value ---> any data type

//computed properties

let fruit = 'kiwi-'

let obj = {
    name: 'Rahul',
    age: 24,
    [fruit + 'isThere']: true

}
console.log(obj)

console.log('age' in obj) //boolean value , to check the age key in

for (let key in obj) { // loops in object --> for in  loop
    console.log(key, obj[key])
}
// practise question 1
let salaries = {
    John: 100,
    Ann: 160,
    Peter: 130
}
let total = 0
for (let key in salaries) {
    let sum = salaries[key]
    total += sum
}
console.log(total)


// practise question 2
let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}
for (let item in menu) {
    if (typeof(menu[item]) === 'number') {
        menu[item] *= 2
    }
}
console.log(menu)

// Object Referencing and copying

let obj1 = {
    name: 'Rahul',
    age: 23,
    isHappy: true
}
let obj2 = {}

Object.assign(obj1, obj2)
console.log(obj2)

// Spread Operator {...} three dots
// ex: {...obj1}

let arr1 = [0, 6, 1]
let arr2 = [3, 4, 5]

let arr3 = [...arr1, ...arr2]
console.log(arr3)