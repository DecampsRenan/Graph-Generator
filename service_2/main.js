// On ajoute les d�pendances
var express = require('express');

// On rend les objets principaux
// accessibles globalement
global.app    = express();

// Initialisation des routes
require('routes');

// Initialisation du serveur et lancement
require('init');
