console.log("Le script est chargé");

// 1. Récupérer le bouton et le tableau
const boutonHoraires = document.querySelector("#bouton-horaires");
// recuperer la table des horaires (via son ID)
const tableHoraires = document.querySelector("#table-horaires");
// 2. Écouter le clic sur le bouton
boutonHoraires.addEventListener("click", function () {
 document.querySelector("#table-horaires").classList.toggle("cache");
});


// on defini la variable nombre
let nombre = 0;
// on defini la variable compteur, qui recupere la zone du panier via son id
const compteur = document.querySelector("#compteur");
// on defini la variable boutons, qui recupere tous les boutons qui ont la classe defini
const boutons = document.querySelectorAll(".produit-bouton");
// et ensuite on lui applique une boucle
for (const bouton of boutons) {
// pour chaque bouton, dans ma liste de boutons
 bouton.addEventListener("click", function () {
    //on ecoute le clic
 nombre = nombre + 1;
 //on ajoute +1 au compteur
 compteur.textContent = nombre;
 //on remplace le texte du panier par mon nombre
 });
}



