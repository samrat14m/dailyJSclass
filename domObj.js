// console.log(document)
// console.log(document.documentElement) //html

// console.log(document.body.childNodes) //iterable
// let nodeList = document.body.childNodes

// for (let item of nodeList) {
//     console.log(item)
// }

// console.log('child NODES',document.body.childNodes) // all the nodes, including text nodes

// console.log('children',document.body.children) // all element nodes


// let nodeList = document.body.childNodes

// let elementList = document.body.children

// console.log(document.body.firstChild)
//firstChild, lastChild -> nodeList

// console.log(document.body.firstElementChild) //h1
// console.log(document.body.lastElementChild.previousElementSibling.lastElementChild) //ul


//
// console.log(document.body.firstElementChild.nextElementSibling)


// console.log(document.getElementById('test'))


// let element = document.querySelector('li')

// console.log(element)

// console.log(document.querySelectorAll('li'))

// console.log(document.getElementsByTagName('li'))



// console.log(document.getElementById('test').innerText) //this is bold with id test
// console.log(document.getElementById('test').innerHTML) //this is <b>bold</b> with id test

// creation
// let newHeading = document.createElement('h2')

// // giving attributes
// newHeading.className = 'newHeading'

// // give it some value
// newHeading.innerText = 'This is the new heading'


// // insert it inside the DOM, append

// // document.body.append(newHeading) //at the end of the body

// document.body.prepend(newHeading)


// nodeLists
// childNodes, also has formatting text nodes
//children
// console.log(document.body.children)

