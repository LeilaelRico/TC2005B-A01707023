const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));


const miRuta = require('./routes/lab12.routes');
app.use('/', miRuta);

const exp = require('./routes/explicacion.routes');
app.use('/expl', exp);

app.listen(3000);