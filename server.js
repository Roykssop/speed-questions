var express =  require('express');
var app = express();
var util = require('util');
var eventEmitter = require('events');


var server = function(){
    self = this;
    self.port = 80;
    self.app = app;


    self.start = function(){
        self.app.listen(self.port, function(){
            console.log('running');
        })
    }

}

util.inherits(server, eventEmitter);


module.exports = server;
