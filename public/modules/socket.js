var app = angular.module('socketModule',[]);

app.factory('socketio', function(){

    var socket  = io.connect();

   return {
            on: function (eventName, callback) {
            socket.on(eventName, function () {  
                var args = arguments;
                $rootScope.$apply(function () {
                callback.apply(socket, args);
                });
            });
            },
            emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                if (callback) {
                    callback.apply(socket, args);
                }
                });
            })
            },
            sock : io
        };

})






/*app.service('socketio', function(){
    self = this;
    var socket = io.connect();
    
    self.on = function(eventName,cb){
        socket.on(eventName,function(data){
            
        })
        //socket.on()
    }

    self.emit = function(eventName,cb){

    }

});*/
