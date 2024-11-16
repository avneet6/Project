const express = require('express');
const app = express();
path = require('path');

app.get('/', function(req, res){
    res.redirect('index.html');
});


app.get('/index.html',function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));


});



app.listen(3000);