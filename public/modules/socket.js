var app = angular.module('socketModule',[]);

app.factory('socketio', function(){

    var socket  = io.connect();

    var interface = { 
                        emit : function(event,data,callback){
                                socket.emit(event,data);
                             },
                        on: function(event,callback){
                                socket.on(event,function(data){
                                        callback(data); 
                                 });
                            }
                    }

    return interface;   
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
