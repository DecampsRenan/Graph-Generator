var Graphe = require('Graphe');

var graphe = new Graphe('graphe.json');
console.log(graphe.toString());

console.log("----------------------");

console.log(graphe.toJSON());