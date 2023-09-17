var express = require('express');
var app = express();

app.use('/static', express.static('public'));
app.set("view engine", "ejs");

app.get('/', function( req, res ){
    res.render('home.ejs');
})

//app.get('/results', function( req, res ){
    //change to another ejs file with movie/show results info
    //res.render('home.ejs');
//})

//app.get('/', function( req, res ){
    //change to another ejs file with contact info
    //res.render('home.ejs');
//})

app.listen(3000, () => {
    console.log('started on port 3000')
})