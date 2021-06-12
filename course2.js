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

/****
 CODE OUTPUT
\' single quote
\" doube quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

NA OVAJ NACIN PONISTAVAMO VREDNOST NEKIH FUNKCIJA 
ILI PRELAZIMO U NOVI RED SA KODOM, UBACUJEMO TAB ITD...
 ****/


var myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine"

console.log(myStr2);

var mojString = "FirstLine\n\t\\SecondLine\nThirdLine"

console.log(mojString);

var mojaProba = "FirstLine\n\t\\SecondLine\n\fThirdLine";

//PITANJE za Srkija, sta radi \f? Ne uocavam da ista menja?!

console.log(mojaProba);

//Concatenating Strings-spajanje stringova sa + opcijom

var ourStr = "I come first. " + "I come second.";

//Obavezno space posle first. Da bismo razdvojili te 2 reci u konzoli!

console.log(ourStr);

var test2 = "This is the start." + "This is the end.";

console.log(test2);

//Spajanje stringova sa += (kao brojevi)

var spajamStr = "I come first. ";
spajamStr += "I come second.";

console.log(spajamStr);

var recenice = "This is the first sentence. ";
recenice += "This is the second sentence.";

console.log(recenice);

//Ovo iznad mi nije bas leglo u glavi za razliku od brojeva


//Konstruisanje stringova varijablama

var naseIme = "freeCodeCamp";
var nasString = "Hello, our name is " + naseIme + ", how are you?"

console.log(nasString);

var mojeIme = "Beau";
var mojStringic = "Moje ime je " + mojeIme + " i ja sam dobro!";

console.log(mojStringic);

//Appending variables to strings - dodavanje stringova varijablama\
//Primer 1 i 2
var anAdjective = "awesome!";
var nekiString = "freeCodeCamp is ";

nekiString += anAdjective;

console.log(nekiString);

var someAdjective = "worthwhile";
var randomStr = "Learning to code is ";

randomStr += someAdjective;

console.log(randomStr);

//Find Length of String - otkrivanje duzine stringa

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

console.log(firstNameLength);

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;

console.log(lastNameLength);

//Bracket Notation, znaci ovo []-to Find First Character in String
//Broj u zagradi [0], kako bismo pronasli prvi karakter u reci

var firstLetterOfFirstName = "";
var firstNamee = "Adica"

firstLetterOfFirstName = firstNamee[0];

console.log(firstLetterOfFirstName);

var firstLetterOfLastName = "";
var lastNamee = "lovelace";

firstLetterOfLastName = lastNamee [0];

console.log(firstLetterOfLastName);

var prvoSlovoImena = "";
var ime = "Ivana";

prvoSlovoImena = ime [0];

console.log(prvoSlovoImena);

//Podsecanje na incrementing numbers 

var nekiBroj;
nekiBroj = 88;
nekiBroj++;
console.log(nekiBroj);

//Podsecanje na remainder

var remainder1;
remainder1 = 20 % 3;
console.log(remainder1);

//Podsetnik slozeno sabiranje
 var p = 100;
 var m = 200;

 p += 100;

 console.log(p);

 //Podsetnik string u stringu 2 nacina

var stringBlaBla = 'Idu slon i slonce "Jedu cvarke" puse duvan';
console.log(stringBlaBla);

var glupaviString = "Idu dva mrava\"I odose\" Pa dodjose";

console.log(glupaviString);

//Podsetnik escape sequences in strings

var testString = "Prva linija\n\n\t Druga linija i tab\n\\''Treca linija sa navodnicima i backslash\\";

console.log(testString);

//Podsetink spajanje stringova (concatenating) with +

var nekiStr = "I come first " + "I come second";

console.log(nekiStr);

//Podsetnik spajanje stringova sa +=

var Blabla = "Zovem se Gringo ";
Blabla += "i mnogo sam kul lik";

console.log(Blabla);

//Podsetnik constructing strings with variables

var nekiLik = "Dragan";
var toSamJa = "Moje ime je " + nekiLik + " i najjaci sam";

console.log(toSamJa);

//Podsetnik appendix variables to strings

var kompliment = " najkul stvar ikad!";
var stotiString = "programiranje je";

stotiString += kompliment

console.log(stotiString);

//Pronalazenje duzine stringa

var duzinaStringa = "Ivana";
duzinaStringa = duzinaStringa.length;

console.log(duzinaStringa);

//Bracket Notation (broj u zagradi []) - pronaci prvi karakter u reci npr.

var prvoSlovoPrezimenaSjebac = "";
prezime = "Radosavljevic";

prvoSlovoPrezimenaSjebac = prezime[0];
//sala mala

console.log(prvoSlovoPrezimenaSjebac);

//SVE "OBNOVLJENO"

var mojePrezime = "Maric";
mojePrezimeLength = mojePrezime.length;

console.log(mojePrezimeLength);

//Nastavak 4/6/2021

//String Immutability - ne mogu se menjati kad se kreiraju

var myStr3 = "Jello World";

myStr3[0] = "H"; //Ovo nece promeniti slovo 

myStr3 = "Hello World"  //Ovo hoce

console.log(myStr3);

/*Bracket Notation to Finda Nth Character in String -
isto kao i trazenje bilo kog slova u nizu [0]-za prvo slovo
[1]- za drugo itd.
*/

/*Bracket Notation to Find Last Charaacter in String,
 nalazenje zadnjeg karaktera u stringu pomocu
  funkcije length */

var imeProvajdera = "Mts";
zadnjeSlovoImenaProvajdera = imeProvajdera[imeProvajdera.length - 1];

console.log(zadnjeSlovoImenaProvajdera);

var imeKomsije = "Goran";
zadnjeSlovoImenaKomsije = imeKomsije[imeKomsije.length - 1];

console.log(zadnjeSlovoImenaKomsije);

var prezimeKomsije = "Ivkovic";
zadnjeSlovoPrezimenaKomsije = prezimeKomsije[prezimeKomsije.length - 1];

console.log(zadnjeSlovoPrezimenaKomsije);

//Bracket Notation to Find Nth - to - Last Character in String
//Nacin da nadjes predzadnje slovo ili ono pre njega npr.

var imeUbice = "nepoznat";
predzadnjeSlovoImenaUbice = imeUbice[imeUbice.length - 2];

console.log(predzadnjeSlovoImenaUbice);

var imeKera = "Dodzara";
treceSlovoOdKrajaImenaKera = imeKera[imeKera.length - 3];

console.log(treceSlovoOdKrajaImenaKera);

/*Word Blanks (funkcija-nisu do sad radjene)
URNEBESNA KOMPLIKACIJA
*/
function worldBlanks(myNoun, myAdjective, myVerb, myAdverb) {

var result = "";
result += "The" + " " + myAdjective + " " + myNoun + " "  + myVerb + " " + "to the store" + " " + myAdverb;
return result;

}

console.log(worldBlanks("dog", "big", "ran", "quickly"));
console.log(worldBlanks("bike", "slow", "flew", "slowly"));


//Povratak otpisanih

let imeee = "Dragan";

console.log(imeee);

//VARIJABLE:
//Name ne moze biti rezervrd keyword (let, var, else, if...izbacice gresku)
//Mora biti smisleno (ne moze biti a1, b8)
//Ne moze poceti sa brojem (1imee)
//Ne mogu sadrzati space ili (-)
//Case-sensitive su

let preZime1 = "Suljic";
let ime2 = "Suljo";

//KONSTANTE

let kamatnaStopa = 0.3;
kamatnaStopa = 1; //na ovaj nacin moze se promeniti varijabla

console.log(kamatnaStopa);

const kamatnaStopa1 = 0.5;
/*kamatnaStopa1 = 1; ne mozemo reasajnovati konstantu-ovo ne radi
Ako hocemo da menjamo varijablu koristimo let, nikako const */
//console.log(kamatnaStopa1);

/*PRIMITIVE TYPES
1.Primitives (Value Types) - String, Number, Boolean, Undefined, Null
2.Reference Types
*/

let nadimak = "Srki"; //String Literal
let godiste = 92; //Number Literal
let punoletan = true; //Boolean literal (moze biti i false)
let nemamPojma = undefined; //Undefined je i ako ne definisemo (let nemam pojma;)
let odabranaBoja = null; //Koristimo kad hocemo da ponistimo vrednost varijable

//Tipa (let odabranaBoja = "red" i posle kad hocemo u kodu da ponistimo na dalje, samo stavimo null)

//JS JE DYNAMIC LANGUAGUE (postoje Static-kad se deklarise varijabla, ne moze se menjati u buducnosti i Dynamic-moze)

//Objects (koristi se : umesto = i idu {})

let osoba = {
imeOsobe: "Ivan",
godineOsobe: 30
};

osoba.imeOsobe = "Goran"; //Dot Notation za promenu varijable
osoba['imeOsobe'] = 'Marija'; //Bracket Notation

console.log(osoba.imeOsobe);

