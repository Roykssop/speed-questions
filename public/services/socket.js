var app = angular.module('socketModule',[]);

app.service('socketio', function(){
    self = this;
    var socket = io.connect();
    
    self.on = function(eventName,cb){
        socket.on(eventName,function(data){
            
        })
        //socket.on()
    }

    self.emit = function(eventName,cb){

    }

});
