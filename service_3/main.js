var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);



io.on('connection', function(socket){
  console.log('a user connected');
});

io.on('graphe', function(socket){
  console.log('a user graphe');
});



// Lancement du serveur
server.listen(8083, function() {
	var port = server.address().port;

	console.log('App listening at http://127.0.0.1:%s', port);
});