/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 10; // Primo numero
let num2 = 20; // Secondo numero
if (num1 > num2) {
  console.log(num1 + " è il più grande");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let number = 3; // Numero da verificare
if (number !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let num = 25; // Numero da verificare
if (num % 5 === 0) console.log("divisibile per 5");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let numA = 6; // Primo numero
let numB = 2; // Secondo numero
if (numA === 8 || numB === 8 || numA + numB === 8 || numA - numB === 8) {
  console.log("Uno dei numeri è 8 o la loro somma/sottrazione è 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60; // Saldo totale del carrello
let shippingCost = 10; // Costo della spedizione
if (totalShoppingCart >= 50) {
  console.log("Spedizione gratuita");
  console.log("Totale da pagare: " + totalShoppingCart);
} else {
  console.log("Spedizione a pagamento: " + shippingCost);
  console.log("Totale da pagare: " + (totalShoppingCart + shippingCost));
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let cartTotal = 80;
let discount = cartTotal * 0.2;
let discountedTotal = cartTotal - discount;
let shipping = discountedTotal > 50 ? 0 : 10;
let finalAmount = discountedTotal + shipping;
console.log("Totale scontato con spedizione: €" + finalAmount);
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 15;
let b = 30;
let c = 10;
let sort = [a, b, c].sort((x, y) => y - x);
console.log("Numeri ordinati dal più alto al più basso: " + sort);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let value = "Ciao"; // Valore da verificare
if (typeof value === "number") {
  console.log("Il valore è un numero");
} else {
  console.log("Il valore non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numberToCheck = 7; // Numero da verificare
if (numberToCheck % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 6; // Valore da verificare
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto"; // Aggiunta della proprietà "city"
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName; // Rimozione della proprietà "lastName"
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop(); // Rimozione dell'ultimo elemento dell'array "skills"
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let numbersArray = []; // Array inizialmente vuoto
for (let i = 1; i <= 10; i++) {
  numbersArray.push(i); // Aggiunta dei numeri da 1 a 10
}
console.log(numbersArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.*/

numbersArray[numbersArray.length - 1] = 100; // Sostituzione dell'ultimo elemento con 100
console.log(numbersArray);
