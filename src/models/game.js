
var game = function(){
    var self = this;
    var rooms = [];

    self.getRooms = function(){
        return rooms;
    }

    self.addRooms = function(room){
        rooms.push(room);
    }
}


return game;