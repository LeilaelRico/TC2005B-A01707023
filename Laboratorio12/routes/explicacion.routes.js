/*
Cristian Leilael Rico Espinosa
A01707023
*/

const express = require('express');

const router = express.Router();


router.get('/', (request, response, next) => {

    console.log(request.body);
    response.render('pregunta.ejs');
});


module.exports = router;