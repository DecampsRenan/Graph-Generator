var express = require('express'),
	/* routes  = require('routes'), */
	app     = express();


app.get('/', function(req, res) {
	
	var test = {
		prop1 : "test",
		prop2 : 123,
		prop3 : {
			test : [ 1, 2, 3]
		}
	};

	res.send(JSON.stringify(test));
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);
});

/*
var Graphe = require('Graphe');

var graphe = new Graphe('graphe.json');
console.log(graphe.toString());

console.log("----------------------");

console.log(graphe.toJSON());
*/