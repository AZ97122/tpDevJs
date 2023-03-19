# **TP Développement web JavaScript API Fetch**

## _API utilisées_ :

J'ai utilisé 2 API :   
- 'Dog API' (url : https://dog.ceo/dog-api/documentation/random)
- 'The Cat API' (url : https://thecatapi.com)

## _Site_ :
Le site est divisé en deux parties :
- Dans la partie de gauche, le bouton permet d'afficher des images récupérées avec l'API 'Dog API'
- Dans la partie de droite, le bouton permet d'afficher des images récupérées avec l'API 'The Cat API'.
## _Librairies utilisées_ :
Uniquement Boostrap, pour au final l'utiliser uniquement pour centrer le text avec 'text-center'.

## _Difficultés_ :
Je n'ai pas pu utiliser la même méthode pour lers deux API. Le code pour l'API des chiens ne fonctionnait pas pour celle des chats puisque celle-ci renvoyait un tableau d'élément. J'ai donc du adapaté le code afin de séléctionner l'élément en index 0 pour récupérer le premier élément.