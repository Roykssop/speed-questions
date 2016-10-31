var express =  require('express');
var bodyParser = require('body-parser');
var jsonParser =  bodyParser.json();
var router = express.Router();

var route = function(server){

    var model = require(__dirname + '/../models/questions')(server);

    router.get('/', function(req,res,next){
        model.get()
             .then(function(data){
                res.status(200).json(data);                
             })
             .catch(function(err){
                res.status(400).json(err);
             });        
    });

    return router;
}

module.exports = route;
