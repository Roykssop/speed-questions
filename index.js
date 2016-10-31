var serv = require('./server');

var server = new serv();
server.port = 3000;
server.start();

server.app.use('/api/questions/', require('./src/routes/questions')(server));

var a = require(__dirname + '/src/lib/sockio')(server);

server.on('mess', function(){
    console.log("Esto es un evento lindo");
})