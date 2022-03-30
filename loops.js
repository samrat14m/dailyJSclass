//loops
//Iteration Statements

// Loops -> for, while, do-while,

for(let i=1; i<=3 ; i++){
    console.log(i*i);
}

//print 19 table
for(let i=1; i<=10 ; i++){
    console.log("19 * " + i + "= " + (19*i));
}
// for loop 
let s=0;
for(;s<4;){
    console.log("The value of s is: " + s);
    s++;
}

//while looop
let k=0;
while (k<4) {
    console.log("The value of k is: " + k);
    k++;
}

//do-while loop
let d=0;
do{
    console.log("The value of d is: " + d);
    d++;
}while(d<3)

//nested for loops
for(let x=0;x<3;x++){
    for(let y=0;y<3;y++){
        console.log("Val of x & y is:" + x +" " + y);
    }
}
