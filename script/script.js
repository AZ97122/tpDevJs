const btnDog = document.getElementById('btnDog'); // On initialise une variable qui correspond à l'élément du document 'index.html' ayant pour id 'btnDog'
const containerDog = document.getElementById('containerDog'); // on initialise une variable qui correspond à l'élément du document 'index.html' ayant pour id 'containerDog'
let currentImgDog = null; // On définit une variable sans valeur, celle-ci contiendra l'image récupérée

btnDog.addEventListener('click', fetchPhotoDog); // Lors du click sur le bouton avec l'id 'btnDog', la fonction 'fetchPhotoDog' sera appelée

function fetchPhotoDog() { // Fonction pour les images de chiens
  fetch('https://dog.ceo/api/breeds/image/random') // On utilise 'API Fetch' pour envoyer une requête GET à une API générant des images de chiens aléatoires
    .then(response => response.json()) // On convertit les données JSON reçues en objet JS
    .then(dataApiDog => { 
      const imgDog = document.createElement('img'); // On créer un élément 'img' dans notre document html
      imgDog.src = dataApiDog.message; // le 'src' de notre nouvel élément 'img' prends comme valeur l'url de l'image qu'on obtient avec l'API
      
      if (currentImgDog) { // Si la variable 'currentImgDog' a déjà une valeur, et donc qu'une image est déjà affichée dans l'élément 'containerDog', on supprime cette image
        containerDog.removeChild(currentImgDog);
      }

      currentImgDog = imgDog; // On stocke l'image obtenue dans la variable 'currentImgDog', comme vu dans la condition du dessus, elle sera supprimée au prochain appel de la fonction
      containerDog.appendChild(imgDog); // On ajoute l'image obtenue à l'élément 'containerDog'
    })

    .catch(error => console.log(error)); // En cas d'erreur, celle-ci sera affichée dans la console
}

const btnCat = document.getElementById('btnCat'); // On initialise une variable qui correspond à l'élément du document 'index.html' ayant pour id 'btnCat'
const containerCat = document.getElementById('containerCat'); // on initialise une variable qui correspond à l'élément du document 'index.html' ayant pour id 'containerCat'
let currentImgCat = null; // On définit une variable sans valeur, celle-ci contiendra l'image récupérée

btnCat.addEventListener('click', fetchPhotoCat); // Lors du click sur le bouton avec l'id 'btnCat', la fonction 'fetchPhotoCat' sera appelée

function fetchPhotoCat() { // Fonction pour les images de chats
  fetch('https://api.thecatapi.com/v1/images/search') // // On utilise 'API Fetch' pour envoyer une requête GET à une API générant des images de chats aléatoires
    .then(response => response.json()) // On convertit les données JSON reçues en objet JS
    .then(dataApiCat => {
      const imgCat = document.createElement('img'); // On créer un élément 'img' dans notre document html
      imgCat.src = dataApiCat[0].url; // Etant donnée que nous nous retrouvons avec un tableau d'objet, on récupère l'élément à l'index 0 (premier élément). Le 'src' de notre nouvel élément 'img' prends comme valeur l'url de cette première image
      
      if (currentImgCat) { // Si la variable 'currentImgCat' a déjà une valeur, et donc qu'une image est déjà affichée dans l'élément 'containerCat', on supprime cette image
        containerCat.removeChild(currentImgCat);
      }

      currentImgCat = imgCat; // On stocke l'image obtenue dans la variable 'currentImgCat', comme vu dans la condition du dessus, elle sera supprimée au prochain appel de la fonction
      containerCat.appendChild(imgCat); // On ajoute l'image obtenue à l'élément 'containerDog'
    })
    .catch(error => console.log(error)); // En cas d'erreur, celle-ci sera affichée dans la console
}
