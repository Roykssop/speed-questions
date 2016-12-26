var sockio = function(server){
    var io = server.sockio;

    io.on('connection',function(socket){
        
        socket.on('createNamespace', function(name){
            io.of('/' + name);
            console.log("Namespace " + name + " created");
        })

        socket.on('AddRoom', function(ret){
            socket.join(ret);
        });
    });
}

module.exports = sockio;