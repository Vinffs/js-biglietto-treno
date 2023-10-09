let km, age, discountedCost, totalCost;
const twentyPC = 20/100;
const fortyPC = 40/100;
const costKm = 0.21;


km = parseInt(prompt("Inserisci i km da percorrere"));
console.log(km)

 if(parseInt(km)) {
 } else{ 
   alert('Il numero inserito non è valido, si prega di verificare.');
   location.reload();
 }

age = parseInt(prompt("Inserisci la tua età"));
console.log(age)

 if(parseInt(age)) {
 } else{
   alert ("L'età inserita non è valida, si prega di verificare.");
   location.reload();
 }

totalCost = ( km * costKm);

if (age < 18) {
  discountedCost = totalCost - (totalCost * twentyPC) ;

} else if (age >= 65) {
  discountedCost = totalCost - (totalCost * fortyPC );

} else {
  discountedCost = totalCost;
}

console.log(discountedCost);


document.getElementById('ticket-price').innerHTML = `
Il prezzo del suo biglietto è di: €${discountedCost.toFixed(2)}
`
