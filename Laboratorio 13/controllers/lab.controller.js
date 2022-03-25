
const path = require('path');

const Comidas = require('../models/comida');

exports.inicio = (request, response, next) => {
    console.log(request.body);
    response.sendFile(path.join(__dirname, '..', 'views', 'inicial.html'));
};

exports.videojuegos = (request, response, next) => {
    console.log(request.body);
    response.render(path.join(__dirname, '..', 'views', 'videojuegos.ejs'));
};

exports.musica = (request, response, next) => {
    console.log(request.body);
    response.render(path.join(__dirname, '..', 'views', 'musica.ejs'));
};

exports.renderejercicio = (request, response, next) => {
    console.log(request.body);
    response.render('ejercicio', {comida: Comidas.fetchAll()});
};

exports.postejercicio = (request, response, next) => {
    console.log(request.body);
    const comida = new Comidas(request.body.nombre);
    comida.save();
    response.status = 303;
    response.redirect('/ejercicio');
};
