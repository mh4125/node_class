var express = require('express');
var app = express();

app.use('/static', express.static('public'));
app.set("view engine", "ejs");

app.get('/', function( req, res ){
    res.render('home.ejs');
})

app.get('/path/:name', function( req, res ){
    let name = req.params.name
    console.log(name)
    res.render('home.ejs');
})

app.get('/query', function( req, res ){
    let name = req.query.name
    console.log(name)
    res.render('home.ejs');
})

app.listen(3000, () => {
    console.log('started on port 3000')
})

// path param REQUIRED /home/6821868/...
//query param /home?foo=bar&bar=foo
//PUT & POST/ CREATE & UPDATE body, from a form