let coucou = alert("COUCOU");

console.log(" ")

let lastname = "Doe";
let firstname = "John";
let city = "New York";

window.confirm("Nom: "+lastname+"\n"+"Prénom: "+firstname+"\n"+"Ville: "+city);

console.log(" ");

let prenom = prompt("Comment t'appelles tu?");
let bonjour = alert("Bonjour "+prenom);

console.log(" ");

let lastnamereturn = prompt("Ton nom");
let firstnamereturn = prompt("Ton prénom");
let cityreturn = prompt("Ta ville");

window.confirm("Nom: "+lastnamereturn+"\n"+"Prénom: "+firstnamereturn+"\n"+"Ville: "+cityreturn);

console.log(" ");

let decimal1 = prompt("Donnez moi un nombre a virgule");
let decimal2 = prompt("Donnez moi un autre nombre a virgule");

let num1 = parseInt(decimal1);
let num2 = parseInt(decimal2);

let entier1 = Math.round(num1);
let entier2 = Math.round(num2);

window.alert(entier1 * entier2);

console.log(" ");
