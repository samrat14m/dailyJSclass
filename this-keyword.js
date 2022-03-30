// THIS keyword ->
/** refers to current object address
    from where it is called */
// value of "this" is defined during run-time

console.log(this) // windows{}
    // by default this refers to global object --> windows object
console.log('example------------------>')
    // IMP example -------------------->

function sayHi() {
    console.log(this);
    console.log(this.type, '--->', this.firstName)
}

let user = {
    firstName: 'Samrat',
    age: 25,
    type: 'userObject'
}

let admin = {
    firstName: 'Kritika',
    age: 23,
    type: 'adminObject'
}

user.funcUser = sayHi // creating a key with func with value of sayHi()
admin.funcAdmin = sayHi

user.funcUser() // Samrat
admin.funcAdmin() // Kritika

// in an arrow function "this" refers to the WINDOW object always

var objName = 'GLOBAL'

let userObj = {
    objName: 'USER',
    print: () => {
        console.log(this.objName)
    }
}

userObj.print() // GLOBAL 
    // this prints the global object

//-----------

let obj = {
    who: 'World',
    greet: function() {
        console.log(`Hello, ${this.who}`)
    },
    farewell: () => {
        console.log(`Goodbye, ${this.who}`)
    }
}

obj.greet() // Hello, World
obj.farewell() // Goodbye, undefined