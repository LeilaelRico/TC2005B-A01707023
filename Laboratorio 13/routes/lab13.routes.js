/*
Cristian Leilael Rico Espinosa
A01707023
*/

const express = require('express');

const router = express.Router();

const path = require('path');

const ctrolLab = require('../controllers/lab.controller.js');



router.get('/', ctrolLab.inicio);

router.get('/videojuegos', ctrolLab.videojuegos);

router.get('/musica', ctrolLab.musica);

router.get('/ejercicio', ctrolLab.renderejercicio);

router.post('/ejercicio', ctrolLab.postejercicio);


module.exports = router;