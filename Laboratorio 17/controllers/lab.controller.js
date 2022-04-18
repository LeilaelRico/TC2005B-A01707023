
const path = require('path');
const Recomendacion = require('../models/comida');


exports.listar = (request, response, next) => {
    console.log(request.body);
    console.log(request.get('Cookie').split(':')[1]);
    console.log(request.cookies);
    response.render('ejercicio', {comida: Recomendacion.fetchAll(),
        usuario: request.session.usuario});
};

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
    response.render('ejercicio', {
        usuario: request.session.usuario, comida: Recomendacion.fetchAll() 
    });
};

exports.postejercicio = (request, response, next) => {
    console.log(request.body);
    const comida = new Recomendacion(request.body.nombre);
    comida.save();
    response.setHeader('Set-Cookie', 'ultima_comida'+comida.nombre );
    response.redirect('/ejercicio');
};
