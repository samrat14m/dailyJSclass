// 10TH March 2022
// Types of function
//normal function
f1() // it works fine as we have stored the function definiton 

function f1() {
    console.log("Normal function definition")
}
console.log(f1)

//anonymous function 
// we assign a function to variable

// ***  f2()  -> we are invoking f2()
// we see a error because we have not defined the value of var f2

var f2 = function() {
    console.log('anonymous function')
}
console.log(f2) // function definition can be seen
f2() // it works fine as we have stored the definition


// Arrow function ***
// it works litte similar to anonymous function
var f3 = () => {
    console.log('this is an arrow function')
}
console.log(f3)
f3()

// *** arrow function and anonymous function do not get hoisted

// example of an arrow function 
var add = (a, b) => {
    return a + b;
}
console.log('adding using arrow function', 4, 5, 'equals', add(4, 5))

// shorter version of arrow function
// implicit return; Only when the single statement is inside the function
var mul = (a, b) => a * b;
console.log('shorter version', mul(3, 4))

// extreme shorter version
// when we have one parameter, the paranthesis can be removed
var mul2 = a => 2 * a;
console.log('shortest function', mul2(7))

// shadowing in JS
// when the same variable is intialized inside a function
// it uses the local functional memory and uses that variable
// example
var x = 10

function a() {
    var x = 20

    function b() {
        var x = 30
        console.log(x, 'b')
    }
    b()
    console.log(x, 'a')
}
console.log(x, 'global')
a()



// ARRAYS --------------------------------------------------------------------------------------------------------------------- 


console.log('ARRAYS :')
    //

var arr = [1, 2, 'hi', 'bye', [4, 5, 6]]
console.log(arr)
console.log(arr.length) //property of array used to find the length of array
console.log(arr[4][1]) // 2D array accesing 5

//Array methods--------------->

//  (1) push() -> adds element to the END of the array
//           -> it Returns the new length of array which we can store in a variable
//           -> we can pass MULTIPLE arguments

//  (2) pop()  -> removes the last element of the array
//           -> it Returns the popped element
//           -> it DOES NOT take any arguments

// exmaple problem

fruits = ['apple', 'banana', 'orange', 'kiwi']

fruits.pop();
console.log(fruits) // apple, banana , orange
console.log(fruits.pop()) // orange
console.log(fruits) // apple , banana
console.log(fruits.push('strawberry')) // 3
console.log(fruits.push('melon')) // 4
console.log(fruits) // apple, banana, strawberry, melon

//  (3) shift()  -> Removes element form the start
//               -> it returns the shifted/removed array
//               -> takes no argument

// (4) unshift() -> Adds element from the start 
//               -> it returns the new length of array
//               -> multiple args can be passed

// (5) indexOf() -> 1ST Arg : Returns the first index at which a given element is found
//               -> 2ND Arg : it specifies at which index we wish to start the search
let num = [1, 2, 3, 4, 5, 2, 3, 5, 1, 5]
console.log('index of first 5 is:', num.indexOf(5))

console.log('index of 5 first five starting from index 5:-', num.indexOf(5, 5))

// (6) slice()  -> Its gives the part/slice of an array
//              -> It takes in 2 args
//              -> Only starting index is inclusive
//              -> Original array remains unchanged
//              -> It works for negative indices as well
veg = ['palak', 'gobhi', 'aloo', 'onion', 'matar']
let res = veg.slice(1, 3)
console.log(res)
let newRes = veg.slice(-3)
console.log(newRes)


/*
let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']

console.log(fruits.push('strawberry', 'papaya', 'pear'))
console.log(fruits.pop())
console.log(fruits.shift())
console.log(fruits.unshift('jackfruit'))
let result = fruits.slice(0, 3)
console.log(result)
 */
// 10
// pear
// apple
// 9
// jackfruit, banana, orange