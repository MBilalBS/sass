console.log("Script chargé !");

let listeParent = document.querySelector("ul")
const urlApiAdresse = "https://api-adresse.data.gouv.fr/search/?q=";
let arrayListAdresse = []; 
let nom = document.getElementById("nom").value
let prenom = document.getElementById("prenom").value
let email = document.getElementById("email").value
let adresseFacture = document.getElementById("rue-facture")
let villeFacture = document.getElementById("ville-facture")
let codePostalFacture = document.getElementById("code-postal")
// let = document.getElementById("")
// let = document.getElementById("")
// let = document.getElementById("")


adresseFacture.addEventListener('input', async function () {
    let valeurUser = adresseFacture.value 
    // console.log("Mon utilisateur a ecris", valeurUser );
    if (valeurUser.length > 0){
        listeParent.innerText = "";
    }
    if (valeurUser.length > 5){
        listeParent.innerText = "";
    await adresseList();
    async function adresseList () {
    //"8 boulevard Saint-Michel" -> "8+boulevard+Saint-Michel"
    const res = await fetch(`${urlApiAdresse}`+ valeurUser);
    arrayListAdresse = await res.json();

    console.log("Les adresses : ", arrayListAdresse);
    arrayListAdresse.features.forEach(element => {
        let proprietes = element.properties
    });
    

    
    
    for (let i = 0; i < arrayListAdresse.features.length; i++ ){
        let listeEnfant = document.createElement("li");
        listeEnfant.classList.add(".liste-adresse");
        listeEnfant.innerText = arrayListAdresse.features[i].properties.label;
        console.log(arrayListAdresse.features[i]);
        listeParent.appendChild(listeEnfant)
            listeEnfant.addEventListener("click", (event) => {
                // console.log(adresseFacture);
                // console.log(event.target.textContent.split(" "));
        adresseFacture.value = event.target.textContent = (arrayListAdresse.features[i].properties.name);
        villeFacture.value = event.target.textContent = (arrayListAdresse .features[i].properties.city);
        codePostalFacture.value = event.target.textContent = (arrayListAdresse .features[i].properties.postcode);
      });
    }

}
} 
})