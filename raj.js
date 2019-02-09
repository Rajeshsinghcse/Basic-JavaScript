
/**********************************BASIC JAVASCRIPT CODE ******************************************/

// hello world
console.log('hello world welcome to javascript');

// variables and data types
var firstName='rajesh  '; // vaiables declaration        
console.log(firstName);

// data types 
var lastName='singh';  // string data types
var age=28;      // number dat types
var fullAge=true;   // boolean data types
console.log(age);
console.log(fullAge);
var job   // undefined data types
console.log(job);

//variables mutation and type coercion

// type coercion
console.log(firstName+''+age);  // ' ' it denotes types coercion, it add string and number.
var ismarried,job1;
job1='teacher';
ismarried=false;
console.log(firstName+lastName+' is '+age+' year old. '+' He is '+job1+' He is  married ?'+ismarried);

// type mutation
age='twenty five'; // here the age value will change with new value.
job1='hacker';     // here the job value will also change with new value.job are undefined and job1 have value. 
var middleName=prompt('enter the middle name');
console.log(firstName+middleName+lastName+' is '+age+' year old. '+' He is '+job1+' He is  married ?'+ismarried);

//operators
// basic operator
var year,yearjohn,yearmark;
now=2018;
agejohn=28;
agemark=33

// math operator
yearjohn=now-agejohn;
yearmark=now-agemark;
console.log(yearjohn);
console.log(yearmark);
console.log(now+2); // addition
console.log(now-4);  // substration
console.log(now*2);  // multiplication
console.log(now/8);   // divison

// logical operator
var johnolder=agejohn<agemark
console.log(johnolder); // boolean type 
var johnolder=agemark<agejohn
console.log(johnolder); // boolean type 

// typeof operator
console.log(typeof johnolder);
console.log(typeof agejohn);
console.log(typeof 'mark is older than john');  // string
var x;
console.log(typeof x); // undefined

// operator precedence
var now=2018;
var yearjohn=1989;
var fullAge=18;

// multiple operator
var isfullage=now-yearjohn>=fullAge;
console.log(isfullage);

// grouping 
var agejohn=now-yearjohn;
var agemark=35;
var average=(agejohn+agemark)/2;
console.log(average);

// multiple assignments:
var x,y;
x=y=(3+5)*4-6;
console.log(x,y);

// more operator
x*=2;
console.log(x);
x+=10;
console.log(x);
x--;
console.log(x);

//***************************************//
//codding challenge solution 1:

// if/Else statements
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
/*******************/
var ismarried=true;
if(ismarried){
    console.log(firstName+' is married');
}else{
    console.log(firstName+' will hopefully marry soon');
}

// solution of codding chalenge 1:
var massmark=78;
var heightmark=1.69;
var massjohn=92;
var heightjohn=1.95;
var bmimark=massmark/(heightmark*heightmark);
var bmijohn=massjohn/(heightjohn*heightjohn);
if(bmimark>bmijohn){
    console.log('mark\'s bmi is higher than john\'s');
}

// boolean logic
var firstName= 'john';
var age=20;
if(age>=13){
    console.log(firstName+' is a big boy');
}else if(age>=13 && age<20){
    console.log(firstName+' is a teenager');
}else if(age>=20 && age<30){
    console.log(firstname+' is young man');
}else{
    console.log(firstName+' is a man');
}

// ternary operator and switch statement:
// ternary operator
var firstName='ashish';
var age=14;
age>=18?console.log(firstName+' drinks beer'):console.log(firstName+' drinks juice');
/*******************/
var drink=age>=18?'beer':'juice';
console.log(drink);
/*******************/
if(age>=18){
    var drink='beer';
}else{
    var drinks='juice';
}

// switch statement
var job='instructor';
switch(job){
    case 'instructor':
    case 'teacher':
        console.log(firstName+' teaches the code');
        break;
    case 'driver':
        console.log(firstName+' drives the cab in noida');
        break;
    case 'designer':
        console.log(firstName+' design the websites');
        break;
    default:
        console.log(firstName+' does something else');
}

