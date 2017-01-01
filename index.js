var serv = require('./server');

var server = new serv();
server.start({ port : 3000});

server.app.use('/api/questions/', require('./src/routes/questions')(server));
server.app.use('/api/game/', require('./src/routes/game')(server));

var a = require(__dirname + '/src/lib/sockio')(server);

server.on('mess', function(){
    console.log("Esto es un evento lindo");
})