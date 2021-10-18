const divOriginal = document.getElementById('original');
const divErreurs = document.getElementById('erreurs');
const divDifferences = document.getElementById('differences');
const bouton = document.getElementById('bouton');

console.log(divErreurs)
var imgOriginal = document.createElement('img');
imgOriginal.src = "original.jpg";

var imgErreur = document.createElement('img');
imgErreur.src = "falsifier.jpg";
imgErreur.id="photo-erreur";

var borneImg = document.createElement('img');
borneImg.src = "./photos differences/borne.png";
borneImg.id="borne";

var climImg = document.createElement('img');
climImg.src = "./photos differences/climatiseur.png";
climImg.id = "clim";

var fenetreImg = document.createElement('img');
fenetreImg.src = "./photos differences/fenetre.png";
fenetreImg.id = "fenetre";

var satelliteImg = document.createElement('img');
satelliteImg.src = "./photos differences/satellite.png";
satelliteImg.id = "satellite";

var margeImg = document.createElement('img');
margeImg.src = "./photos differences/marge.png";
margeImg.id = "marge";

var voitureImg = document.createElement('img');
voitureImg.src = "./photos differences/voiture.png";
voitureImg.id = "voiture";

var toitImg = document.createElement('img');
toitImg.src = "./photos differences/toit.png";
toitImg.id = "toit";






divOriginal.appendChild(imgOriginal);
divErreurs.appendChild(imgErreur);
divErreurs.appendChild(borneImg);
divErreurs.appendChild(climImg);
divErreurs.appendChild(fenetreImg);
divErreurs.appendChild(margeImg);
divErreurs.appendChild(satelliteImg);
divErreurs.appendChild(voitureImg);
divErreurs.appendChild(toitImg);

const borne = document.getElementById('borne');
const clim = document.getElementById('clim');
const fenetre = document.getElementById('fenetre');
const satellite = document.getElementById('satellite');
const marge = document.getElementById('marge');
const voiture = document.getElementById('voiture');
const toit = document.getElementById('toit');

// ---------------- code factorisé---------------------
let tabErreur = [borne, clim, fenetre, satellite, marge, voiture];

tabErreur.forEach(element => element.addEventListener('click', function(){
    element.style.opacity='1';
})) //je rappelle mon tableau, pour chaque element du tableau je lui fais une ecoute, qd je click je lance la fonction. je mets une opacité de 1 sur l'element 

// ------------------ code non factorisé -----------
// clim.addEventListener ('click', function(){
//     clim.style.opacity = "1";
// })
// fenetre.addEventListener ('click', function(){
//     fenetre.style.opacity = "1";
// })
// satellite.addEventListener ('click', function(){
//     satellite.style.opacity = "1";
// })
// marge.addEventListener ('click', function(){
//     marge.style.opacity = "1";
// })
// voiture.addEventListener ('click', function(){
//     voiture.style.opacity = "1";
// })
toit.addEventListener ('click', function(){
    toit.style.opacity = "0";
})

//--------------- pour relancer le jeu --------------------------
 btn1.addEventListener('click', function(){ //je lance une fonction qd je click sur le btn rejouer tout les element reprenne une opacité de 0 
    tabErreur.forEach(element => 
        element.style.opacity='0');
        toit.style.opacity = "1";
 })
 



