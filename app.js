// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response) {
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if (request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/bmw1.jpg') {
        fs.readFile('images/bmw1.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'images/jpg' })
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/bmw4.jpeg') {
        fs.readFile('images/bmw4.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'images/jpeg' })
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/bmw2.jpeg') {
        fs.readFile('images/bmw2.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'images/jpeg' })
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/bmw.jpg') {
        fs.readFile('images/bmw.jpg', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'images/jpg' })
            response.write(contents);
            response.end();
        });
    
    } else if (request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cats.jpeg') {
        fs.readFile('images/cats.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'images/jpeg' })
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat2.jpeg') {
        fs.readFile('images/cat2.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'images/jpeg' })
            response.write(contents);
            response.end();
        });
    }else if (request.url === '/images/cat_jump.jpeg') {
        fs.readFile('images/cat_jump.jpeg', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'images/jpeg' })
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cars/new') {
        fs.readFile('views/new.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your sserver which port to run on 
server.listen(7077);
console.log("Running in localhost at 7077");