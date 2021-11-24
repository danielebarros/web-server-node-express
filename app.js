require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT;


const hbs = require('hbs');

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//Servir contenido estatico
app.use( express.static('public/roadtrip') ) // es un middleware

app.get('/', (req, res) => {
    //res.send('Home Page Express')
    res.render('home',{
        titulo: 'Curso de Node',
        nombre: 'Daniel Barros'
    })
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo desde express!!')
})


app.get('/generic', (req, res) => {
    //res.sendFile(__dirname+'/public/roadtrip/generic.html')
    res.render('generic',{
        titulo: 'Curso de Node',
        nombre: 'Daniel Barros'
    })
})

app.get('/elements', (req, res) => {
    //res.sendFile(__dirname+'/public/roadtrip/elements.html')
    res.render('elements',{
        titulo: 'Curso de Node',
        nombre: 'Daniel Barros'
    })
})



app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })