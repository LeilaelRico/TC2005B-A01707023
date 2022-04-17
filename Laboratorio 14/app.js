const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(session({
    secret: 'PjlHGXnvPqPW5f1BM4oX24LlwXusSBtnfPnZ94BLRb0vP1kQ4zhFrbXKe3o8', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const miRuta = require('./routes/lab14.routes');
app.use('/', miRuta);

const rutas_usuarios = require('./routes/auth.routes');
app.use('/users', rutas_usuarios);

const Preguntas = require('./routes/explicacion.routes');
app.use('/expl', Preguntas);

app.listen(3000);