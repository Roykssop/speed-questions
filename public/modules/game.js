var app = angular.module('gameManager',['room','socketModule','player']);

app.value('baseApi','http://localhost:3000/api/');

app.service('$game', function($room,$http,baseApi){
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
        self.pushRoomServer(roomi)
    }  

    self.countRooms =  function(){
        return rooms.length;
    }  

    self.getRooms = function(){
        return rooms;
    }

    self.loadRoomsServer = function(){
        $http.get( baseApi + 'game/rooms')
             .then(function(res){
                 rooms = res.data;
             },function(err){
                 alert('Cannot load rooms');
             });
    }

    self.pushRoomServer = function(room){
        console.log(room);
        console.log({ flauta : "traversa", canon : "borracho"});
        $http.post( baseApi + 'game/rooms',angular.toJson(room))
             .then(function(res){
                 console.log("holis");
             },function(err){
                 alert('Cannot push rooms');
             });
    }

    self.initNamespace = function(){

    }



})