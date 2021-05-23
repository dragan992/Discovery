//This is my first JavaScript code
console.log("Hello World");

//let name="Mosh";
//console.log(name);

//let firstName="Mosh;"
let lastName="Hamedani";

let interestRate=0.3;
interestRate=1;
//console.log(interestRate);

let name="Mosh";
let age=30;
let isApproved=false;
let firstName=undefined;
let selectedColor=null;

let person={
    name:"Mosh",
    age:30
};

console.log(person);

let selectedColors=['red','blue']
selectedColors[2]=1;
console.log(selectedColors);

function greet (name, lastName) {
    console.log("Hello "+name+" "+lastName);
}
greet("John","Smith");

function square(number) {
    return number * number;
}

console.log(square(2));