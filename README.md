![img.png](img.png)
# GestFormTest
Version : 1.0
Date : 11/09/2020
Réf. : TEST-EMB-GESTFORM
Classification : Publique

# Test d’entretien « GestForm »
## Instructions
Vous devez établir un programme permettant de répondre à l’énoncé ci-dessous.
Le programme doit être écrit de préférence dans un langage en correspondance 
avec le poste pour lequel vous postulez (python, nodejs, angular, etc...).
## Énoncé
Soit une liste aléatoire de nombres entiers, compris entre -1000 et 1000. 

Pour chaque nombre n de liste, on veut effectuer les opérations suivantes :
* si le nombre est divisible par 3 : on affiche Geste
* si le nombre est divisible par 5 : on affiche Forme
* si le nombre est divisible par 3 et par 5 : on affiche Gestform (d’où le nom du test)
* sinon : on affiche le nombre n
## Livrable
Il faut fournir le ou les fichiers permettant à notre équipe de vérifier le bon fonctionnement du programme.

## Versions Techniques

Angular CLI: 17.2.2
Node: 20.11.1
Package Manager: npm 10.5.0
OS: win32 x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1702.2 (cli-only)
@angular-devkit/core         17.2.2 (cli-only)
@angular-devkit/schematics   17.2.2 (cli-only)
@schematics/angular          17.2.2 (cli-only)

## Installation

1. Cloner le projet sur votre ordinateur
2. Ouvrir un terminal dans le dossier du projet
3. Exécuter la commande `npm install` pour installer les dépendances
4. Exécuter la commande `ng serve` pour lancer le serveur de développement
5. Ouvrir un navigateur et accéder à l'adresse `http://localhost:4200/`

## Fonctionnalités

1. Génération de données aléatoires
   * Création d'une liste de nombres entiers aléatoires : Le programme est capable de générer une séquence de nombres entiers. Chaque nombre est sélectionné aléatoirement et se trouve dans un intervalle défini entre -1000 et 1000.
2. Application de règles conditionnelles
   * Divisibilité par 3 : Pour chaque nombre de la liste, le programme vérifie s'il est divisible par 3. Si c'est le cas, le programme répond par une action spécifique, comme afficher le mot "Geste".
   * Divisibilité par 5 : De même, le programme vérifie la divisibilité de chaque nombre par 5 et réagit en conséquence en affichant "Forme" si la condition est remplie.
   * Divisibilité par 3 et 5 (simultanément) : Une vérification supplémentaire est faite pour les nombres qui sont à la fois divisibles par 3 et 5 (ce qui équivaut à vérifier la divisibilité par 15), auquel cas le programme affiche "Gestform".
   * Traitement des cas non spécifiés : Pour tous les nombres qui ne répondent à aucune des conditions ci-dessus, le programme affiche le nombre lui-même.
