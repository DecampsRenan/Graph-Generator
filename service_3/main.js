var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


io.on('connection', function(socket){
	console.log('a user connected');
	
	socket.on('graphe', function(socket){
		console.log('\n1 /================================================');
		console.log('GRAPHE D’ENTREE\n');
		console.log(socket);
		var LeGraphe = socket;
		//console.log(JSON.stringify(LeGraphe));

		var krustalResultat = kruskal(LeGraphe);
	});

});

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

function kruskal(unGraphe){
	
	// TABLEAU DE SOMMETS
	console.log('\n2 /================================================');
	console.log('NOMBRE DE NOEUDS & Affichage\n');
	console.log(unGraphe.nodes.length);

	
	var T = new Array();


	for(i=0; i<unGraphe.nodes.length; i++){
		console.log(unGraphe.nodes[i].data);
		T[i] = new Array();
		T[i][0] = unGraphe.nodes[i].data.id;
	}
	var tabEdges = [];
	

	// TRI DES ARRETES DU MOINS FORT AU PLUS FORT
	var n = unGraphe.edges.length;
	var tabEdges = unGraphe.edges;

	console.log('\n3 /================================================');
	console.log('TABEDGES AVANT TRI\n');
	console.log(tabEdges);

	var tabFinal = null;
	for(i=1; i<n; i++){
		j=i;
		v=tabEdges[i];
		while(j>0 && v.data.weight < tabEdges[j-1].data.weight){
			tabEdges[j] = tabEdges[j-1];
			j = j-1;
		}
		tabEdges[j] = v;
	}
	
	console.log('\n4 /================================================');
	console.log('TABEDGES APRES TRI\n');
	console.log(tabEdges);

	

	// ALGORITHME DE KRUSKAL - ON GARDE LE MINIMUM D’ARRETE
	// TOUT EN LIANT LE GRAPHE

	var tabEdgesKruskal = []; // Tableau final des arêtes
	var s,t; // Sommet Source - Sommet Destination (Target)
	var bool; // Test si on choisit de mettre l’arête ou pas
	var ind; // Indice dans le tableau du/des Sommet(s) à mettre
	var is; // Indice dans le tableau du Sommet à enlever

	// Tant que tous les sommets ne sont pas regroupés dans 1 ensemble
	for(a=0 ; T.length != 1 ; a++){
		
		s = tabEdges[a].data.source;
		t = tabEdges[a].data.target;
		
		// On trouve l’indice ou est le sommet à enlever
		for(c=0 ; c < T.length ; c++){
			if(contains(T[c],t)){
				is = c;
			}
		}

		// Tester si les 2 sommets ne sont pas dans le même tableau (le même ensemble)
		bool = true;

		for(b=0 ; b < T.length && bool; b++){
			
			// Si les 2 sommets sont dans le même ensemble
			if(contains(T[b],s) && contains(T[b],t)){
				bool = false;
			}
		}
		
		// On ajoute cette arête
		if(bool == true){

			tabEdgesKruskal[a] = tabEdges[a];
			
			ind = T[s-1].length;

			for(j=0 ; j < T[is].length ; j++){
				T[s-1][ind] = T[is][j];
				ind++;
			}
			
			T.splice(is,1);	// On supprime la ligne du tableau qui contenait les sommets déplacés
		}
		

	}

	console.log('\n5 /================================================');
	console.log('TABEDGES APRES KRUSKAL\n');
	console.log(tabEdgesKruskal);

	
	return null;
}



// Lancement du serveur
server.listen(8083, function() {
	var port = server.address().port;

	console.log('App listening at http://127.0.0.1:%s', port);
});