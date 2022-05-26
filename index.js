const express = require('express')
const app = express()
require('dotenv').config()
const joi = require('joi')
const helmet = require('helmet')
const { urlencoded } = require('body-parser')
const pug = require('pug')


app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(helmet())
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('homepage.pug', { title: 'Home page' })
})

app.get('/components', (req, res) => {
    res.render('componets.pug', { title: 'Componets' })
})

app.get('/about', (req, res) => {
    res.render('about.pug', { title: 'about' })
})



try {
    const port = normalizePort(process.env.port || 4000)
    app.listen(port, () => {
        console.log(`Server ${port} porti bilan eshitilyapti.`);
    })
} catch (error) {
    console.log(error);
}

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}