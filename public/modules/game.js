var module = angular.module('gameManager',['room']);

module.service('game', function($room){
    var self = this;
    var maxPlayers = 4;
    var maxQuestions = 10;
    var roomName = "";
    var players = [];
    var rooms = [];
    var roomi;

    self.start = function(oConstruct){
        var roomi = $room.getInstance();
    }

    self.addRoom = function(oRoom){
        roomi.create(oRoom);
        
    }    



})