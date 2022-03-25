const path = require('path');

exports.pregunta = (request, response, next) => {
    console.log(request.body);
    response.render(path.join(__dirname, '..', 'views', 'pregunta.ejs'));
};