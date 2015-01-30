var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.render('index.ejs', { });
})
.listen(8080);