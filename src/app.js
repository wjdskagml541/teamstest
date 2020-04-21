const express = require('express');
const path = require('path');

var app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.locals.pretty = true;

app.use(express.static('public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/form', function(req, res){
   
    res.render('form');

});

app.post('/form_receiver', function(req, res){

    var title = req.body.title;
    var desc = req.body.desc;
   
    res.send(title+','+desc);

});

app.get('/', function(req, res){
    res.send('Hello world');
});

app.listen(3000, function(){
    console.log('Connected 3000 port!');
});