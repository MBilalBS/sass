console.log("Script chargé !");
const urlApiAdresse = "https://api-adresse.data.gouv.fr/search/?q=";
let arrayListAdresse = [];

let nom = document.getElementById("nom").value
let prenom = document.getElementById("prenom").value
let email = document.getElementById("email").value
let adresseFacture = document.getElementById("rue-facture")






adresseFacture.addEventListener('input', async function () {
    let valeurUser = adresseFacture.value 
    console.log("Mon utilisateur a ecris", valeurUser );
    if (valeurUser.length > 5){

    await adresseList();
    async function adresseList () {
    //"8 boulevard Saint-Michel" -> "8+boulevard+Saint-Michel"
    const res = await fetch(`${urlApiAdresse}`+ valeurUser);
    arrayListAdresse = await res.json();

    console.log("Les adresses : ", arrayListAdresse);
    arrayListAdresse.features.forEach(element => {
        let proprietes = element.properties
    });
    }
} 
})

