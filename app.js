const divOriginal = document.getElementById('original');
const divErreurs = document.getElementById('erreurs');
const divDifferences = document.getElementById('differences');

console.log(divErreurs)
var imgOriginal = document.createElement('img');
imgOriginal.src = "original.png";

var imgErreur = document.createElement('img');
imgErreur.src = "falsifier.png";
imgErreur.id="photo-erreur";

var borneImg = document.createElement('img');
borneImg.src = "./photos differences/borne-poste";
borneImg.id="borne";

divOriginal.appendChild(imgOriginal);
divErreurs.appendChild(imgErreur);
divErreurs.appendChild(borneImg);

const borne = document.getElementById('borne');

borne.addEventListener ('click', function(){
    borne.style.opacity = "1";
})

