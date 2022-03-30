// ARRAY METHODS CONTINUE ------------>>>>

// (7) includes() -> takes one argument
//                -> returns boolean value true or false

//*  (8) lastIndeOf()-> returns the last index of arg

//***(9) findIndex() -> returns the index of the first element in the 
//                array that satisfies the provided testing function
//                  ->runs till it gets first true

// ***** CALLBACK function*****//
// whenever we give a function as an argument to a function

let arr = [1, 2, 3, 4, 5, 2, 1, 5]

function greaterThan4(element) { // returns a boolean value
    return element > 4
}
console.log(arr.includes(4))
console.log(arr.lastIndexOf(5))
let res = arr.findIndex(greaterThan4) //using a callback function
console.log(res) // index of arr[4]=5>4 ***4**

//  (10) concat()  -> takes two array as arg
//                 -> returns the concatenated arr
let arr1 = ['a', 'b', 'c']
let arr2 = [1, 2, 3]
let arr3 = arr1.concat(arr2)
console.log(arr3)

//  (11) toString() ->no args
//                  -> converts every element of array to string

//  (12) join()   -> used to return all element

let names = ['sam', 'pam', 'ram']
console.log(names.join('-'))
console.log(names.join())

//**these all take callback function */

//  (13) some()  -> checks if array contains some instances of given condition

//  (14) every() -> checks if every element of array satisfies the given condition

let ar = [1, 2, 3, 4, 5]

console.log(ar.some(y => y < 2)) // true
console.log(ar.every(y => y > 6)) // false

//  (15) length -> gives the length of array/string

//* (16) filter() -> returns new arr with elements satisfying the given condition

let result = ar.filter(e => e > 3)
console.log(result)

//  (17) map() -> returns a new array with result of condition
//             -> it runs for every element

let double = ar.map(e => e * 2)
console.log(double)

// (18) forEach() -> executes the callback function for every element

//* let ar = [1, 2, 3, 4, 5]
// usinf forEach()

arr.forEach(e => {
    console.log(e * 2)
})

//** Q.. Diff btw forEach() and map() ?? */

// 
let sum = 0
ar.forEach(e => {
    sum += e
})
console.log('sum of the array:', sum)

//* (19) reduce() -> it runs for all element
//*               -> it reduces the array to a single value
//** it has accumulator, current, initial value */
//** reduce(callBack, initial value of Acc) */
//** */ Callback takes two parameter (accumulator, current)
//*  ar = [1, 2, 3, 4, 5]
//*  finding sum using the reduce function
let initialValue = 0
let sumArr = ar.reduce(function(accumulator, current) {
    accumulator += current
    return accumulator
}, initialValue)
console.log('sum using reduce():', sumArr)

//*  ar = [1, 2, 3, 4, 5]

let sqr = ar.map(e => e * e) //squaring the array
let evenSqr = sqr.filter(e => e % 2 === 0) // filtering the even squares
let sumEvenSqr = evenSqr.reduce((acc, curr) => { // finding the sum of the squared array
    acc += curr
    return acc
}, 0)
console.log(sumEvenSqr)

//** these methods can be chained and used
let ses = ar.map(e => e * e).filter(e => e % 2 === 0).reduce((acc, curr) => { return acc += curr }, 0)
console.log(ses)

//**QUESTION homework*/
let salary = [100, 200, 300, 400, 500, 600]

// filter out salaries greater than 300

// double the filtered salaries

// find out the total salary

let newSal = salary.filter(e => e > 300).map(e => e * 2).reduce((acc, curr) => { return acc += curr }, 0)
console.log('the combined double salary is:', newSal)