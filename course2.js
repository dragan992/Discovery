var number = 5; //in-line comment

/* this is a
multi-line comment */

number = 9;

/* Data Types:
undefined, null, boolean, string, number, and object
*/

var myName = "Beau";

myName = 8;

let ourName = "freeCodeCamp";

const pi = 3.14;

var a;
var b = 2;
console.log(a);
a = 7;

b = a;

console.log(a);

//Declarations - declaring a variable

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

//Assignments - asigning a variable

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

var sum = 10 + 10;
console.log(sum);

var difference = 45 - 33;
console.log(difference);

var product = 8 * 10;
console.log(product);

var quotient= 66 / 33;
console.log(quotient);


//Dodavanje (prirastaj) brojeva

var myVar = 87;

// Umesto da kucam myVar= myVar + 1; kucati ovo dole

myVar++;
console.log(myVar);

var ourDecimal = 5.7

var myDecimal = 0.009

//Sve sto ima decimale iza tacke smatra se decimalnim brojem

//Mnozenje decimalnih brojeva radi se ito sa * kao i za obicne brojeve

//Deljenje decimalnih brojeva ide sa / i dobije se kolicnik tj. quotient

 var remainder;
 remainder = 11 % 3;
 console.log(remainder);

 //Sledi slozeno sabiranje sa skracenicom umesto a = a + 12 npr.

 var a =3;
 var b = 17;
 var c = 12;

 a += 12;
 b += 9;
 c += 7;

console.log(c);

//Slozeno oduzimanje

var a = 11;
var b = 9;
var c = 3;

//Resenje u skracenom obliku od a = a - 6

a -= 6;
b -= 15;
c -= 1;

console.log(b);

//Mnozenje ista prica

var a = 5;
var b = 12;
var c = 4.6;

//Umesto a = a * 5; bice a *= 5

a *= 5;
b *= 3;
c *= 10;

console.log(c);

/*
Dupli stringovi (string unutar stringa)
Nakon prvih navodnika ", pre svakog sledeceg navodnika mora biti znak \, a nikako / (nece raditi u konzoli)
A pre poslednjeg navodnika ne ide \ 

*/
var myStr = "I am a \"double quoted\" string indside \" double quotes";

console.log(myStr);

//Drugi nacin - kraci i bolji

var myStr1 = 'I am a "double quoted" string inside " double quotes';

console.log(myStr1);