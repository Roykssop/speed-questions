var express =  require('express');
var app = express();
var util = require('util');
var eventEmitter = require('events');


var server = function(){
    self = this;
    self.port = 3000;
    self.app = app;



    self.start = function(config){
        for (var key in config){
            if (self[key])
                self[key] = config[key];
        }

        self.instance = self.app.listen(self.port, function(){
                                console.log('running');
                            })
        self.sockio =  require('socket.io')(self.instance); // Socket io takes server instance
    }

    self.app.use(express.static('public'));

}

util.inherits(server, eventEmitter);


module.exports = server;
