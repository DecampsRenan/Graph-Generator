var express = require('express');
var cyto = require('cytoscape')
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req,res){
    res.render('index.ejs', { });
})
.listen(8080);




