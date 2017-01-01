var fs = require('fs');

var questions = function(server){
    var model =  this;

    model.get = function(){
        return new Promise(function(resolve,reject){
            fs.readFile(__dirname + '/../mock/questions.json', 'utf8', function(err,res){
                if (err) return reject(err);

                try{
                    var jsonData = JSON.parse(res);
                    return resolve(jsonData);
                }
                catch(error){
                    return reject(error);
                }
            })
        })    
    };

    return model;
}

module.exports = questions;