var sockio = function(server){
    var io = server.sockio;

    console.log("Holis");

    io.on('connection',function(socket){
        console.log("Una nueva conexión");
    });
}

module.exports = sockio;