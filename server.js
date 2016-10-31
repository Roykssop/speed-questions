var express =  require('express');
var app = express();
var util = require('util');
var eventEmitter = require('events');


var server = function(){
    self = this;
    self.port = 80;
    self.app = app;



    self.start = function(){
        self.instance = self.app.listen(self.port, function(){
                                console.log('running');
                            })
        self.sockio =  require('socket.io')(self.instance);
    }

    self.app.use(express.static('public'));

}

util.inherits(server, eventEmitter);


module.exports = server;
