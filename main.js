const userKm = document.querySelector("#userKm");
const userAge = document.querySelector("#userAge");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

button.addEventListener("click", (event) => {
    event.preventDefault();

    const km = (Number(userKm.value));
    const age = (Number(userAge.value));
    
    console.log({km, age});
})