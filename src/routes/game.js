var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


var getRouter =  function(server){

    var model = require(__dirname + '/../models/game')(server);    

    router.get('/rooms', jsonParser ,function(req,res,next){
        return res.status(200).json(model.getRooms());      
    });

    router.post('/rooms',function(req,res,next){
        console.log(req.body);
        return res.status(201).json(model.addRooms(req.body))        
    })

    return router;
}

module.exports = getRouter;