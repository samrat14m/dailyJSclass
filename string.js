// Strings --> 14/03/2022

// it is a primitive data type
// used to store textual data

//ways of writing strings in JS

let single = 'single-quote'
let double = "double-quote"

let backticks = `backtick-string`

let amount = 200

let billMsg = `please pay Rs - ${amount} here `
    // template literals
console.log(billMsg)

// writing in a multiple line (\n -> for new line \t -> for a tab space)

let guest = 'Guests:\n *Samrat\n *Saurabh\t *Abhishek'
console.log(guest)

// escape characters

console.log("hello from  \"yellow\" color ")
console.log('hello from  "yellow" color')

// Accessing string characters
// [] or charAt()
let dummy = "samrat"
console.log(dummy.length);
console.log(dummy[2]);
console.log(dummy.charAt(4));

// Strings are IMMUTABLE in JS
// we can not change individual characters
// we can change the whole string in one go
// spaces are also counted and indexed

// let dummy = "samrat"
dummy[2] = 'p' // this value doesn't get assigned
console.log(dummy[2])

// concatenation of strings, { + , concat()}
// str1.concat(str2)
// str1.concat( " ", str2) // also takes mutliple arguments
console.log('We are now studying String Methods');
/* STRING METHODS */
str = "My Name is Saurabh Maurya"

//  (1) indexOf()
// it takes 2 arguments first to search for the word
// second to specify from where we want to start the search
// if we cant get the char/word we return -1 or else the index of first instance
console.log(str.indexOf('is')); // 8
console.log(str.indexOf('a', 10)); // 12

//  (2) includes()
// return a boolean value
// it takes 2 arguments first to search for the word
// second to specify from where we want to start the search
console.log(str.includes('S')); //true

// (3) slice()
// returns the part of a string
// str.slice(0,5)
// str.slice(-4,-1)

// (4) substring()
// works same as slice()
// it doesn't work for negative indices

// (5) split()
// this method converts string to an array
// join() only works for array
let arrIntro = str.split(' ')
console.log(arrIntro.join('\n'))

// EXAMPLES
// let greet = 'Hi how are you' => 'you are how Hi'
// greet.slice(' ').reverse().join(' ')



/** const means we cant reassign the value, but the value can change using in-built methods */
// (6)(7) replace(), replaceAll()
const tempstr = 'Sam is a good guy. Sam is working as a developer'

console.log(tempstr.replace('Sam', 'Rahul')) // replace only the first occurence
console.log(tempstr.replaceAll('Sam', 'Rahul')) // replace all the occurences of Sam with Rahul

// (8) trim()
// it removes only the initial and the ending spaces which are unintentional
// str.trim()
// *  saurabh  maurya    * -> *saurabh maurya*


console.log('OBJECTS')

//OBJECTS---> {} 

// NON PRIMITIVE Data Type
// it is a data type in JS
// stores properties as key-value pair
// property -> { key: value}
// key must be a string only
// val can be anything
// objects can be nested


let user = {
    name: 'Saurabh',
    isAdmin: true,
    array: [1, 2, 3, 4],
    obj: {
        insideObj: 'Inside the object'
    }
}

console.log(user.array[2])
console.log(user.obj.insideObj)