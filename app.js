var express = require('express');
var { engine } = require('express-handlebars');
var path = require('path'); 
var app = express();

app.engine('handlebars', engine({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials') 
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req, res) {
    res.render('Pagina_Inicial');
});

app.get('/NupsNews',function(req, res)  {
    res.render('NupsNews');
});

app.get('/Eventos',function(req, res)  {
    res.render('Eventos');
});
app.get('/Quem_Somos',function(req, res)  {
    res.render('Quem_Somos');
});


app.listen(3000, function() {
    console.log('http://localhost:3000');
});