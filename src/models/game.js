
var game = function(server){
    var model = this;
    var rooms = [];

    model.getRooms = function(){
        return rooms;
    }

    model.addRooms = function(room){
        rooms.push(room);
        console.log(rooms);
    }

    return model;
}


module.exports = game;