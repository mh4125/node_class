var express = require('express');
var app = express();
var bodyParser = require("body-parser")
var axios = require('axios').default

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/static', express.static('public'));
app.set("view engine", "ejs");

app.get('/', function( req, res ){
    axios.get('https://xkcd.com/info.0.json').then(function(response){
        res.render('home.ejs', {name: null, xkcdData: response.data});
    })
})

app.get('/path/:name', function( req, res ){
    let name = req.params.name;
    res.render('home.ejs',{name: name});
})

app.get('/query', function( req, res ){
    let name = req.query.name;
    let nameObject = {"name": name}
    res.render('home.ejs', nameObject);
})

app.post('/create', (req, res) => {
    console.log(req.body.email)
    res.redirect('/')
})

// app.put(route, function)

app.listen(3000, () => {
    console.log('started on port 3000')
})

// path param REQUIRED /home/6821868/...
//query param /home?foo=bar&bar=foo
//PUT & POST/ CREATE & UPDATE body, from a form