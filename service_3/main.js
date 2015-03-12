var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


io.on('connection', function(socket){
	console.log('a user connected');
	
	socket.on('graphe', function(socket){
		console.log('reception du beau graphe <3');
		console.log(socket);
		var LeGraphe = socket;
		//console.log(JSON.stringify(LeGraphe));

		var krustalResultat = kruskal(LeGraphe);
	});

});

function kruskal(unGraphe){
	// tableau de sommets
	var T = [];
	console.log(unGraphe.nodes.length);
	for(i=0; i<unGraphe.nodes.length; i++){
		console.log(unGraphe.nodes[i].data);
	}
	var tabEdges = [];

	
	// TRI DES ARRETES DU MOINS FORT AU PLUS FORT
	var n = unGraphe.edges.length;
	var tabEdges = unGraphe.edges;
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
	
	for(a=0; a<n; a++){
		if(	
	}

	console.log("-----");
	console.log(tabEdges);
	return null;
}



// Lancement du serveur
server.listen(8083, function() {
	var port = server.address().port;

	console.log('App listening at http://127.0.0.1:%s', port);
});