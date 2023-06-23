const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();
//Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Middleware -> Servir contenido estatico
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('home',{
    nombre:'Maria Ines Toledo',
    titulo: 'Home'
  });
});
app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre:'Maria Ines Toledo',
    titulo: 'Generic'
  })
});
app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre:'Maria Ines Toledo',
    titulo: 'Elements'
  })
});

app.get('*',(req,res)=>{
  res.sendFile(__dirname+'/public/404.html');
})

app.listen(process.env.PORT);