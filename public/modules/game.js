var module = angular.module('gameManager',['room','socketModule','player']);

module.service('$game', function($room){
    var self = this;
    var maxPlayers = 4;
    var maxQuestions = 10;
    var roomName = "";
    var players = [];
    var rooms = [];
    var roomi;
    var playeri;

    self.start = function(oConstruct){
        roomi = $room.getInstance();
        self.addRoom(oConstruct);
    }

    self.addRoom = function(oRoom){
        roomi.create(oRoom);
        rooms.push(roomi);  
        console.log(rooms);    
    }  

    self.countRooms =  function(){
        return rooms.length;
    }  

    self.getRooms = function(){
        return rooms;
    }

    self.initNamespace = function(){

    }



})