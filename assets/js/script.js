console.log("Script chargé !");
const urlApiAdresse = "https://api-adresse.data.gouv.fr/search/q=";
let arrayListAdresse;

await adresseList();
async function adresseList () {
    const res = await fetch(urlApiAdresse);
    arrayListAdresse = await res.json();
    console.log("Les adresses : ", arrayListAdresse);
    }

document.querySelector("#rue")