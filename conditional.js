// Decision making

// if -else
let a=10;
if(a==10){
    // success
}
else {
    //failure
}

//if else ladder
let b=-10;
if(b<0){
    console.log("Negative");
}else if (b==0){
    console.log("Zero");
}else{
    console.log("Positive");
}

//Multiple conditions
// switch-case statement
let gender = "m";
switch(gender){
    case "m":
        console.log("Male");
        break;
    case "f":
        console.log("Female");
        break;
    case "t":
        console.log("Transgender");
        break;
    default:
        console.log("Wrong Input");
        break;        
}

//practise question
let age = 23;
if(age<18) console.log("Child");
else if (18<=age<40) console.log("Adult");
else console.log("Old Age");

//using switch case
switch(true){
    case(age<18):
        console.log("Chlid");
        break;
    case(18<=age<40):
        console.log("Adult");
        break;
    default:
        console.log("Senior Citizen"); 
        break;      
}

// Take a number print a Day
// 0:monday 5:sunday
let num = 0;
switch(true){
    case(num==0):
        console.log("Monday");
        break;
    case(num==1):
        console.log("Tuesday");
        break;        
    case(num==2):
        console.log("Wednesday");
        break;
    case(num==3):
        console.log("Thursday");
        break;
    case(num==4):
        console.log("Friday");
        break;
    case(num==5):
        console.log("Saturday");
        break;
    case(num==6):
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Input");
        break;    
}

//loops
//Iteration Statements

// Loops -> for, while, do-while,

for(let i=1; i<=5 ; i++){
    console.log(i*i);
}

//print 19 table
for(let i=1; i<=10 ; i++){
    console.log("19 * " + i + "= " + (19*i));
}