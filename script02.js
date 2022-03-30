let a = 5; //0101
let b = 9; //1001
console.log(a | b); //1101 = 13
console.log(a & b); //0001 = 1
console.log(a ^ b); //1100 = 12 
console.log(a << 1); // 1010 = 10
console.log(a >> 1); // 0010 = 2



console.log(a || b); // first value 5
console.log(a && b); // second value 9

let age = 23;
if (a < 18) console.log("not eligible to vote");
else console.log("eligible to vote");
/* to find no of digits 5 in  a number */
let N = 196545;
let count = 0;
while (N >= 1) {
    if (N % 5 === 0 && N % 10 !== 0) count++;
    N /= 10;
    N = parseInt(N);
}
console.log(count);

let i = 1;
while (3 >= i) {
    let j = 1;
    while (i >= j) {
        console.log("*" + " ");
        j++;
    }
    console.log("");
    i++;
}

// functions

// functions with parameters
function add(a, b) {
    console.log(a + b);
}

add(2, 3);
add(10, 15);
//arguments: the value which we pass to a variable 
//parameters: the value of var which we use pass and to do some operations 

function mul(x, y) {
    return x * y;
}
let result = mul(3, 4);
console.log(result);