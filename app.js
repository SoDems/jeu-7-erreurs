const divOriginal = document.getElementById('original');
const divErreurs = document.getElementById('erreurs');
const divDifferences = document.getElementById('differences');
const borne = document.getElementById('borne');

var img = document.createElement('img');
img.src = "original.png";
var imgs = document.createElement('img');
imgs.src = "falsifier.png";



divOriginal.appendChild(img);
divErreurs.appendChild(imgs);

borne.addEventListener ('click' ,   function(){
    borne.style.opacity = "0";


})

