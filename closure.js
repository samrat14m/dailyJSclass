// function outer() {
//     var num = 5
//     function inner() {
//         console.log(num)
//     }
//     inner()
// }

// outer()


// function outer() {
//     var num = 5
//     function inner() {
//         // debugger
//         console.log(num)
//     }
//     num = 7
//     return inner
// }
// // outer()()
// var result = outer()
// result()


// function extraOuter() {
//     var a = 6;
//     return function outer() {
//         var b = 1
//         return function inner() {
//             // debugger
//             console.log(a, b)
//         }
//     }
// }

// extraOuter()()()

// function makeCounter() {
//     let count = 0;
//     return function () {
//         return count++
//     }
// }

// let counter1 = makeCounter()
// let counter2 = makeCounter()

// console.log(counter1()) //0
// console.log(counter1()) //1
// console.log(counter1()) //2

// console.log('counter2', counter2()) //0

// function cb() {
//     console.log('hi after 3 seconds')
// }

// setTimeout(function () {
//     console.log('hi')
// }, 3000)

// console.log('print after')

// function fun() {
//     var a = 10

//     setTimeout(function () {
//         console.log(a)
//     }, 3000)

//     console.log('Inside fun')
// }

// fun()

// setTimeout(function () {
//     console.log(1)
// }, 1000)

// // 1,2,3,4,5 ...


// function loopTime() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, i * 1000)
//     }
//     console.log('inside loopTime')
// }
// loopTime()


function loopTime() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x)
            }, x * 1000)
        }
        close(i)
    }

    console.log('inside loopTime')
}
loopTime()



