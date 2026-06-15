const userKm = document.querySelector("#userKm");
const userAge = document.querySelector("#userAge");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

button.addEventListener("click", (event) => {
    event.preventDefault();

    const km = (Number(userKm.value));
    const age = (Number(userAge.value));
    
    console.log({km, age});
    
    const prezzoBase = km * 0.21;
    console.log(prezzoBase);

    let prezzoFinale = prezzoBase;

    if(age < 18) {
        prezzoFinale = prezzoBase * 0.80;
    } else if (age > 65) {
        prezzoFinale = prezzoBase * 0.6;
    }
    console.log(prezzoFinale.toFixed(2));
    
    result.textContent = `Il prezzo finale del tuo biglietto è: ${prezzoFinale.toFixed(2)} €`;
})