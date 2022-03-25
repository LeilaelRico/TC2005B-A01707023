const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));


const miRuta = require('./routes/lab13.routes');
app.use('/', miRuta);


const Preguntas = require('./routes/explicacion.routes');
app.use('/expl', Preguntas);

app.listen(3000);