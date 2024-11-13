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

let decimal1 = prompt("Donnez moi un nombre a virgule");
let decimal2 = prompt("Donnez moi un autre nombre a virgule");

let num1 = parseInt(decimal1);

let entier1 = Math.round(num1);


window.alert(entier1 * decimal2);

console.log(" ");

let numero1 = prompt("Donnez moi un nombre");
let numero2 = prompt("Donnez moi un autre nombre");

let numchange1 = parseInt(numero1);
let numchange2 = parseInt(numero2);

let entiergui1 = Math.trunc(numchange1);
let entiergui2 = Math.trunc(numchange2);

window.alert(entiergui1 % entiergui2);

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

let multiplieur = prompt("Donnez moi un nombre?");

let changerprompt = parseInt(multiplieur);

function multiplier(a) {
  for (let i = 1; i < 10; i = i + 1) {
    return a * i;
  };
};

let resultat = multiplier(changerprompt);

window.alert(resultat);
