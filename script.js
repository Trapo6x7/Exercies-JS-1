let coucou = alert("COUCOU");

console.log(" ");

let lastname = "Doe";
let firstname = "John";
let city = "New York";

window.confirm(
  "Nom: " + lastname + "\n" + "Prénom: " + firstname + "\n" + "Ville: " + city
);

console.log(" ");

let prenom = prompt("Comment t'appelles tu?");
let bonjour = alert("Bonjour " + prenom);

console.log(" ");

let lastnamereturn = prompt("Ton nom");
let firstnamereturn = prompt("Ton prénom");
let cityreturn = prompt("Ta ville");

window.confirm(
  "Nom: " +
    lastnamereturn +
    "\n" +
    "Prénom: " +
    firstnamereturn +
    "\n" +
    "Ville: " +
    cityreturn
);

console.log(" ");

let decimal1 = parseInt(prompt("Donnez moi un nombre a virgule"));
let decimal2 = parseFloat(prompt("Donnez moi un autre nombre a virgule"));

let entier1 = Math.trunc(decimal1);

window.alert(entier1 * decimal2);

console.log(" ");

let numero1 = parseInt(prompt("Donnez moi un nombre"));
let numero2 = parseInt(prompt("Donnez moi un autre nombre"));

import { resteDivision  } from "./script2.js";

window.alert(resteDivision(numero1,numero2));

console.log(" ");

let prompt1 = prompt("Pointure de chaussures");
let prompt2 = prompt("Année de naissance");

let numchanger1 = parseInt(prompt1);
let numchanger2 = parseInt(prompt2);

function calcul(a, b) {
  return (a * 2 + 5) * 50 - b + 1766;
}

window.alert(calcul(numchanger1, numchanger2));

console.log(" ");

let adulte = prompt("Quel age avez vous?");

let numchangeradulte = parseInt(adulte);

if (numchangeradulte >= 18) {
  window.alert("vous etes majeur");
} else {
  window.alert("vous etes mineur");
}

console.log(" ");

let multiplieur = parseInt(prompt("Donnez moi un nombre?"));

function multiplier(a) {
  let resultat ="";

  for (let i = 1; i <= 10; i = i + 1) {
    resultat += a + " x " + i + " =  "+(a * i)+"\n";
  };

  return resultat;
};

let resultat = multiplier(multiplieur);

window.alert(resultat);

console.log(" ");

let phrase = prompt("phrase")

for (let i = 0; i < phrase.length ; i++) {
    console.log(phrase.charAt(i))
    console.log(" ")
}

console.log(" ");

let randomNumber = parseInt(prompt("Donnez moi un nombre entre 1 et 10"));

function randomNum(a){
for (let i=0; i<=10; i += 1){
  if (a<5){
    return "Le nombre saisi est inférieur à 5"
  } else if (a===5){
    return "Le nombre saisi est égal à 5"
  } else if (a>5){
    return "Le nombre saisi est supérieur à 5"
  };
}
};

window.alert(randomNum(randomNumber));

console.log(" ");

function exponentiel(a){
  return a ** 2
};

let carreNombre = parseInt(prompt("Donnez moi un nombre"));

window.alert(exponentiel(carreNombre));

