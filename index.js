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
person["nepostojeciProperty"] = "IDK"
console.log(person.name, person["age"], person["nepostojeciProperty"], "OVO ti je Objekat");

let selectedColors=['red','blue'];
selectedColors[2]=1;

selectedColors[5]="babylon"
console.log(selectedColors);

function greet (name, lastName) {
    console.log("Hello "+name+" "+lastName);
}
greet("John","Smith");

function square(number) {
    return number * number;
}

function square2(number) {
    console.log(number * number, "Ovo pozivam iz square2 funckie");
    return number* number;
}

const zbir = function(param1, param2) {
  return para
}

square2(10);


numba = 4;

const vratiMiOvde = square2(11);

console.log("VRATI MI OVDE", vratiMiOvde);

console.log(square(2), "Ovo e square funckia");