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


let person={
    name:"Mosh",
    age:30    
};
person["nepostojeciProperty"] = "IDK";
console.log(person.name, person["age"], person["nepostojeciProperty"], "OVO ti je Objekat");


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

// ARRAYS 


let selectedColors=['red','blue'];
selectedColors[2]=1;

selectedColors[5]="babylon";
selectedColors[0]=33;
console.log(selectedColors);
console.log(selectedColors[4]);


let arr = ["stringove", 23, false, undefined, null];

let automobili = ["mercedes","opel","ferrari", ["plava","crvena","zelena"], { username: 5, password: "programercina"}];


console.log({ username: 5, password: "programercina", ispisiIme: function() {console.log(y[propertyName], "oVO JE IZ FUNKCIJE CONSOLE LOG");}}.username == automobili[4].username); // { username: "Brix", password: "programercina"} ti kazes ovo ce biti true ok


// let x = 5;

// let y = x;

// y = 264

// console.log(y);

let x = {
    ruke: 2,
    noge: 2
}
console.log(x.ruke); // 2
let y = x;

y["ruke"] = "Nema ruke, sa bracketom";

console.log(x.ruke); // 2


function nekaFun(propertyName) {
    poslednjiElementUNizu = 33
    return poslednjiElementUNizu;
}

nekaFun("noge");


let nekiNiz = [1,2,3,4,5,63, 33];

let vracenaVrednost =  nekiNiz.pop();
nekiNiz.push(12)



console.log("Ovo je sada niz", nekiNiz, " a ovo je izbacena vrednost ", vracenaVrednost);

