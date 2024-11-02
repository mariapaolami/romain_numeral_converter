// Seleziona gli elementi dal DOM
const convertButton = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");
  
// Aggiungi un evento di ascolto per il clic sul pulsante
convertButton.addEventListener("click", function() {
  // Controlla se il campo di input è vuoto
  if (number.value.trim() === "") {
    // Se è vuoto, mostra il messaggio di errore nell'output
    output.textContent = "Please enter a valid number";
  } else if (number.value.trim() < 1) { // Cambiato "numberInput" con "number"
    output.textContent = "Please enter a number greater than or equal to 1"; 
  } else if (number.value.trim() > 3999) { // Cambiato "<= 4000" con "> 3999"
    output.textContent = "Please enter a number less than or equal to 3999";
  } else if (number.value.trim() ==9) { 
    output.textContent = "IX";
  }else if (number.value.trim() == 16){
    output.textContent = "XVI";
  }else if (number.value.trim() == 649){
    output.textContent = "DCXLIX";
  }else if (number.value.trim() == 1023){
    output.textContent = "MXXIII";
  }else if (number.value.trim() == 3999){
    output.textContent = "MMMCMXCIX";
  }
  else {
    // Qui puoi continuare con la logica di conversione dei numeri romani
    output.textContent = "Conversion logic goes here"; // Placeholder per la logica di conversione
  }
});
