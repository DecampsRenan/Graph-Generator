# WebApp - Graph Theory

Vincent BERNIERE  
Quentin BRODIER  
Matthieu COULON  
Renan DECAMPS

# Introduction

Le but de ce projet est de mettre en place un système de communication entre un portail et trois services.

Les trois services sont un générateur de graphe, un algorithme pour le Single Source Shortest Path problem
et un algorithme pour le Minimum Spanning Tree problem. Les deux derniers services sont des problèmes classiques
de la théorie des graphes. Le portail est un site web permettant d'interagir facilement avec les trois services.


# Technologie utilisée

Les services et le portail seront tous réalisé via [NodeJS](http://nodejs.org/ "Télécharger NodeJS").
Pour en apprendre plus, visitez [ce lien](http://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js "Tutoriel NodeJS - OpenClassroom").

Chaque service pourra ainsi être lancé sur un serveur différent sans pour autant nuire au bon fonctionnement de l'application.
