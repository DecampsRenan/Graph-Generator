// On ajoute les dépendances
var express = require('express'),
	Graphe  = require('Graphe');

// On rend les objets principaux
// accessibles globalement
global.app    = express();
global.Graphe = Graphe;

// Initialisation des routes
require('routes');
require('init');