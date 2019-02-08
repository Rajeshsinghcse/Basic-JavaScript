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










var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}
