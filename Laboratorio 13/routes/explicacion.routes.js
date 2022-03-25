/*
Cristian Leilael Rico Espinosa
A01707023
*/

const express = require('express');

const router = express.Router();

const path = require('path');

const expcontrol = require('../controllers/exp.controller.js');



router.get('/', expcontrol.pregunta);



module.exports = router;