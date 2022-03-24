/*
Cristian Leilael Rico Espinosa
A01707023
*/

const express = require('express');

const router = express.Router();

const path = require('path');

const comida = [{nombre: "Pizza"}, {nombre: "Taco"}, {nombre: "Hamburguesa"}, {nombre: "Lasagna"}];


router.get('/', (request, response, next) => {

    response.sendFile(path.join(__dirname, '..', 'views', 'inicial.html'));

});

router.get('/videojuegos', (request, response, next) => {

    response.render(path.join(__dirname, '..', 'views', 'videojuegos.ejs'));

});


router.get('/musica', (request, response, next) => {

    response.render(path.join(__dirname, '..', 'views', 'musica.ejs'));
    
});


router.get('/ejercicio', (request, response, next) => {

    console.log(request.body);
    response.render('ejercicio', {comida: comida});

});

router.post('/ejercicio', (request, response, next) => {

    console.log(request.body);
    comida.push({nombre: request.body.nombre});
    console.log(comida);
    response.status = 303;
    response.redirect('/ejercicio');

});

module.exports = router;