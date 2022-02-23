'use strict';
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

var a; //Deklarisanje varijable a (samo joj dajemo postojanje, ne i vrednost)
var b = 2; //Deklarisanje i inicijalizacija varijable (assigning) b (dajemo joj postojanje i vrednost)
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
console.log(sum); //Bice 20 prikazano

var difference = 45 - 33;
console.log(difference); //Bice 12 prikazano

var product = 8 * 10;
console.log(product); //Bice 80

var quotient= 66 / 33;
console.log(quotient); // Bice 2


//Dodavanje (prirastaj) brojeva

var myVar = 87;

// Umesto da kucam myVar= myVar + 1; kucati ovo dole

myVar++;
console.log(myVar);

var ourDecimal = 5.7

var myDecimal = 0.009

//Sve sto ima decimale iza tacke smatra se decimalnim brojem

//Mnozenje decimalnih brojeva radi se isto sa * kao i za obicne brojeve

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
var myStr = "I am a \"double quoted\" string inside \" double quotes";

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
console.log(nekiBroj); //Bice 89

//Podsecanje na remainder

var remainder1;
remainder1 = 20 % 3;
console.log(remainder1); //Bice 2

//Podsetnik slozeno sabiranje
 var p = 100;
 var m = 200;

 p += 100; 

 console.log(p); //Bice 200

 //Podsetnik string u stringu 2 nacina

var stringBlaBla = 'Idu slon i slonce "Jedu cvarke" puse duvan';
console.log(stringBlaBla);

var glupaviString = "Idu dva mrava\"I odose\" Pa dodjose";

console.log(glupaviString);

//Podsetnik escape sequences in strings

var testString = "Prva linija\n\t Druga linija i tab\n\\''Treca linija sa navodnicima i backslash\\";

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
let prezime = "Radosavljevic";

prvoSlovoPrezimenaSjebac = prezime[0];

//sala mala

console.log(prvoSlovoPrezimenaSjebac);

//SVE "OBNOVLJENO"

var mojePrezime = "Maric";
let mojePrezimeLength = mojePrezime.length;

console.log(mojePrezimeLength);

//Nastavak 4/6/2021

//String Immutability - ne mogu se menjati kad se kreiraju

var myStr3 = "Jello World";

// myStr3[0] = "H"; //Ovo nece promeniti slovo 

myStr3 = "Hello World"  //Ovo hoce

console.log(myStr3);

/*Bracket Notation to Find a Nth Character in String -
isto kao i trazenje bilo kog slova u nizu [0]-za prvo slovo
[1]- za drugo itd.
*/

/*Bracket Notation to Find Last Charaacter in String,
 nalazenje zadnjeg karaktera u stringu pomocu
  funkcije length */

var imeProvajdera = "Mts";
let zadnjeSlovoImenaProvajdera = imeProvajdera[imeProvajdera.length - 1];

console.log(zadnjeSlovoImenaProvajdera);

var imeKomsije = "Goran";
let zadnjeSlovoImenaKomsije = imeKomsije[imeKomsije.length - 1];

console.log(zadnjeSlovoImenaKomsije);

var prezimeKomsije = "Ivkovic";
let zadnjeSlovoPrezimenaKomsije = prezimeKomsije[prezimeKomsije.length - 1];

console.log(zadnjeSlovoPrezimenaKomsije);

//Bracket Notation to Find Nth - to - Last Character in String
//Nacin da nadjes predzadnje slovo ili ono pre njega npr.

var imeUbice = "nepoznat";
let predzadnjeSlovoImenaUbice = imeUbice[imeUbice.length - 2];

console.log(predzadnjeSlovoImenaUbice);

var imeKera = "Dodzara";
let treceSlovoOdKrajaImenaKera = imeKera[imeKera.length - 3];

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
//Name ne moze biti rezerved keyword (let, var, else, if...izbacice gresku)
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
/*kamatnaStopa1 = 1; ne mozemo reasajnovati KONSTANTU (const)-ovo ne radi
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

//ARRAYS - Mosh (nizovi) [] - array literal
//Da bismo nasli odredjen clan u nizu console.log(selectedColor[0]);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;

console.log(selectedColors[0]); //prikazace red (crvenu)
console.log(selectedColors[2]); //prikazace dodatu green (zelenu)
console.log(selectedColors[3]); //prikazace keca
console.log(selectedColors); //prikazace sve 3 boje i keca
//Ako hocemo duzinu niza da vidimo samo dodamo .length

console.log(selectedColors.length);

//FUNCTIONS {}

function greet() {
console.log('Hello World');  
}

greet();

//Pitanje za Srkija - Zasto f-ja radi tek posle greet()???

function pozdrav (ime, prrezime) {
console.log('De si ' + ime + " " + prrezime);
}

pozdrav("Djuro", "Djuric"); //Djuro je argument(value od parameter)
       //Ime je parameter (funkcija moze imati vise parametara)
pozdrav("Pero", "Peric"); //Prikazace pozdrave i Djuri i Peri

//Trebace nam argument i za prrezime - dodacu prezime kraj Djuro i Pero

//DEFAULT VALUE OF VARIABLES IN JS IS UNDEFINED !!!
//Template literals koristimo za skracivanje koda (kasnije)


//Types of functions-zadnje poglavlje u Basics

//This function is performing a task

function pozdraviti (nadiMak, preZimak) {

  console.log("Dje si" + nadiMak + " " +  preZimak);
}

//This function is calculating a value - kvadrat od 2

function kvadrat(brojic) {
return brojic * brojic
}

let brojic = kvadrat(2);
console.log(brojic);

//A moze i ovako bez let brojic = kvadrat (2);

console.log(kvadrat(2));//kvadrat(2) je argument

//Ovde iznad imamo 2 function call-a (cons.log i kvadrat(2))

//JS operators (ARITHMETIC,ASSIGNMENT,COMPARISON,LOGICAL,BITWISE)


// 1. ARITHMETIC operators (performing calculations)

let x = 10;
let y = 3;

console.log(x + y); //addition - Expression in JS is sth.that produces a value
console.log(x - y); //subtraction
console.log(x * y); //multiplication
console.log(x / y); //division
console.log(x % y); //remainder of division
console.log(x ** y); //EXPONENTINATION (10 na treci)

//KOMENTARISANJE VECEG KODA CTRL + / (MARKIRATI SVE STO ZELIS)

//Imamo jos i INCREMENT I DECREMENT operators

//INCREMENT (++)- zavisno gde stavimo ++ tako ce se ponasati

console.log(++x); //Dobicemo 11 odmah

//Ako prvo stavimo x pa ++ ostace 10 u consoli ali se vr. uvecala +1
//Pa kad opet uradimo cons.log od x pisace 11

console.log(x++);//Dobicemo 11 (jer smo gore uvecali +1),ali je vr uvecana za jos +1
console.log(x);//Sad se vidi prava vr.12 (10 + 1 gore + 1 sad)

//DECREMENT (--) - umanjenje vrednosti (isto kao i uvecanje)

console.log(--x); //Bice 11 jer 12-1 (12 zbog gore promene vr.)

console.log(x--);//Bice 11 (trenutno), ali u sl.koraku vr.se prikazuje
console.log(x);//Prava vrednost je 10


//2.ASSIGNMENT operators (tipa +=, -=, *=, /=)

let q = 10;

q = q + 5; //Ovo isto mozemo napisati i ovako
q += 5;

q = q * 3;
q *= 3;


//4.COMPARISON operators (poredjenje varijable s necim)

//Relational operators (odnosni operatori)

let w = 1
console.log(w > 0); //Pisace true (boolean)
console.log(w >= 1); //Pisace true opet (boolean)
console.log(w < 1); //Pisace false (boolean)
console.log(w <= 1); //Pisace true (boolean)

//Equality operators (operatori jednakosti)

console.log(x === 1); //jednakost po tipu i vrednosti
console.log(x !== 1);//ako zelimo utvrditi da x nije = 1


//5.EQUALITY operators (strict and lose equality operators )

//Strict equality operator (Type + Value poredi) ===
console.log(1 === 1); //Tip-number (ista), value-1 (ista)-true
console.log('1' === 1);//String-number (false)

//Lose equality operator (samo Value poredi) ==
/*Ako se Type ne podudara, konvertovace ono sto je desno 
u Type od levog u zagradi */

console.log(1 == 1);//true
console.log('1' == 1);//on ovo vidi kao ('1' == '1') i bice true
console.log(true == 1);//konvertuje 1 u boolean (true = true)


//6. TERNERY operators (conditional-uslovni)

/*Ako musterija ima preko 100 poena, imace 'gold' status,
u drugom slucaju imace 'silver' status.*/

let poeni = 110;

let tip = poeni > 100 ? 'gold' : 'silver'; //ZAPAMTITI OVAJ KORAK

console.log(tip);


//7.LOGICAL operators - with Non-booleans 

//7a.Logical AND (&&) operator
//Returns TRUE if both operands are TRUE

console.log(true && true); //bice true samo ako su oba true
console.log(false && false);//bice false
console.log(true && false);//bice false

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);//true

//7b.Logical OR (||) operator
//Returns TRUE if ONE of the operands is TRUE

let visokPrihod = true;
let dobarKreditniSkor = false;
let podobanZaKredit = visokPrihod || dobarKreditniSkor;

console.log('Podoban', podobanZaKredit);//Bice true jer je dovoljan 1 true


/*7c. NOT (!) operator - daje suprotnu vrednost od one 
koju varijabla ima (ako je bilo true-bice false i obrnuto*/

let applicationRefused = !podobanZaKredit;

console.log('Aplikacija odbijena',applicationRefused);
//Da je gore na oba bilo false, (prihod i kred.skor)bilo bi true
//True da je aplikacija odbijena zbog NOT !

//Vezba da se utvrdi ovo prethodno
let dobraLova = true;
let okKreditniSkor = false;

let pogodanZaKredu = dobraLova || okKreditniSkor;

console.log(pogodanZaKredu);

let odbijenZaKredu = !pogodanZaKredu;

console.log('Odbijen za kredit',odbijenZaKredu);//false

//8.NON boolean operators (Falsy and Truthy) - ne false or true!

/*FALSY (false)-smatraju se kao false ali nisu false u logical
expressionima (&& - i, || - ili ) :*/

//undefined
//null
//0
//false
//"" - empty string
/*NaN (not a number-special value in JS)-kad radimo matematicku 
operaciju koja ne proizvodi vrednost, dobijamo NaN*/

//U konzoli kad kucamo:
//false || true => true
//false || "Mosh" => "Mosh" - nije empty string => Truthy 
//false || 1 => 1
/*false || 1 || 2 || => 1 - cim pronadje prvi truthy taj stavlja
OVO SE ZOVE SHORT-CIRCUITING*/

//Anything that is not Falsy is Truthy !!!
//FALSE || TRUTHY => TRUTHY !!!
 
//Primer za short-circuiting (kad imamo prvi clan)

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);//prikazace red jer je prva, a da nema nje, prikazalo bi blue

//Primer kad nemamo prvi clan

let opremaZaBazen = undefined;
let normalnaOprema = "sorc";
let staObuci = opremaZaBazen || normalnaOprema;

console.log(staObuci);//sorc

/*ovo su Non-booleans (opremaZaBazen,normalnaOprema)
 i logical operators (|| ili &&) u upotrebi sa njima */


//9.BITWISE operators (RETKO SE KORISTE-SKORO NIKAD)

//Bitwise OR (|) vs Logical OR ( || )
//Bitwise AND (&) vs Logical AND (&&)

//1 = 00000001 => u decmialnnom (1) = u binarnom sistemu 00000001
//2 = 00000010
//3 = 00000011 //Rezultat od c.log (1 | 2);

/*U binarnom sistemu svaki broj je bit, broj jedan (1) ima 8
 bitova (8 bits) = 00000001 i to cini jedan bajt (1 byte)*/

console.log(1 | 2); //Bitwise OR
console.log(1 & 2); /*Bitwise AND (if both numbers are one,
one will be returned, otherwise it will be 0)*/
//Znaci 1 & 2 imamo za 1 = 00000001
//i za                 2 = 00000010

/*Na 7.decimalnom mestu kod 1 je 0, a na 7. mestu kod 2 je (1),
samim tim bice rezultat 0 jer se ne slazu iste cifre*/

//REALNA PRIMENA BITWISE OPERATORA PRIMER:

/*Ako useru hocemo da damo neki od permissiona
(Read, Write, Execute)
kad hocemo da implementiramo access control system*/

/*Mozemo koristiti 1 byte informacija ili 8 bitova da utvrdimo
vrstu permissiona koju ce user imati*/

/*Koristicemo 00000 (5 nula svakako i ostale 3 cifre (jedinice)
 ce odredjivati, imali user acces ili ne, ako ima 1-ima acces)*/

 //Read, Write, Execute
//00000100 - ima samo Read access
//00000110 - ima Read and Write access
//00000111 - ima Read, Write i Execute access
//00000001- ima samo Execute acess

//PRIMER PRIMENE

const readPermission = 4; //00000100 - online convertor moze
const writePermission = 2;//00000010
const executePermission = 1;//00000001

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission); //Bice broj 6, ali mora na dr.nacin

let message = (myPermission & readPermission) ? "yes" : "no"; 
/*Ovo iznad je Ternery operator (ima condition koji ako je 
true-dace yes i ako je false- dace no)*/

console.log(message);

/*Sa BITWISE OR (|) operatorom mozemo dati permission
a sad BITWISE AND (&) mozemo proveriti imamo li permission*/

//10.OPERATOR PRECEDENCE - prednost operatora
//(when working with complex expressions)

let k = 2 + 3 * 4; //14 - jer mnozenje ima prednost

console.log(k);

let z = (2 + 3) * 4;// 20 = 5 * 4

console.log(z);

//EXERCISE SWAPPING VARIABLES



let bojaA = "plava";
let bojaB = "crvena";
let pomocnaVarijabla = bojaA;
bojaA = bojaB;
bojaB = pomocnaVarijabla;


// bojaA = "crvena";
// bojaB = "plava";

console.log(bojaA);
console.log(bojaB);

//U klipu zakomplikovano sa let bojaC = bojaA; a=b;b=c; NEPOTREBNO ILI?

//Vezba-Quiz
let g = 10;
let e = (g>5) && (g<15);

console.log(e); //true

let h = 1;
let d = h !== 2;// !== (not equal value or not equal type)

console.log(d);//true jer 1 nije jednako 2

//OPERATORS - DONE

console.log("dragan" || "srdjan");

let bojaQ = "zuta";
let bojaR = "plava";

let resenjeRebusa = bojaQ === bojaR ? "Srdjane kralju popusi nam karu" : "Dragane kralju popusi nam karu";

console.log(resenjeRebusa);

console.log(bojaQ !== bojaR ? "Dragane kralju popusi nam karu" : "Srdjane kralju popusi nam karu");

if(bojaQ !== bojaR) 
  console.log("Srdjane popusi nam karu");
else 
  console.log("Srdjane popusi nam karu");
  
console.log("Dragane popusi nam karu");


var nesto = 100;

++nesto;

console.log(nesto);

//CONTROL FLOW (4.th CHAPTER OF COURSE)

/*CONDITIONAL STATEMENTS 
1.If...else
2.Switch...case */

/*{} - ovo se zove BLOCK OF CODE (prva zagrada stoji u prvom redu
koda, tipa if (condition) { ) */

//1. IF...ELSE 

//Prvi primer

//Hour
//If hour is between 6h and 12h: Good morning!
//If it is between 12h and 18h: Good afternoon!
//Otherwise: Good evening!

/* if (condition) {
   statement
 }
 else if (condition) {
   statement
 }
 else if (yetAnotherCondition) {
   statement
 }
 else
  statement
*/

//OVO JE KONSTRUKCIJA KODA INACE (MOZE BITI ELSE IF-OVA NEOGRANICENO)

//Resenje primera (moramo deklarisati hour varijablu)

let houR = 13;

if (houR >= 6 && houR < 12)
  console.log("Good morning!");
else if (houR >= 12 && houR < 18)
  console.log("Good afternoon!");
else
  console.log("Good evening!");

//Zato sto se radi o single statementu obrisali smo {} iz koda

//Primer 2 (prosek ucenika)

let prosek = 4.57;

if (prosek >= 1 && prosek < 1.5) 
  console.log("Nedovoljan");
else if (prosek >= 1.5 && prosek < 2.5) 
  console.log("Dovoljan");
else if (prosek >= 2.5 && prosek < 3.5) 
  console.log("Dobar");
else if (prosek >= 3.5 && prosek < 4.5) 
  console.log("Vrlo dobar");
else 
  console.log("Odlican");


//2. SWITCH...CASE (outdated and ugly-IF...ELSE je bolji)
/*Koristimo Break, da ne bi oba switch bloka bila executed 
(nece prikazati oba console.loga ili 3...Koliko god)*/

/*Za default statement ne trebamo Break jer ce automatski 
prepoznati*/

//Konstrukcija koda

/*
switch (variable) {
  case (poredimo value of variable with something):
    console.log(pisemo sta zelimo ako je true ovo gore);
    break;

    case (poredimo drugu vrednost varijable):
      console.log(ista prica);
      break;

      default:
        console.log(neki statement);

ako je bilo let role;
vrednost mu je undefined i u consoli bice "neki statement"

}
*/

let role = "guest";

switch (role) {
  case "guest":
    console.log("Gost User");
    break;

    case "moderator":
      console.log("Moderator User");
      break;

      default:
        console.log("Nepoznat User");
}

//OVO MOZE I SA IF...ELSE DOSTA LAKSE

if (role === "guest") {
 console.log("Guest User");
}
  else if (role === "moderator") //NEKI BAG NE ZNAM ZASTO
  console.log("MODERATOR");
  else
    console.log("NE ZNAMO KO JE");

//DA PROBAMO OPET 

let uloga = "profesor";

if (uloga === "profesor")
  console.log("PROFA");
   else if (uloga === "admin")
  console.log("ADMIN"); 
    else
 console.log("NE ZNA SE KO JE");

//PRIMER 3

 let imaKljuc = "da";

if (imaKljuc === "da") {
  console.log("domacin");
}
else if (imaKljuc === "ne") {
  console.log("gost");
}
else
console.log("lopov");


let osvojioMedalju = "ne";

if (osvojioMedalju === "da") {
  console.log("Olimpijac je");
}
else if (osvojioMedalju === "ne") {
  console.log("Propalica je");
}
else
console.log("Nije ni dosao");


//3. FOR - ponavljanje iste stvari vise puta pomocu LOOPS-a
//Kod FOR loop-a varijabla je deo loop-a for (let i = 0)-varijabla

// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

//Umesto ovog gore (ruzno izgleda), koristimo LOOPS (repeating of action, number of times)

//Types of LOOPS:
//1. FOR
//2. WHILE
//3. DO...WHILE      (SVI LOOPS RADE ISTU STVAR U OSNOVI)
//4. FOR...IN
//5. FOR...OF


/*1. FOR (LOOP) - konstrukcija ima 3 statementa-

1. Initial expression (deklarise i inicijalizuje varijablu),
2. Condition (poredimo vr.varijable sa necim sve dok je true.,
   znaci dok je npr. i < 5 poredjenje ce raditi)
3. Increment expression (da uvecamo vr. varijable npr. i++)
   A moze biti i decrement (umanjimo)*/


//Nakon FOR statementa, mozemo dodati jos statementa npr.IF

/* i = skracenica za index i po konvenciji se koristi za 
FOR LOOPS i zovu je loop variable */

/*for (initialExpression; condition; incrementExpression) {
  statement
}
OVO JE KONSTRUKCIJA */

/*PRIMER 1: (ovo i = 0, vazi samo u ovom loop-u, zbog zagrada 
  i to je SCOPE)*/

for (let i = 0; i < 5; i++) {
  console.log("Hello World", i);
}

/*Prikazace 5 HelloWorld poruka u konzoli dok god je
 ispunjen condition (i < 5)*/

//Da prikazemo detaljan sled kucamo ,i ("Hello World", i)

//PRIMER 2:

for (let p = 1; p <= 5; p++) {
  console.log("Hello From The Other Side", p);
}

/*PRIMER 3 (PRIKAZATI SAMO NEPARNE BROJEVE) - uz pomoc
remaindera of the division of two*/

for (let l = 1; l <= 5; l++) {
  if (l % 2 !== 0) 
    console.log(l);
}
//Prikazace samo 1,3 i 5 kao neparne brojeve

//Moze i obrnuto od 5 do 1

for (let k = 5; k >= 1; k--) {
  if (k % 2 !== 0)
  console.log(k);
}

//2. WHILE (LOOP)
//Kod WHILE loop-a varijablu moramo definisati eksterno, van loop-a

//KONSTRUKCIJA

/*let i = 0
//while (condition) {
  statement (npr. prikazi neparne brojeve)
  increment (i++)
}
*/

//PRIMER

let i = 0;  //Ova varijabla je razlicita skroz od i iz FOR loopa
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++
}

//3. DO...WHILE (LOOP) - similar to while loop
/*Logika je ista kao i kod while, ali DO...WHILE is always 
executed at least once even if its condition is FALSE*/

//Kostrukcija

/* let i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5); */

/*Cak iako stavimo i = 9 npr. u konzoli ce nam prikazati 9
iako je statement false (u liniji koda 1087, proveravamo
da li je broj neparan - jeste (9) i prikazace ga odmah u konzoli
,zatim increment ce napraviti +1 = 10 i tek onda condition se 
evaluira sa while (i <=5) i dobija se false i loop tu staje) */

//RETKO SE KORISTI, NAJCESECE SE KORISTE FOR I WHILE !!!


/*4. INFINITE (LOOPS that executes infinitely-forever
NEOGRANICENI-izvrsavaju se bez kraja)-BE AWARE IF THEM !!!  */

//Mogu zabagovati browser ili ceo kompjuter ako dodje do njih!!!

//Desavaju se kod WHILE,DO...WHILE i FOR (LOOP-ova) GRESKOM !

//Primeri:

//1.Primer sa WHILE

// let pp = 0;
// while (pp < 5) {
//   //pp++;  AKO ZABORAVIMO DA URADIMO INCREMENT-BICE INFINITE
// }

//Morao sam zakomentarisati, jer ubaguje mi browser

//2. Primer sa WHILE 

// while (true) {

// }

//3.Primer sa DO...WHILE

// let xl = 0;
// do {
//   //x++;  AKO ZABORAVIMO INCREMENT
// }
//  while (xl < 5);

//4.Primer sa FOR loop-om

// for (let i = 0; i >= 0; i++);
// console.log("Ide gas");

// for (let i = 0; i < 10; //i++ ZABORAVIMO)
// console.log("Ubagovace browser");


/*5. FOR..IN (LOOP)-koristimo za ponavljanje svojstva
 objekta (object) ili niza (array)*/

const covek = {
  imeRodjeno: "Dragan",
  godineCoveka: 29
};

//Sad nece biti for(initialExpression; condition; increment)

/*Sad je kljucan KEY variable in the loop 
(holds the name of one of the properties in this covek object)*/

//To ITERATE OVER- ponoviti (ITERATION) !!!

for (let key in covek)
console.log(key);

//Ako zelimo value of each property (Dot or Bracket Notation)
//covek.imeRojeno ili covek["imeRodjeno"]

for (let key in covek)
console.log(key, covek[key]); //Ovo je FOR...IN (loop)

//Primer za ARRAY (gore je bio za OBJECT)

const bojice = ["roza", "siva", "braon"];

for (let index in bojice){
  console.log(index);
  console.log(index, bojice [index]);
}

//PITANJE SRKI (STO NECE 1170)? A htelo bi u 1169 u nastavku


//6. FOR...OF (LOOP) - sluzi da iterate over (ponovi)arrays(niz)

//Slicno kao FOR...IN, a umesto in koristi OF (keyword)

//Primer 1.
for (let boja of bojice)
console.log(boja);

//Primer 2.

const drugari = ["dobri", "losi", "osrednji"];

for (let tipDrugara of drugari)
console.log(tipDrugara);

/*SUMARIZACIJA FOR...IN I FOR...OF !!!

FOR...IN koristimo za ponavljanje properties of an OBJECT

FOR...OF koristimo za ponavljanje elements or items in an ARRAY */

/*7. BREAK AND CONTINUE
    (keywords thah can change how the loop behaves)*/

//With BREAK keyword we jump out of the LOOP
//With CONTINUE keyword we jump to the next iteration (ponavljanje)

//Primer 1.

let n = 0;
while (n <= 10) {
  console.log(n);
  n++;
}

//Primer 2.

let  nn = 0;
while (nn <= 10) {
  if (nn === 5) break; //Niz kad dodje do 5, prekida se (pise do 5 u konzoli)
    console.log(nn);
    nn++;
}

//Ako hocemo npr.neparne br.da dobijemo mozemo ovako 

let nesto1 = 0;
while (nesto1 <= 10) {
  if (nesto1 % 2 === 0) {
    nesto1++;
    continue;
  }
  console.log(nesto1);
  nesto1++; //BIO SAM OVO ZAB. PA JE NASTAO INFINITE LOOP
}

//EVEN-PARNI BROJEVI, ODD-NEPARNI BROJEVI !!!

/*WHEN JS sees CONTINUE keyword,it will jump at the beggining
of the loop (while u ovom slucaju) and continues execution  of
the next iteration (ponavljanje), u tom momentu
"nesto" je = 2 + iteration (nesto++)=3 i zato vidimo u konzoli
neparne brojeve samo*/

//CONTINUE CE SE RETKO KORISTITI - legacy word in JS (legendarna)
//UGLY WAY OF WRITING CODE

// Da vidim da li ti pulujes ovo, da li obracas paznju na pulovanje ili si auto-man :D

// A sta ce sada da mi pisulji???

// Another one

// sada bi trebao da se wizard

//opet sam gagi992

//VEZBANJE-PRIMERI

/*1. MAX OF TWO NUMBERS -EXERCISE
(napisati f-ju koja sadrzi 2 broja i returnuje veci od ta 2)*/

let brojeviMax = maksimum (6,2);
console.log(brojeviMax);

function maksimum (broj1,broj2){
  // if (broj1 > broj2) return broj1;
  // else return broj2; //ovde je ELSE suvisno (moze i bez njega da radi kako treba) 
  
  return (broj1 > broj2) ? broj1 : broj2; /*Ova linija koda je
  jednaka kao prethodne 2 samo brze (namerno zakomentarisane 
  prethodne 2 linije koda zbog testa da li radi)*/
}

//2.Landscape or portrait funkcija (kakva je slika po rezoluciji)

let opcijeSlike = isLandscape (1600, 1200);
console.log(opcijeSlike);

//Laksi nacin 
//console.log(isLandscape,(800,600))-ovako je brze

function isLandscape (width, height) {
  // if (width > height) return true;
  // return false;
  return (width > height) ? true : false; //Ili Landscape,Portrait
  /*Mozemo obrisati gore true i false jer ce svakako biti
  executed kao i da pisu*/ 
}

//3. FizzBuzz algotiram (interview question)

//If number is Divisible by 3 => Fizz
//If number is Divisible by 5 => Buzz
//If number is Divisible by both 3 and 5 => FizzBuzz
//Not Divisible by 3 or 5 => broj koji smo uneli
//Not a number (boolean, string...)=>"Not a number"

const output = fizzBuzz(30);
console.log(output);

function fizzBuzz (input) {
  if (typeof input !== "number") return "Not a number";
  if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  else if ((input % 3 === 0) && (input % 5 === 0)) return "FizzBuzz";
  else input;
}

//Pitati Srkija gde je greska da ne ispise FizzBuzz?

//Vezbanje funkcije odabir veceg od 2 broja
//1.
let jevibro = maksimala (1,10);
console.log(jevibro);

function maksimala (jbro1, jbro2){
 return (jbro1 > jbro2) ? jbro1 : jbro2
}
//2.
let natezacina = brojnoStanje (80, 60);
console.log(natezacina);

function brojnoStanje (nekiK, josNekiK){
  return (nekiK > josNekiK) ? nekiK : josNekiK;
}
//3.
let potragaBrojeva = trazimVeciBroj (101,100);
console.log(potragaBrojeva);

function trazimVeciBroj (prviBroj, drugiBroj) {
  return (prviBroj > drugiBroj) ? prviBroj : drugiBroj;
}

// OBJECTS (5th CHAPTER OF THE COURSE)

//1.Basics 

/*Objekti se sastoje iz key value pairs, npr. 
 (Objects are collections of key value pairs): 

let radius = 1;
let x = 1;        OVO SU SVE KEY VALUE PAIRS tj.
let y = 1;        properties that are highly related

Key v.pairs su sadrzaoci objekta (objekat ih sadrzi)
*/

//U objektu se korisi : umesto =

//Uloga objekta je da grupise povezane varijable !!!

/*Value of key value pair can be anyting in JS (number,boolean,
null, function, another object etc...)*/

/*Ovo sto budem napisao ce biti object oriented style of
programming - OOP */

/*OOP - we see a programme as a collection of objects
that talk to each other to perform some functionality*/

//Sledeci object ce imati a few properties and a function

/*In oop terms if a function is part of an object, we call that
function A METHOD !!!*/

//Primer (pravimo app za crtanje razlicitih oblika):

// let radius = 1;
// let xx = 1;
// let yy = 1;

//Sad treba da napravimo OBJECT (circle) sa let ili const (nevazno)

// {} - object literal syntax

// const circle = {
//   radius: 1,  //Ovde moze biti bilo sta (boolean, string, null...)
//   location: {
//     xx: 1,
//     yy: 1
//   },
//   isVisible: true, //Sve ovo je group of related variables
//   draw: function () {
//     console.log('Draw');
//   }
// };
// circle.draw(); //Ovim se poziva izvrsenje funkcije
//Cesto imamo f-je koje rade pomocu ovakvih varijabli

// function draw () {} //npr. f-ja za crtanje kruga
// function move () {} //npr f-ja for moving a circle

/*Umesto da pravimo f-je standalone, bolje je da ubacimo u
circle object !!! */ 

//Prikaz dodavanja draw f-je u circle object 

/*key je draw a value je function (red 1381) - value of 
key value pair can be anything (also function) !!! */

/*Sa zavrsenim redom 1382, mozemo obrisati redove 1388-1389
i 1366-1368 (ne trebamo vise te independant variables i 
functions sa ovim circle objectom) */

//Objektu mozemo pristupiti sa dot notationom

//circle.draw();

const krug = {
  radijus: 1,
  location: {
    xm: 1,
    xs: 1
  },
  jeVidljiv: true,
  nacrtaj: function() {
    console.log('Nacrtaj');
  }
};
krug.nacrtaj();

const circle = {
  radius: 1,
  location: {
    xx: 1,
    yy: 1
  },
  isVisible: true,
  draw: function() {
    console.log('draw'); 
  }
};
circle.draw();

//Zasto nece da izvrsi cons.log dok ne ukucam 1431 red?


//OBJEKTI PONOVO

/* Objects are collections of key value pairs

If they have properties that are highly related, we wanna
hold them inside an object (gruoping related variables)

Deklarisacemo objekat krug i u njemu one or more key value p. */

  let krugic = {
    radiuus: 1,
    lokejsn: {
      iks: 1,
      ipsilon: 1
    },
    vidljivJe: true,
    crtangija: function () {
     console.log('crtaj miki'); 
    }
  };
  krugic.crtangija();

 
let kucetina = {
  dimenzije: {
    sirina: 10,
    duzina: 15
  },
  imaKrov: true,
  kucica: function() {
    console.log("Imam lepu kucu");
  }
};
kucetina.kucica();

let dnevnik = {
  zakljucnaOcena: 4.50,
  predmeti: {
    matematika: 4,
    fizika: 5
  },
  skola: function () {
    console.log("Dobar sam djak");
  } 
};
dnevnik.skola();

let mesec = {
  dani: {
    vikend: ["subota", "nedelja"],
    radni: "ponedeljak"
  },
  isaoSamUskoluNekad: true,
  kulDani: function () {
    console.log("NE RADI MI SEE");
  }
};
mesec.kulDani();

/*2. Factory Functions (constructor functions-other name or 
PATTERN FOR CREATING OBJECTS)


/*Ako iskopiramo objekat (npr. circle object) imamo problem
sa duplikatom METHOD-a u ovom slucaju draw-method (ako tu bude bug, morali bismo da
ga ispravljamo na vise mesta npr.ako je 10 linija koda,
to bi bio haos), a srecom u ovom objektu je samo jedan method*/

// const circle2 = {
//   radius: 1,
//   location: {
//     xx: 1,
//     yy: 1
//   },                 ZAKOMENTARISANO DA BIH PRAVIO FACTORY 
//   isVisible: true,   FUNCTION (ON JE OBRISAO OVO SKROZ)
//   draw: function() {
//     console.log('draw'); 
//   }
// };

/*Da se logika ne bi ponavljala (koja moze biti losa) koristimo
Factory Functions*/

//Factrory Functions produce objects - sledi factory.funkcija

// function createCircle() {
//   const circle = {
//     radius: 1,
//     location: {
//       xx: 1,
//       yy: 1
//     },
//     isVisible: true,
//     draw: function() {
//       console.log('draw'); 
//     }
//   };
//   return circle;
// }

//U OSNOVI BI OVAKO IZGLEDALO, A DALJE PRERASTA U OVO:

/*Return prebacujemo gore i Kad god pozovemo createCircle 
funkciju, dobicemo circle object*/

// function createCircle() {
//   return {
//     radius: 1,
//     location: {
//       xx: 1,
//       yy: 1
//     },
//     isVisible: true,
//     draw: function() {
//       console.log('draw'); 
//     }
//   };
// }

/*SLEDECI KORAK JE DA RADIUS PREBACIMO KAO PARAMETAR
GORE JER SMO OVAKO OSUDJENI DA SVAKI KRUG KREIRAN OVOM
FUNKCIJOM IMA RADIUS 1 AKO OVAKO OSTANE  */

//Obrisacemo location i isVisible da pojednostavimo 

// function createCircle(radius) {
//   return {
//     radius: radius, //moze da se napise i samo radius,
//     draw: function() {
//       console.log('draw'); 
//     }
//   };
// }

//SAD JOS JEDNOSTAVNIJE NAPISANO

function createCircle(radius) {
  return {
    radius,
    draw() {
    console.log('draw');  
    }
  };
}

//Ovo je sad Factory funkcija (circle obj. radius 1)

const circle1 = createCircle(1);
console.log(circle1);


//Pravimo drugi circle object kao test sa radiusom 3

const circle3 = createCircle(3);
console.log(circle3);

//3. Constructor Function (pattern for creating objects)

//JOB of this function is to construct or CREATE an OBJECT !!

/*Po PASCAL notationu prvo slovo svake reci treba da bude 
VELIKO jer se u constructor f-jama koristi PASCAL NOTATION !!!*/

//this - references an empty object

/*new radi 3 stvari:

1. Pravi prazan objekat (under the hood) => const x = {} -npr.
2. Usmerava THIS ka novom PRAZNOM objektu 
3. Vraca (return) taj novi objekat iz funkcije (under the hood) */

/*Sa this. mozemo pristupiti postojecem property-u (Circle,
console,createCircle...) a mozemo i dodati novi this.draw 
ili this.radius npr. */

function Circlee(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const anotheer = new Circlee(1);

//4. Dynamic Nature Of Objects

/*Objects are dynamic which means once you create them you can
always add new properties or methods and remove existed ones */

/*Here we have object with single property (radius), and we can
add another property (color), method (draw) 

Odredjen property ili method iz objekta mozemo obrisati sa
delete operatorom !!! */

const krugcina = {
  radiius: 1
}

krugcina.color = "yellow";
krugcina.draw = function () {}

delete krugcina.color;
delete krugcina.draw;

console.log(krugcina);

/*DA NE BUDE ZABUNE OKO const (sa njim se samo ne moze
reasignovati varijabla jer je ona konstantna - krugcina) 
sto ne znaci da se ne mogu menjati svi propertiji unutar 
objekta !!! */

/*Znaci ne mozemo dodeliti krugcina novom objektu 
=> krugcina = {}; ispasce greska u konzoli */ 

//5. Constructor Property

/*Every object in JS has a property called CONSTRUCTOR 
(constructor property), and that references the function that was
used to create an object, u prethodnim slucajevima to su bili 
circle (const circle) i another const (another) ! */

/*U konzoli u chrome-u kucam another.constructor i returnuje mi
circle funkciju koju smo koristili za kreiranje objekta */

/*Kad kucamo circle.constructor dobicemo prikaz da je u pitanju
funkcija i Object sa velikim O sto znaci da je u pitanju 
Constructor Function (Pascal notation-uppercase) */

//Under the hood (sta mi kucamo, a sta JS vidi):

//let x = {} (definisemo objekat) = let x = new Object();
// true ili false (Boolean literals) = new Boolean();
// '',"",`` = new String();
// 1, 2, 3, ... (Number literals) = new Number(); 

//6. Functions are Objects

/*Jedan od zbunjujucih koncepata JS-a je taj da su 
FUNKCIJE U STVARI OBJEKTI !!! */

//Circlee funkcija u redu 1611 je objekat (evo dokaza):

/*Circlee. (dobijemo sve members of the circle OBJECT, 
PURPLE icons are METHODS-apply, bind, call, and the BLUE icons
are PROPERTIES) */

/*U konzoli (chrome) kucamo:

Circlee.name => Circlee (returns the name)
Circlee.length => 1 (returns the number of arguments)
Circlee.constructor => (returns function that created object)

Every OBJECT in JS has a constructor property (that refereces
the function that was used to create an object) - da bismo 
utvrdili ko je napravio objekat kucamo Circlee.constructor */

/*Kad definisemo f-ju function Circlee(radius){}, kad ovako
deklarisemo f-ju koristeci ovu sintaksu JS engine ce u pozadini
koristiti ovaj function constructor da napravi objekat !!! */

const Krug1 = new Function ('radius', `
this.radius = radius;
this.draw = function() {
  console.log('draw');
}
`);

//Kad deklarisemo f-ju interno je to prikazano ovako (1697-1702)

//Sad cemo napraviti objekat (objekatKrug) i radius ce biti (1)

const objekatKrug = new Krug1(1);

/*Kad u konzoli (chrome) kucamo objekatKrug (prikazace 
krug objekat sa 2 membera - draw: f i radius: 1) */

/*Methods that are available in our functions:

1. Circlee.call - call method (with it we can call a function) */

Circlee.call({}, 1) //mogli smo 1,2,3,4....

/*Ovo iznad je kao da sam kucao const another = new Circlee(1);
napravi prazan objekat {} i passovace kao prvi argument za call
method i taj objekat ce odrediti kontekst of this (this. will 
reference this {} object) ?! */

/* 2. Circlee.apply - apply method (almost the same as call)
but instead of passing all the arguments explicitly (1,2,3,4...)
we pass them in array [1, 2, 3, 4] - useful if you  already 
have an array somewhere in your application and you want to pass
an araay as the second argument of the apply method */

Circlee.apply({}, [1,2,3]);

//ZAKLJUCAK => U JS-U FUNKCIJE SU OBJEKTI !!!


//7. Value (Primitives) vs Reference Types

/*Value Types (Primitives):

1. Number
2. String
3. Boolean
4. Symbol (new in ES6)
5. Undefined
6. Null

Reference Types:

1. Object
2. Function (Functions are also Objects)
3. Array */

//Definisacemo two Primitives (xxxxl i yyyyy)

let xxxxl = 10; //10 je value
let yyyyy = xxxxl;

xxxxl = 20;

/*Kad u konzoli logujemo xxxxl dobicemo 20, a yyyyy dobicemo 10,
xxxx i yyyyy su 2 nezavisne varijable (sustina) */

/*Da vidimo sta ce se desiti ako koristimo Reference Type,tj.
objekat u istoj situaciji */

/*1. Promenicemo u objekat koji ima property called value i 
umesto xxxl = 20 prebacicemo u x.value = 20; */

let xxl = {vrednost: 10}; // vrednost je reference
let yyl = xxl;

xxl.vrednost = 20;

//U konzoli ce xxl biti 20, a i vrednost property od yyl isto 20

/*Kad koristimo objekat {}, taj objekat nije sacuvan u varijabli
u ovom slucaju to je xxl, nego negde u memoriji i adresa 
(lokacija) te lokacije cuva se unutar varijable (xxl), znaci 
kad kazemo da je yyl = xxl, ne kopiramo vrednost xxl-a nego 
lokaciju (reference), drugim recima oba (xxl i yyl) idu na istu
adresu u memoriji i kad modifikujemo taj objekat 
(menjamo xxl ili yyl) promene su momentalno vidljive ostalim
varijablama.

/*Sustina: Primitives (Primitive types) are copied by VALUE,
Objects (Reference types) are copied by their REFERENCE */

let numero = 10;

function increase(numero) {
  numero++;
  console.log(numero); //Dodao sam ovo i sad je 11 u konzoli
}

increase(numero);

console.log(numero); /*Ovde je 10 
(jer je van objekta-OUT OF THE SCOPE) PRIMITIVES ARE COPIED
BY THEIR VALUE !!! */

//ISTO OVO SAMO PREKO REFERENCE TYPE-NAPRAVICEMO KAO OBJEKAT

let objj = {value: 10};

function increease (objj) { //objj je local parameter i on usmerava na isti objekat koji je definisan u redu 1802
  objj.value++;
}

increease(objj); //Kad pasujemo objj, on je pasovan by reference
console.log(objj);

/* Bice 11 u konzoli (objekat sa vrednoscu 11) */ 



//Recap kod Srkija 13 i 14.11.2021

var brat = "Srki";

{
  var nejmic = "Beli";
  // let imenica = "crni";
}
console.log(nejmic);
// console.log(imenica);

function sprdnja(zivotinja,kolikoIhIma,staZivotinjaKaze) {
  console.log(kolikoIhIma + " " + zivotinja + " kazu" + " " + staZivotinjaKaze );
  console.log(`${kolikoIhIma} ${zivotinja} kazu ${staZivotinjaKaze}`);
}
// sprdnja("pacova",2,"vi ste ludi");
// var mamama = sprdnja("lav", 10, "lajn sam ja");
// console.log(mamama);

var nestoo = "pevac";


let iq = 49;

if (iq >= 50 && iq <= 100) {
  console.log("Slabasan sam");  
} else if (iq >= 100 && iq <= 150) {
  console.log("Nisam los");
} else if (iq > 150) {
  console.log("Prejak sam");
}else {
  console.log("Glup ko racku");
}
//100-150 i ispod 50

if (100) {
  
} else {
  
}

console.log(window);

let nekiObj = {value: 50};

let onajObj = nekiObj;

console.log(nekiObj);
console.log(onajObj);


var numerro = 10;


function uvecanjee(numerro) {
  var srkii  = 101;
  
  numerro++;
}
uvecanjee(numerro);
console.log(numerro);

// console.log(srkii);


const userr = {
  id: 7,
  password: 1234,
  name: "Srki"
};
// console.log(userr, " = user");
console.log( "MAJKU MU JEBEM U PICKU",userr["id"]);
console.log( "MAJKU MU JEBEM U PICKU",userr["password"]);
console.log( "MAJKU MU JEBEM U PICKU",userr["name"]);


for (var key in userr) {
  // console.log(key); //Koje su mi sve vr.koje su bile kad sam ovo odstampao? (id,password i name)
  console.log("Ovo su sve vrednosti",userr[key]); //Key = id, userr["id"] =
}

console.log(Math.PI);

const nekoIme = [7, 1234, "Srki"];
console.log(nekoIme[2]);

/*8. Enumerating Properties of an Object (Object is not iterable)
    PRIKAZIVANJE  PROPERTIJA OBJEKTA (U KONZOLI)


//Arrays are iterable
//Objects are NOT !!!


/*Za ovo je vazno podsetiti se FOR In (loop koji ponavlja 
propertije objekta) i FOR of (ponavlja porpertije array-a)

const circle = {
  radius: 1,
  draw() {
    console.log('draw')
  }
};

for (let key in circle)
  console.log(key, circle[key]);         FOR IN loop

Koristim BRACKET NOTATION  to get the value of that property
(bice radius 1 i draw f-kao vrednost je funkcija)

Ako probamo sa FOR OF loop-om, bice greska (circle is not
  iterable-jer je objekat)

for (let key of circle) 
  console.log(key);

POSTOJI NACIN PREKO FOR LOOP-A da se uradi:

for (let key of Object.keys(circle))
  console.log(key);

Sa ovim dobijamo sve key-eve objekta i returnovace kao array!!!
(Prikazace u konzoli radius i draw)

S obzirom da su Arrays iterable, mozemo korititi na ovaj nacin.

Object. - je BUILT IN CONSTRUCTOR FUNCTION

Druga opcija je:

for (let entry of Object.entries(circle))
  console.log(entry);
(Prikazace radius,1 i draw,f-funcrtion)

Svaki entry bice prikazan kao array znaci u []

To je bio jos jedan nacin da se pristupi propertijima i 
methodima jednog objekta !!!

Mozemo jos sa IN operatorom uraditi ovo:

if ('radius' in circle); console.log("YES");

Dobicemo YES u konzoli.

ZAKLJUCAK: koristimo FOR IN (loop), a mozemo koristiti i
FOR OF(u kombinaciji sa Object.keys ili Object.entries), a 
da proverimo da li property ili method postoji u objektu, 
koristicemo IN operator !!! */

//9. Cloning an Object

/* Recimo da zelimo napraviti kopiju ovog objekta ispod

const circle = {
  radius: 1,
  draw() {
    console.log('draw')
  }
};

Znaci hocemo kopiju CIRCLE OBJEKTA, to cemo uraditi preko
FOR IN (loopa), kreiracemo objekat npr. ANOTHER (ime obj.)
*/

/* To ce izgledati ovako:

const another = {};

for (let key in circle)
  another[key] = circle[key];

To je kao da smo napisali:

another['radius'] = circle ['radius']; - OVO JE UNDER THE HOOD

Sad cemo na kraju console logovati:

console.log(another); U konzoli bice radius:1, draw:f */

//Drugi primer:

const covjek = {
  tezak: 82,
  dodati() {
    console.log('Debeo je');
  }
};

const sledecii = {};

for (let key in covjek)
  sledecii[key] = covjek[key];

console.log(sledecii);

//OVO JE STARI NACIN ZA KLONIRANJE OBJEKTA !!! IMA I BOLJIH.

//Drugi nacin je da koristimo Object.assign (method)

Object.assign({}, covjek); 

/*Ovaj method kupi sve propertije i methode u ovom source 
objektu (covjek) i kopira ih u ovaj prazan novi objekat 
ispred {} (NE MORA BITI PRAZAN, MOZEMO DODATI PROPERTI KAKAV
GOD ZELIMO NAKNADNO) i returnuje rezultat u 
const sledecii = Object.assign({}, covjek); */

/*Ishod konacan

const sledecii = Object.assign({}, covjek);
console.log(sledecii);

TO JE JEDNAKO KAO DA SMO NAPISALI OVO:

const sledecii = {};

for (let key in covjek)
  sledecii[key] = covjek[key];

console.log(sledecii); */

//Primer na licnom objektu (izmislicu ga):

const igraliste = {
  dugacko:100,
  siroko:50,
  igraci() {
    console.log("Ima ih 11");
  }
};

const drugoIgraliste = Object.assign({
  bojaTrave:"zelena"
}, igraliste);
console.log(drugoIgraliste);

/*U konzoli ce prikazati sve propertije i metode iz objekta 
igraliste (sto znaci da smo uspesno klonirali objekat igraliste
u objekat drugoIgraliste + dodali smo u empty object par
propertija cisto da vidimo da moze - boja trave)*/

//POSTOJI JOS LAKSI NACIN TRECI (NAJLAKSI) !!! 

/* SPREAD OPERATOR (...)

Npr. const drugoIgraliste = {...igraliste};
console.log(drugoIgraliste);

On sve propertije i methode iz prvog objekta ubacuje u drugi !!! */

//Da probamo:

const treceIgraliste = {...drugoIgraliste};
console.log(treceIgraliste);

/*ZAKLJUCAK, IMA 3 NACINA KLONIRANJA OBJEKATA (FOR IN loop,
Object.assign i ...), A NAJBOLJI JE POMOCU SPREAD OPERATORA (...) !!! */


//10.Garbage Collection

/*In low level languagues (C,C++) when creating an object, we
need to alocate memory to it, and when we are done, we have to
dealocate memory, but hat is not the case with JS */

/*At the time when we initialize an object in JS, memory is 
automatically alocated to this object, and when we are done 
using we don't have do dealocate memory becouse of Garbage Collector

Job of the Garbage Collector is to find the variables or 
constants that are no longer used and to dealocate the memory
that was alocated to them earlier (it runs in background). */

//11. Math (Built-in objects in JS - Array, Date, Math and String)

/*Na guglu kucamo JavaScript math i dobijamo objasnjenje da 
je Math built-in objekat koji sadrzi propertije i metode za 
matematicke konstante i funkcije. */

/*Skrolujuci dole naici cemo na Properties (npr.Math.PI-3.14)
takodje na Methode (npr.Math.abs(x)- returnuje apsolutnu 
vr.broja-ako mu damo negativnu vr. vratice nam pozitivnu) */

//Ima mnostvo metoda i svaki ima dokumentaciju i objasnjenje

/*Probacemo Math.random() u konzoli browsera i svaki put
dobijamo novi random broj izmedju 0 i 1 */

//Math.round(1.9) - zaokruzice broj na najblizi okrugao

//Math.max(1, 2, 3, 4) - pokazace najveci, isto kao i MIN


//12. String (isto Built-in object)

/* Postoje 2 vrste stringova (String primitive i String object) */

//String Primitive:
const messagee = 'hi';

//String object (u stvari constructor function):
const anotherString = new String('hi');

/*Kad u konzoli chrome-a proverimo tip (typeof), messagee je
("string")-primitive, a anotherString ("object")-objekat */

/*Ipak kod String Primitive-a kad kucamo message. on ce se 
isponasati kao da je u pitanju objekat i dace nam vise opcija */

//Isto u guglu kucamo JavaScript string da vidimo dokumentaciju


//Probacemo par opcija:

//String Primitive
const porukica = "Ovo je moja prva porukica";

//Kucamo u konzoli porukica.length (bice 25)
//porukica[0] - returnuje 1.slovo (O)

/*Ako zelimo da utvrdimo sadrzi li ovaj string neku rec npr.
koristicemo porukica.includes("prva") - ako je sadrzi bice TRUE */

/*porukica.startsWith("Ovo") - bice TRUE, a ako stavimo malo
slovo o, kao "ovo", bice FALSE (case sensitive je) !!! */

//porukica.endsWith("a") - TRUE

//porukica.indexOf("moja") - 7

/*porukica.replace("prva", "druga")-ovo pravi novi string a 
stari ostaje (kad kucamo porukica - ispisace ovo je moja prva..) */

/*porukica.toUpperCase() - returnuje novi string velikim slovima */

/*porukica.trim()-brise sve empty spaceove na pocetku i kraju 
poruke ako ih je bilo nakon navodnika i pre zavrsetka navodnika */


//porukica,trimLeft() - brise samo s leva prazne spaceove

/*Od ranije imamo ESCAPE NOTATION koji je slabo koristan
/n - newline
/r - carriage return
/t - tab 

Sve to moze lepse i lakse da se napise sa backtickom `` */

//porukica.split(" ") - svaku rec ce odvojiti ponaosob\


//13. Template Literals ``

/* Ucili smo nekoliko vrsta literals-a:

1. Object - {}
2. Boolean - true, false
3. String - '', ""
4. Template literals (novo) - ``

Template literals koristimo zarad lepseg koda, umesto da
koristimoo /n, /t i slicno, sav tekst koji pisemo stavicemo u
`` - template literals i on ce biti ispisan bas onako kako 
smo ga i napisali (sa enterima, tabovima i svim ostalim) */

//Primer String Literala vs Template literal

const stringLiteral = 
'This is my\n' +
'\'first\' message';

console.log(stringLiteral);

//Temp. literal

const templateLiteral = `This is my
first message`;

console.log(templateLiteral);


//Template Literal je odlicna opcija jer mozemo da ispisemo stagod

const saljemMail = 
`Hi Mosh,

Thank you for joining mu mailing list

Regards,
Dragan`;

console.log(saljemMail);

//${} - ovo je PLACEHOLDER (povlaci info koji zadamo unutra)
/*Mozemo staviti stagod - ${2+3} - izaci ce 5 na kraju u konzoli,
dakle bilo koji expression (npr.f-ja) that produces value 
je okej i radice */

//Primer

const imeKontakta = "Dragan";

const drugiMail = 
`Hi ${imeKontakta},

Thank you for joining mu mailing list

Regards,
Dragan`;

console.log(drugiMail); //Za ime ce staviti Dragan jer ga vuce

//14. Date (built-in object)

/*Ima vise nacina da se kreira Date Object:

Preko constructior functiona su svi nacini (Date je const.f.) */

const now = new Date(); //Ako ne stavimo parametar dace sadasnje vreme

const date1 = new Date('May 11 2018 09:00');

const date2 = new Date(2018, 4, 11, 9, 0);


now.setFullYear(2017);

//Imamo GET i SET metode 

//0 je januar, 11 decembar
/*Ide godina, mesec, dan, sat i minut (ako je negde 0 ne 
stavljamo nista, podarzumevace kao da smo i stavili) */

//U terminal kucamo now.toDateString() i pokazace datum...
//now.toTimeString() - pokazace vreme
//now.toISOString() - koristi se za Backend

//Exercise 1 (Adress Object):

let adress = {
  street: 'Dobrinjska',
  ciy: 'Belgrade',
  zip: 11070,
};

function showAddres(adress){
  for (let key in adress)
  console.log(key, adress[key]);
}

showAddres(adress);

//Exercise 2 (Factory and Constructor Function):

//1. Factory

function createAdress(street, city, zip) {
  return {
  street: 'Dobrinjska',
  ciy: 'Belgrade',
  zip: 11070,
  };
}

const adresss = createAdress('a','b','c');
console.log(adresss);

//2.Constructor

function Prikaziadresu (street, city, zip) {
  this.street = street;
  this.city = city;
  this.zip = zip;
}

const pokazivacAdrese = new Prikaziadresu('a', 'b', 'c');
console.log(pokazivacAdrese);


//Exercise 3 (Object Equality) 1.2 Objects are equal, 2. They are the same?

//Koristicemo Objekat adresa za ovaj exercise

let testAdresa1 = new testAdresa('a','b','c');
let testAdresa2 = new testAdresa('a','b','c');
let testAdresa3 = testAdresa1;

function testAdresa(ulica, grad, postanskiBroj) {
  this.ulica = ulica;
  this.grad = grad;
  this.postanskiBroj = postanskiBroj;
}

//Krenucemo od druge tacke jer je laksa

function areSame(testAdresa1,testAdresa2) {
  return testAdresa1 === testAdresa2;
}

//Prva je teza i treba da proverimo da li je svaki property =

function areEqual(testAdresa1,testAdresa2) {
  return testAdresa1.ulica === testAdresa2.ulica &&
  testAdresa1.grad === testAdresa2.grad &&
  testAdresa1.postanskiBroj === testAdresa2.postanskiBroj
}

//Sad sa pozovemo obe funkcije da vidimo ishod

console.log(areSame(testAdresa1,testAdresa2)); //False
console.log(areEqual(testAdresa1,testAdresa2)); //True
console.log(areSame(testAdresa1, testAdresa3)); //Sad je true

//False je jer se cuvaju na razlicitim mestima u memoriji

/*Ako hocemo da bude true, dodamo let testAdress3 = testAdress1;
i console.log(areSame(testAdresa1,testAdresa3)); */

//Exercise 4 (Blog Post Object)

/*Napraviti objekat sa ovim propertijima:

1.Title
2.Body
3.Author
4.Views
5.Comments (svaki koment treba da ima neki property - author, body)
6.isLive

Dati svakom propertiju neki value (nije bitno kakav) */

let post = {
  title: "Dnevne novine",
  body: "Foto, Video",
  author: "Zeljko Mitrovic",
  views: 300000,
  comments: [
    {author: "Zeljko Mitrovic", body:"Foto, Video"}
  ],
  isLive: true
};

console.log(post);

//Exercise 5 (Constructor Functions)

function Postic(title, body, author, views) {
  this.title = title;
  this.body= this.body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLIve = false; //Nije jos objavljen post pa false
}
//Views and comments ne stavljamo u parametar gore jer post "nije jos objavljen pa imaju po 0"
//Gledamo da imamo sto manje parametara (lakse se koristi f-ja)

let post1 = new Postic('a','b','c');

console.log(post1);

//Exercise 6 (Price Range Objects)

// let priceRanges = [
//   { simbol: $, skupoca: "Jeftino", minimumPoOsobi: 0, maxPoOsobi: 10 },
//   { simbol: $$, skupoca: "Osrednje", minimumPoOsobi: 11, maxPoOsobi: 20 },
//   { simbol: $$$, skupoca: "Skupo", minimumPoOsobi: 21, maxPoOsobi: 50 },
// ];

// let restorani = [
//   {prosecnoPoOsobi: 5}
// ]

//LUD EXERCISE (ZA RAZMISLJANJE) - proveriti gresku kad otkomentarisemo

//ARRAYS (6th chapter of the course)

//1.Introduction

/*U ovom chapteru naucicemo sledece:

1.Adding new elements (to arrays)
2.Finding elements
3.Removing elements
4.Splitting arrays
5.Combining arrays */

//2.Adding elements (dodavanje elemenata u nizove)

const cifre = [3, 4];

//End (dodavanje cifara na kraj niza) - PUSH
cifre.push(5, 6);

//Beginning (dodavanje cifara na pocetak niza) - UNSHIFT
cifre.unshift(1, 2);

//Middle (dodavanje cifara u sredinu niza) - SPLICE
cifre.splice(2, 0, 'a', 'b');

console.log(cifre);

//3.Finding elements (Primitives) za Reference Types je drugacije

/*Koristimo imeArraya.indexOf(npr.'a'); 

Ako u array-u imamo npr. 'a', pokazace indeks tog elementa u 
nizu (lokaciju u nizu-pocevsi od 0,1,2...),a ako nemamo u
konzoli ce izbaciti -1. */

const randomBrojevi = [1, 2, 3, 4];

console.log(randomBrojevi.indexOf('a'));  //Izbacice -1
console.log(randomBrojevi.indexOf(3));  //Izbacice 2
console.log(randomBrojevi.indexOf('3'));  //Izbacice -1 (jer ga imamo kao broj, a ne kao string)

/*Imamo i lastIndexOf opciju u slucaju da se neki element 
ponavlja u nizu pa hocemo da nadjemo njegovu zadnju lokaciju u
nizu */

//Primer sa lastIndexOf

const lastIndexOfVezba = [1, 2, 3, 1, 4];

console.log(lastIndexOfVezba.lastIndexOf(1));
//Pokazace 3 (jer se nalazi na 3. mestu zadnja jedinica)

//Da proverimo da li neki element postoji u nizu, mozemo ovako

console.log(lastIndexOfVezba.lastIndexOf(1) !== -1);
//Ako je ovo true, znaci da element postoji u nizu (RUZNO)

//OVO JE LAKSI I BOLJI NACIN DA SE POSTIGNE ISTO !!! (.INCLUDES)

console.log(lastIndexOfVezba.includes(1)); //Bice true

//4.Finding elements (Reference Types)

//Napravicemo array courses sa nekoliko objekata kao primer:

const coursess = [
  { id: 1, name: "Nebitno" },
  { id: 2, name: "Bitno" },
];

//Zato sto je Reference Type, metod pronalaska od Primitive ne radi

console.log(coursess.includes({id:1, name: "Nebitno"})); //FALSE

//Kod Reference Type, pronalazimo ovako (JS array find):

const kursevi = coursess.find(function(kursevi) {
 return kursevi.name === "Nebitno"; //Find method returnuje prvi match koji se poklapa sa kriterijumom (kursevi.name === "Nebitno")
});

console.log(kursevi);

//Postoji i findIndex metod

const kursevii = coursess.findIndex(function(kursevi) {
  return kursevi.name === "Nebitno";
 });

console.log(kursevii); //Dace 0, jer je Nebitno na 1.poziciji
//A bilo bi -1 da sam stavio neko nepostojece ime

//5.Arrow Functions => - tako izgleda (skracuje kod)

/* Umesto da pisemo ovako

const kursevi = coursess.find(function(kursevi) {
 return kursevi.name === "Nebitno"; //Find method returnuje prvi match koji se poklapa sa kriterijumom (kursevi.name === "Nebitno")
});

Ovo mozemo napisati pomocu Arrow Funkcije ovako po koracima:

Arrow Function menja parametar funkcije za pocetak!

const kursevi = coursess.find((kursevi) => {
  return kursevi.name === "Nebitno"
});

Ako f-ja ima single parameter, obrisacemo zagrade (), a ako nema
nikakav parametar, stavicemo prazne zagrade (), ako je funkcija
u jednoj liniji koda i returnuje vrednost, mozemo obrisati return
i staviti sve u jenu liniju koda i obrisati {}

Krajnji izgled koda:


const kursevi = coursess.find(course => course.name === "Nebitno");

console.log(kursevi);

ISHOD JE ISTI, A KOD CISTIJI !!! */

//6.Removing Elements

const brisanjeBrojeva = [1, 2, 3, 4];

//Elemente mozemo obrisati from the end, beggining or middle

//Removing elements from the END (.pop())

//brisanjeBrojeva.pop() - da nisam zakom. dole bi bio jedan manje

const lastNumber = brisanjeBrojeva.pop();
console.log(brisanjeBrojeva);
console.log(lastNumber); //Bice 3 [1, 2, 3];

//Removing elements from the BEGINNING (.shift())

//brisanjeBrojeva.shift()

const firstNumber = brisanjeBrojeva.shift();
console.log(firstNumber); /*Removovao je 1, ako u konzoli kucamo
nakon ovoga brisanjeBrojeva, ostali su 2 i 3 (4 je ranije obrisan) */

//Removing elements from the MIDDLE

//brisanjeBrojeva.splice() - kao i za dodavanje (CUDNO)

brisanjeBrojeva.splice(2, 2);
console.log(brisanjeBrojeva); /*Ostace 2 i 3 jer su gore vec
dodavani i brisani brojevi pa se poremeti, a ako zakomentarisemo
prethodne kodove pokazalo bi da su ostali 1 i 2 (kako i treba) */

//7.Eptying an Array (removing all the elements from an array)

let punArray = [1, 2, 3, 4];
let nekiArray = punArray; //Ovo je za solution 2
//1.Solution (reasign array to some new EMPTY array)

punArray = []; //Da je gore bio const, ne bi mogli ovako

console.log(punArray); // Pokazace prazan niz
console.log(nekiArray);//Pokazace [1, 2, 3, 4] - referenca

/*Ova opcija radi ako nema nikakvih referenci koje vuku na
originalni array od ranije npr.(let nekiArray = punArray)-negde
gore iznad ovog punArray = []; jer ce vr. another ostati
[1, 2, 3, 4], a dole ispod ce biti prazan niz[] */

//2.Solution (ako imamo multiple references to the original array)

punArray.length = 0;
console.log(punArray); //Poubijace sve elemente niza
console.log(nekiArray); /*Sad BI TREBAO BITI prazan niz, ALI 
NIJE zbog 2549 reda (punArray = []), gde ga red 2561 vraca u 
prvobitno stanje i vidi se ceo array (ako ne zakomentarisem red
2549) */

//3.Solution (splice method)

punArray.splice(0, punArray.length);
console.log(punArray); //Poubijace sve elemente niza
console.log(nekiArray); /*Opet zbog linije 2549 gresi 
(komentarisati je i sve bude ok) */

//NIJE NEKA OPCIJA ZA PREPORUKU (BOLJE 1. ili 2.)

//4.Solution (pop method) - mozemo ga staviti u loop

while (punArray.length > 0)
  punArray.pop();

console.log(punArray); //Poubijace sve elemente niza
console.log(nekiArray);//Ista prica 2549

/*OVO NIJE ZA PREPORUKU AKO IMA PUNO OBJEKATA U ARRAY-U,
zvace .pop method npr.milion puta (a i ruzno izgleda kod) */

//NAJBOLJE 1. ili 2.OPCIJA !!!

//8.Combining and Slicing Arrays (dodavanje i razbijanje na 2 dela)

const prviArray = [1, 2, 3];
const drugiArray = [4, 5, 6];

//Za DODAVANJE koristi se .concat (method) - concatinate !!!

//prviArray.concat(drugiArray);

const combined = prviArray.concat(drugiArray);
console.log(combined);//[1, 2, 3, 4, 5, 6]-bice ovako

//Za RAZBIJANJE koristi se .slice (method) !!!

const sliced = combined.slice(2,4);
console.log(sliced);//Isekao je prva dva broja (3 i 4)

//DRUGI NACIN (ubaci se index) !!!

const slicedSaIndexom = combined.slice(2);
console.log(slicedSaIndexom);//Sve od 2.broja u nizu ce ostati (3, 4, 5, 6)

/*TRECI NACIN (izbacimo starting index combined.slice()) i onda
dobijamo kopiju originalnog arraya bez izbacenih elemenata */

const slicedBezIndexa = combined.slice();
console.log(slicedBezIndexa);//Dobicemo ceo niz [1 do 6]


/* RECAP - za koobinovanje 2 arraya koristimo CONCAT method, 
ako hocemo da isecemo array koristimo SLICE method (s tim sto se
razlikuje ako imamo Primitives u arrayu (pointuje na njihove
vrednosti) ili Objekte, pointovace na reference objekta ako su
oni u pitanju) */

//PRIMER ZA REFERENCE TYPE (OBJEKAT)

const prviReferenceArray = [{ id: 1}];
const drugiPrimitiveArray = [4, 5, 6];

const kombinovanje = prviReferenceArray.concat(drugiPrimitiveArray);

prviReferenceArray[0].id = 10; //Menjamo vr.id-a sa 1 na 10 (u objektu)

const sliceReferenceType = kombinovanje.slice()

console.log(kombinovanje);
console.log(sliceReferenceType);

/*Kopirace REFERENCU prviReferenceArray-a i vrednost 
drugiPrimitiveArray-a (videti konzolu red 2634) */

//9.The Spread Operator (cistiji nacin za dodavanje array-a)

const istoPrvi = [1, 2, 3];
const istoDrugi = [4, 5, 6];

/*Koristimo spread operator (...) da dodamo svaki pojedinacni
clan prvog i drugog niza */

const spojeniNizovi = [...istoPrvi, ...istoDrugi];
//Ovo je kao da pise [1, 2, 3, 4, 5, 6];

console.log(spojeniNizovi);

/*Ako hocemo usput da dodamo nesto jos svoje uz spajanje nizova
mozemo to uraditi jednostavnim dopisivanjem gde nam odgovara */

//Primer:

const spojeniNizoviSaDodavanjem = [...istoPrvi, "IDEMO", ...istoDrugi, 111];

console.log(spojeniNizoviSaDodavanjem);//PRIKAZACE SVE LEPO

/*Ako hocemo da napravimo novi array koji sadrzi sve iz 
spojeniNizoviSaDodavanjem array-a, moze ovako: */

const svesadrzaniArray = [...spojeniNizoviSaDodavanjem];

console.log(svesadrzaniArray);

//PREPORUKA ZA DODAVANJE NIZOVA NA OVAJ NACIN !!!

//10.Iterating an Array (ponavljanje niza)

//Za ponavljanje nizova (array-a) koristi se FOR OF loop

const ponavljanjeNiza = [1, 2, 3];

for (let number of ponavljanjeNiza)
  console.log(number); //ponovice 1, 2 i 3

//Drugi nacin je FOR EACH method (.forEach) !!!

ponavljanjeNiza.forEach(function(number) {
  console.log(number);
});

/*Kad pozovemo forEach method, ova f-ja gore ce biti izvrsena za 
svaki element niza [1,2,3], znaci svaki element ce biti passed
kao argument ove f-je */

//Kod se moze skratiti pomocu ARROW Functiona

ponavljanjeNiza.forEach(number => console.log(number));

//Ako nam treba da vidimo i index (poziciju), onda cemo ovako

ponavljanjeNiza.forEach((number, index) => console.log(index, number));

//11.Joining Arrays (spajanje nizova) - .join method

//.join method returnuje string !!!

const spajanjeNiza = [1, 2, 3];
const spojeno = spajanjeNiza.join(',');

console.log(spajanjeNiza);//Vidi se da je niz [1,2,3]
console.log(spojeno);//Prikazano kao string u konozoli 1,2,3

/*ostoji i .split method koji je vezan za stringove (returnuje 
array) */

const poruuka = "Ovo je moja prva poruka";
const deloviPoruke = poruuka.split(' ');
//' ' - je separator koji zelimo da bude medju svakom reci (space npr.)

console.log(deloviPoruke); //Bice 5 delova (svaka rec) i array je

//Sad kad imamo array, mozemo koristiti .join method da spajamo

const spojeniDeloviPoruke = deloviPoruke.join('-');
//Odabrali smo - izmedju reci da bude npr. (vratice kao string)
console.log(spojeniDeloviPoruke);

/*Ovo je korisno kod pravljenja URL slug-ova (zadnji deo URL-a)
jer u URL ne mogu da se stave space-ovi pa idu - takve crtice */

//Crtica (-) - se zove hyphen !!!

//12.Sorting Arrays - .sort method i .reverse !!!

/*.sort method konvertuje svaki element u string i onda sortira
elemente u array */

const nesortiranNiz = [2, 3, 1];
nesortiranNiz.sort();

console.log(nesortiranNiz);//Bice [1,2,3] kao array prikazani

/*.reverse method (sa njim slazemo elemenate unazad od veceg ka
manjem u nizu) */

nesortiranNiz.reverse();
console.log(nesortiranNiz);//Bice [3,2,1]

/*Ovo je lako kad imamo brojeve i stringove u nizu, a kad imamo
objekte, onda ce morati jos da se dodaje */

/*Primer sa objektima: Npr.da sortiramo po imenu objekta (tako 
da JS dodje pre Node.js) */

const itKursevi = [
  { id: 1, imeKursa: 'Node.js'},
  { id: 2, imeKursa: 'javaScript'},
];

/*Ako ukucam itKursevi.sort() i logujem, Node.js ce biti prvi, a
nama treba na drugom mestu */

//Treba ovako posloziti kod:

itKursevi.sort(function(a, b) {
  // a < b => -1
  // a > b => 1
  // a === b => 0

  const imeKursaA = a.imeKursa.toLowerCase();
  const imeKursaB = b.imeKursa.toLowerCase();

  if (imeKursaA < imeKursaB) return -1;
  if (imeKursaA > imeKursaB) return 1;
  return 0;
});

console.log(itKursevi);

/*Vrednosti se uzimaju po ASCII CODE, guglati to (npr. veliko 
slovo J ima vr.74, a veliko N=78), pa vrednostima slaze, ali se
javlja problem jer mala i velika slova nemaju istu vrednost */

/*To bi trebalo resiti stavljanjem svih malih ili svih velikih
slova npr. a.imeKursa.toUpperCase(); b.imeKursa.toUpperCase() 
ili .toLowerCase(); */


//CTRL+D replacuje sve sa istim imenom gde ga lociramo

//13.Testing the Elements of an Array (.every and .some methods)

/*Provericemo da li su svi elementi niza pozitivni brojevi
.every method moze se koristiti za to */

const daLiSuPozitivni = [1, 2, 3];

const allPositive = daLiSuPozitivni.every(function(value){
  return value >= 0;
});

/*Ovaj .every method ce pokrenuti f-ju (ovu iznad) na svaki 
element niza [1,2,3] dok ne naidje na element koji ne odgovara
kriterijumu (value => 0) i onda ce prestati */

console.log(allPositive);

/*True jer su svi pozitivni (ako ubacimo u niz -1 negde, bice false) */

/*.some method proverava da li imamo bar jedan element u nizu
koji odgovara zadatom kriterijumu */

const poNekiPozitivan = [1, -1, 2, 3];

const barNekiPozitivan = poNekiPozitivan.some(function(value){
  return value >= 0;
});

console.log(barNekiPozitivan);

/*CONCLUSION

every() - checks to see if all elements in array matches the 
given criteeria (are positive or whatever you want)

some() - checks to see if we have at least one element that
matches the given criteria */

//14.Filtering an Array (filter array based on search criteria)

//Recimo da hocemo da isfiltriramo samo pozitivne brojeve u nizu

const svakakviBrojevi = [1, -1, 2, 3];

const filterPozitivnihBr = svakakviBrojevi.filter(function(value) {
  return value >= 0;
});

console.log(filterPozitivnihBr);

/* Arrow function bi dobro dosao u gornjoj funkciji i ovako ide:

const filter... = svakakviBrojevi.filter(value => value >= 0);

console.log(filterPozitivnihBr); */

//15.Mapping an Array (map each item in an array to sth. else)

//Mapiracemo svaki broj uz neki string npr. 

let brojeviZaMapiranje = [1, -1, 2, 3];

let filterBrojevaZaMapiranje = brojeviZaMapiranje.filter(n => n >= 0);

let items = filterBrojevaZaMapiranje.map(n => `<li>${n}</li>`);

let html = '<ul>'+items.join('') +'</ul>'; 


console.log(items);//Bice kao array
console.log(html);//Bice kao string

/* We can use the map method to map each element in an Array
into something else (numbers to strings, or to objects etc.) */

//Primer 2. (mapiramo brojeve iz niza uz objekat)

const brojici = [1, -1, 2, 3];

const filtrirani = brojici.filter(n => n >= 0);

const ajtemi = filtrirani.map(n => {
  const obj = { value: n }; //ovde je moglo i samo return bez const obj (return { value: n}) i dole obrisem return
  return obj;
})

console.log(ajtemi);//Returnuje 3 objekta i propertiji su brojevi

/*Ako imamo single line of code, mozemo izbaciti return keyword
pa su red 2869 i 2870 suvusni, a sve bi moglo da se kuca u 2868
bez curly braces {} i return naravno

const ajtemi = filtrirani.map(n => ({ value: n});

Obavezno () okolo {}, jer {} prepoznaje kao blok koda i nece
raditi bez ovih okolnih (), bice array sa 3 undefined elementa
u tom slucaju */

const skraceniAjtemi = filtrirani.map(n => ({ value: n}));

console.log(skraceniAjtemi);

/* .filter i .map methodi returnuju novi array (ne modifikuju
originalni array i oni su chainable - mozemo ih pozvati one 
after another i to se zove chaining)

Primer chaininga:

brojici.filter(n => n => 0).map(n => ({ value: n }));

Po konvenciji kad radimo method chaining, kod treba da bude 
u jednoj liniji.

Npr.

const items = numbers
  .filter(n => n >= 0)
  .map(n => ({value: n }));
  .filter(obj => obj.value > 1) - dace 2 objekta sa vr. 2 i 3
  .map(obj => obj.value) - mapiramo svaki objekat na number (2 i 3)

console.log(items);

Bice isti rezultat kao i gore, a lepse izgleda.

Ovo je moc chaininga */

//16. Reducing an Array (Reduce method)

/*Npr. hocemo da saberemo sve clanove nekog niza, mozemo to
uraditi pomocu for loop-a */

const saberiNiz = [1,-1, 2, 3];

let suma = 0;
for (let n of saberiNiz)
  suma = suma + n; //isto sto i sum += n;

console.log(suma); //Sabrace i bice 5


/*Ovo isto se moze uraditi na laksi nacin sa .reduce methodom
u array-ima */

/* .reduce method pretvara sve elemente niza u single value 
(number, string, object ...) i ima 2 argumenta (parametra) */

//U ovom slucaju zelimo da pretvorimo sve brojeve iz niza u jedan

/* .reduce method koristi callback funkciju sa 2 parametra (argumenta) 
(accumulator (previous value) - to bi u ovom slucaju bila suma i
currentValue - bi bio svaki broj ponaosob iz niza)) */

//In each call we wanna get currentValue and add it to accumulator

const zbirr = saberiNiz.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; 
},0);

console.log(zbirr);

/*Internally 2944 line of code, reduce method will get result
(acc + currV) and store it in to accumulator, and we need to
initialise accumulator to zero (0) - na kraju kao second 
argument, a prvi argument je bila callback funkcija
(sve od accumulator do } ) */

/*Sa ovim .reduce methodom krecemo sa accumulator = 0, onda 
loop-ujemo kroz array i konvertujemo sve elemente array-a u 
single value (sto je u ovom slucaju accumulator - tj.zbir svih
brojeva u ovom array-u), a evo kako to izgleda under the hood.

accumulator = 0, currentValue = 1 => accumulator = 1
accumulator = 1, currentValue = -1 => accumulator = 0
accumulator = 0, currentValue = 2 => accumulator = 2
accumulator = 2, currentValue = 3 => accumulator = 5 (krajnji br.) */

/* Mozemo da iskljucimo inicijalizaciju accumulator-a, pa bi u
tom slucaju accumulator bi dobio vrednost prvog elementa u nizu
a to je 1, onda bi izgledalo ovako:

accumulator = 1, currentValue = -1 => accumulator = 0
accumulator = 0, currentValue = 2 => accumulator = 2
accumulator = 2, currentValue = 3 => accumulator = 5 (opet)

Ovo skracuje za jednu liniju koda, a mozemo se resiti i returna,
pa bi kod na kraju izgledao skraceno ovako:


const zbirr = saberiNiz.reduce((accumulator, currentValue) => accumulator + currentValue; 
);

console.log(zbirr);

OVO JE NAJKRACA OPCIJA !!! */


//FUNCTIONS (7th chapter of the course)

//1. Function Declarations vs Expressions

//1a. Function Declaration - deklarisanje funkcije

function walk() {
  console.log('walk');
} //Kad deklarisemo f-ju ovako, ovde ne stoji ; (po konvenciji)

/*1b. Anonymous Function Expression, drugi nacin za deklarisanje
funkcije */

let run = function() { 
  console.log('run');
}; //A kad ovako, onda mora ; na kraju
let move = run;
run();
move(); //Move isto poziva f-ju run i isti je rezultat

//1c. Named Function Expression (funkcija sa imenom)

let trcanje = function setnja() {
  console.log('trcanje');
};

/*Znaci jedna od razlika izmedju Function Declaration-a i 
Function Expression-a je sto kod prvog ne treba ; na kraju koda
, a kod Function Expression-a treba */

//2. Hoisting (INTERVIEW QUESTION)

/* Hoisting is the process of moving FUNCTION DECLARATIONS TO 
THE TOP OF FILE !!! (this is done automatically by the JS engine) */

/*U praksi to znaci ako pozivamo funkciju kreiranu Function 
Declaration nacinom, onda je mozemo pozvati u liniji koda iznad
same deklaracije (pre nego sto je definisana) f-je i kod ce 
raditi, a ako se radi o Function Expression-u i ako tu f-ju 
pozovemo iznad (pre nego sto je definisana), a ne ispod
deklaracije kod nece raditi, jer se Hoisting ne odnosi na 
Function Expressione */

//Primer sa Function Expression-om

// console.log(proizvod);
// let proizvod = automobil; - OVDE CE IZBACITI GRESKU

//Primer sa Function Declaration-om

sport();

function sport() {
  console.log('sport');
}

/* Vidi se da f-ja radi iako je pozvana pre nego sto smo je 
deklarisali (declared) */


//3. Arguments (argumenti funkcije)

/*Ranije smo ucili da je JS dynamic languague i da ako
inicijalizujemo x = 1 (let x = 1), pa ispod odradimo 
x = 'a'; automatski vrednost x ce postati string 'a'.

To isto mozemo uraditi i sa argumentima funkcije

Npr.napravicemo f-ju sum sa 2 parametra (a,b) */

function sumica(a, b) {
  return a + b;
}

console.log(sumica(1, 2)); //1 i 2 su argumenti

/*Ako stavim samo 1, bice NaN - not a number, jer a ce
biti 1, a b ce po defaultu biti undfined, takodje ako ne
stavimo nista od argumenata u zagradu - ostavimo prazno, 
opet ce biti NaN, ispod primer: */

function nan(a, b) {
  return a + b;
}

console.log(nan(1)); //U konzoli NaN kao sto smo rekli

/*Takodje mozemo staviti koliko god hocemo argumenata, ali
ce biti upotrebljeno samo onoliko argumenata koliko funkcija
ima parametara, a u ovom slucaju to su 2 parametra (a, b) */

function punoParametara(a, b) {
  return a + b;
}

console.log(punoParametara(1, 2, 3, 4, 5));
//Sabrace samo prva dva i dace rezultat 3

/*U JS postoji special OBJECT koji se zove arguments !!!
On izgleda kao array u konzoli, ali nije array vec OBJECT!

Imamo prikaz svih argumenata (ovde od 1 do 5)
Imamo callee (u konzoli) - returnuje funkciju o kojoj
je rec
Length property - pokazuje broj argumenata (ovde 5)

Primer arguments object-a (gledati ishod u konzoli): */

function argumentss(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(argumentss(1, 2, 3, 4, 5));

/*Ako zelimo da izmenimo ovu f-ju da returnuje sumu svih
ovih argumenata (1, 2, 3, 4, 5), postoji jednostavan 
algoritam (deklarisemo npr. total = 0), trebace nam for of
loop (to iterate over arguments object)-for of loop 
koristimo za array-e, ali moze se koristiti i za objekte 
koji imaju iteratore (ovaj u konzoli ima Symbol.iterator),
to znaci da ovaj objekat ima iterator i mozemo korititi
for of loop to iterate over this object, pa za svaki 
argument cemo uzeti tu vrednost i dodati je nasoj total
varijabli (total += value;) i retutnovacemo total;.

SVE OVO U KODU: */

function saberi(a, b) {
  let zbirno = 0;
  for (let value of arguments)
  zbirno += value;
  return zbirno;
}

console.log(saberi(1, 2, 3, 4, 5));//Ako dodamo 10, bice 25

/*Mozemo cak obrisati parametre (a, b) i sve ce lepo raditi! */

//4. The Rest Operator (...) 

/*Ne mesati ga sa Spread Operatorom (...) - looks the same,
a on se koristi sa Array-ima da spreaduje Array kako bismo
mogli da uzimamo njegove individualne elemente */

/*U modernom JS-u ako zelimo funkciju sa vise parametara 
(ono u zagradi nakon function name-a), mozemo koristiti 
Rest operator (...) i on se moze koristiti samo zajedno sa
parametrom f-je npr.(...arguments), takodje parametar sa
rest operatorom (...) mora biti zadnji parametar, a pre
njega moze ih biti koliko god, jer ce izbaciti gresku u 
konzoli ako bude jos parametara posle njega */

function restOperator (...args) {
  console.log(args);
}

console.log(restOperator(1, 2, 3, 4, 5, 10));

/*U konzoli cemo videti da je args an Array sa 6 argumenata
(1, 2, 3, 4, 5, 10), a ako bismo obrisali (...) ispred args,
to bi znacilo da f-ja ima jedan parametar tj.args i kad
odradimo save, u konzoli izbacuje broj 1, a to je prvi 
argument iz (1, 2, 3, 4, 5, 10).

Primer sa 1 ide ispod: */

function restOperator (args) {
  console.log(args);
}

console.log(restOperator(1, 2, 3, 4, 5, 10));

/*Sustina-kad primenjujemo Rest Operator uz parametar f-je, 
onda mozemo dodati koliko god zelimo argumenata i Rest Op
ce uzeti sve njih i staviti u Array!!! */

/*Ako zelimo stare brojeve vratiti u Array, dodacemo
reduce method (uz arrow function) */

function restOperator1 (...argss) {
 return argss.reduce((a, b) => a + b)
}

console.log(restOperator1(1, 2, 3, 4, 5, 10));

/*3167 linija koda skracuje postupak umesto let total = 0, 
pa koriscenje loop-a */

/*Iskoristicemo ovu f-ju da saberemo racun za sve stavke 
koje smo kupili u prodavnici i recimo da imamo 10% popusta
na racun (0.1) */

function shopping (discount, ...prices) {

  const totanliZbir = prices.reduce((a, b) => a + b);
  return totanliZbir * (1 - discount);
}

console.log(shopping(0.1, 20, 30)); //45$

/*0.1 (10% popust) i 2 stvari (20 i 30$) dace finalni 
rezultat 45$ */

/*Ako dodamo jos jedan parametar iza ...prices izbacuje
gresku i dole bi trebalo dodati (0.1, 20, 30, 1) npr 1. */

// function shopping (discount, ...prices, someValue) {

//   const totanliZbir = prices.reduce((a, b) => a + b);
//   return totanliZbir * (1 - discount);
// }

// console.log(shopping(0.1, 20, 30, 1)); 

/*Ovim dokazujemo receno da rest operator (parameter) -
ovde je ...prices - rest parameter i on mora biti last
parameter in the Function da bi sve radilo. */

//5. Default Parameters (postavljanje default value-a)

/*Kad npr. hocemo da izracunamo kolika nam je kamatna 
na kredit u apsolutnom iznosu (inace je kamatna stopa 3,5%)*/

function interest(principal, rate, years) {
  return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5)); //1750$ kamata

//Osnovica 10 000$, kamatna stopa 3,5% i redit na 5 godina

/*Postavljanje default vrednosti npr.:

Ako hocemo da kamatna stopa (ili osnovica, godine, stagod)
bude onolika kolikom je definisemo ili 3,5% (stopa), 
5 (godina) ukoliko ih ne definisemo ispisacemo:

rate = rate || 3.5; 
years = years || 5;

We use logical OR operator || to give a variable a 
default value !!! 

I ako dole u console.log(interest) - ostavimo samo ovo
bice okej jer smo gore predefinisali vrednosti, evo primer: */

function kamatica(glavnica, stopa, trajanje) {
  stopa = stopa || 3.5;
  trajanje = trajanje || 5;
  return glavnica * stopa / 100 * trajanje;
}

console.log(kamatica(10000)); //Bice isto 1750 !!!

//JOS LAKSI NACIN I BOLJI ZA OVO ISTO:

function najlaksaKamata(osnoviica, stopica = 3.5, godinice = 5) {
  return osnoviica * stopica / 100 * godinice;
}

console.log(najlaksaKamata(10000)); //ISTI REZ 1750$ !!!

/*AKO DAMO DEFAULT VALUE NEKOM PARAMETRU, OBAVENO MORAMO
DATI I DEFAULT VALUE SVIM PARAMETRIMA KOJI SLEDE POSLE 
NJEGA !!! Inace u konzoli cemo dobiti NaN (jer ovde bi
godinice kao zadnji parametar bez vrednosti bio Undefined) !!! */

