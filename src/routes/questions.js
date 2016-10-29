var express =  require('express');
var bodyParser = require('body-parser');
var jsonParser =  bodyParser.json();
var router = express.Router();

var route = function(server){

    console.log(server);

    router.get('/', function(req,res,next){
        console.log("Llegamos aquí");
        server.emit("mess");
    });

    return router;
}

module.exports = route;
