var express = require('express'),
	cyto    = require('cytoscape'),
	path    = require('path'),
	app     = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req,res){
    res.render('index.ejs', { });
})
.listen(80, function() {
	var port = this.address().port;

	console.log('App listening at http://127.0.0.1:%s', port);
});