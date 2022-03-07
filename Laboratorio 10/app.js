/*
Cristian Leilael Rico Espinosa
A01707023
*/

const filesystem = require('fs');

/*Aqui*/

const http = require('http');

const server = http.createServer( (request, response) => {

    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>A01707023_Lab10</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body>');
        response.write(`<div class="text-center"><h1 class="display-4 fst-italic">Cristian Leilael Rico Espinosa</h1></div>`);
-       response.write('<div class="row d-flex justify-content-center"><div class="col-md-6"><article class="blog-post"><h2 class="blog-post-title fst-italic">Vivencia</h2> <p>La verdad es, que hasta el día de hoy soy una persona que no había atravesado muchos cambios hasta hace más o menos, dos años y medio, un evento hizo que me replanteara todas las cosas que hasta la fecha tenía y también la forma en la que pensaba.<br>Actualmente, sigo caracterizándome por ser proactivo en las cosas que son de mi interés así como en situaciones de presión,además, soy leal, respetuoso, responsable y siento una mayor confianza cuando puedo expresarme de manera escrita.</p><hr></div></div>');
        response.write('<div class="text-center"><h2>Un poco más acerca de mí</h2></div>');
        response.write('<div class="text-center"><h4>Algunos de mis videojuegos favoritos</h4></div>');
        response.write('<div class="text-center"> <a href="/videojuegos"><button>Visitar Sitio</button></a></div><br>')
        response.write('<div class="text-center"><h4>También escucho música</h4></div>');
        response.write('<div class="text-center"> <a href="/musica"><button>Visitar Sitio</button></a></div><br>')
        response.write('<div class="text-center"><h4>Ejercicio</h4></div>');
        response.write('<div class="text-center"> <a href="/ejercicio"><button>Visitar Sitio</button></a></div><br>')  
        response.write('</body></html>');
        response.end();

    } else if (request.url === '/videojuegos' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>A01707023_Lab10</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body>');
        response.write(`<div class="text-center"><h4>Cristian Leilael Rico Espinosa</h4></div>`);
        response.write(`<div class="text-center"><h4>Tomb Raider</h4></div>`);
        response.write('<div class="row d-flex justify-content-center"><div class="col-md-6">La serie de videojuegos de Tomb Raider en su conjunto ha alcanzado más de 63 millones de unidades vendidas en abril de 2018, siendo 20 de ellos vendidos en los últimos cuatro años hasta dicha fecha, y convirtiéndose en una de las franquicias de videojuegos más vendidas de todos los tiempos. En 2012, la saga contaba con 30 millones de copias vendidas, por lo que en los últimos 6 años ha doblado las cifras, a la espera del lanzamiento de Shadow of the Tomb Raider.<br>Fuente: https://es.wikipedia.org/wiki/Tomb_Raider_(serie)<hr></div></div>');
        response.write(`<div class="text-center"><h4>NieR: Automata</h4></div>`);
        response.write('<div class="row d-flex justify-content-center"><div class="col-md-6">Nier: Automata comparte el mismo universo postapocalíptico que el primer Nier y toma lugar luego del cuarto final de este último videojuego. Aunque contiene referencias con la serie Drakengard en cuanto a su atmósfera oscura y la ramificación de su historia, no guarda conexión narrativa con dicha saga. Situada miles de años luego de los eventos que ocurrieron en Nier, la historia gira en torno a una guerra entre los androides remanentes de la humanidad y un ejército de máquinas invasoras de otro mundo.<br>Fuente: https://es.wikipedia.org/wiki/NieR:_Automata<hr></div></div>');
        response.write('<div class="text-center"><a href="/">Regresar al inicio</a></div>');
        response.write('</body>');
        response.end();


    }else if (request.url === '/musica' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>A01707023_Lab10</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body>');
        response.write(`<div class="text-center"><h4>Cristian Leilael Rico Espinosa</h4></div>`);
        response.write(`<div class="text-center"><h4>Foals</h4></div>`);
        response.write('<div class="row d-flex justify-content-center"><div class="col-md-6">Foals es una banda originaria de Oxford, Inglaterra. La banda publica con Transgressive Records en Europa y Sub Pop en los EE. UU. Publicaron un álbum completo—titulado Antidotes—el 24 de marzo de 2008 en el Reino Unido, y el 8 de abril en EE. UU. Iba a ser producido originalmente por Dave Sitek de TV on the Radio pero la banda rechazó la mezcla final de Sitek y remezclaron el disco entero ellos mismos debido al excesivo uso del efecto reverb que le daba un sonido espacial.<br>Fuente: https://es.wikipedia.org/wiki/Foals<hr></div></div>');
        response.write(`<div class="text-center"><h4>Everything Everything</h4></div>`);
        response.write('<div class="row d-flex justify-content-center"><div class="col-md-6">Everything Everything es un grupo inglés de indie rock, creado a finales de 2007. Sus integrantes son de Newcastle, Kent y Guernsey. La banda saltó a la fama cuando se dieron a conocer en el programa “Sound of 2010”, de la BBC el 7 de diciembre de 2009. Debutaron con el álbum “Man Alive” gracias Geffen Records el 30 de agosto de 2010, donde se colocaron en el número 17 en Reino Unido.<br>Fuente: https://es.wikipedia.org/wiki/Everything_Everything<hr></div></div>');
        response.write('<div class="text-center"><a href="/">Regresar al inicio</a></div>');
        response.write('</body>');
        response.end();

    }else if (request.url === '/ejercicio' && request.method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>A01707023_Lab10</title><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></head>');
        response.write('<body>');
        response.write(`<div class="text-center"><h4>Cristian Leilael Rico Espinosa</h4></div>`);
        response.write(`<div class="text-center"><h4>Foals</h4></div>`);
        response.write('<div class="row d-flex justify-content-center"><div class="col-md-6">Foals es una banda originaria de Oxford, Inglaterra. La banda publica con Transgressive Records en Europa y Sub Pop en los EE. UU. Publicaron un álbum completo—titulado Antidotes—el 24 de marzo de 2008 en el Reino Unido, y el 8 de abril en EE. UU. Iba a ser producido originalmente por Dave Sitek de TV on the Radio pero la banda rechazó la mezcla final de Sitek y remezclaron el disco entero ellos mismos debido al excesivo uso del efecto reverb que le daba un sonido espacial.<br>Fuente: https://es.wikipedia.org/wiki/Foals<hr></div></div>');
        response.write(`<div class="text-center"><h4>Everything Everything</h4></div>`);
        response.write('<div class="row d-flex justify-content-center"><div class="col-md-6">Everything Everything es un grupo inglés de indie rock, creado a finales de 2007. Sus integrantes son de Newcastle, Kent y Guernsey. La banda saltó a la fama cuando se dieron a conocer en el programa “Sound of 2010”, de la BBC el 7 de diciembre de 2009. Debutaron con el álbum “Man Alive” gracias Geffen Records el 30 de agosto de 2010, donde se colocaron en el número 17 en Reino Unido.<br>Fuente: https://es.wikipedia.org/wiki/Everything_Everything<hr></div></div>');
        response.write('<div class="text-center"><a href="/">Regresar al inicio</a></div>');
        response.write('</body>');
        response.end();

    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html><html lang="es-mx"><head><title>A01707023_Lab10 | Page not found</title><meta charset="utf-8"></meta></head>');
        response.write('<body>');
        response.write('<h1>La página ' + request.url + ' no se encontró</h1>');
        response.write('</body>');
        response.end();
    }

});

server.listen(3000);