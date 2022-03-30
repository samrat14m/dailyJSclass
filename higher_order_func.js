// 25-03-2022
// Higher Order functions
// first class functions -> in JS functions are treated as a variable

// greetings() // here it is undefined

const greetings = function(){
    console.log('hello');
}

greetings() // here it works

function random(callBack){
    callBack();
}

random(greetings);

// greetings ---> callBack function
// random ---> Higher Order function

// Higher Order functions takes callBack funcs as an argument
// (or) return a funcs
// currying