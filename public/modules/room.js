    angular
        .module('room',[players])
        .factory('$room', Factory)

    /** @ngInject */
    function Factory($q,$http){

        return {
            getInstance: fn
        }

        function fn(){
            var status, maxPlayers, maxQuestions, missedPoints;

            function checkStatus(){
                if (players.length == maxPlayers)
                    status = true
                else
                    status = false;

                return status
            }

            function loadQuestions(){

            }

            function setMaxPlayers(_maxPlayers){
                maxPlayers = _maxPlayers;
            }

            function setName(_name){
                name = _name;
            }

            function setMaxQuestions(_maxQuestions){
                maxQuestions = _maxQuestions;
            }            

            return {
                addPlayer : function(){},
                removePlayer : function(){},
                create : function(oNewRoom){
                    if (!oNewRoom.name || !oNewRoom.maxPlayers || !oNewRoom.maxQuestions )
                        return false;

                    setMaxPlayers(oNewRoom.maxPlayers);
                    setName(oNewRoom.name);
                    setMaxQuestions(oNewRoom.maxQuestions);
                },
                countPlayers : function(){},
                statusRoom : function(){
                    return checkStatus();
                } 
            }

        }
    }
