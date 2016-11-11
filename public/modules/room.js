    angular
        .module('room',[players])
        .factory('room', Factory)

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
            }

            function loadQuestions(){

            }

            return {
                addPlayer : function(){},
                removePlayer : function(){},
                startRoom : function(){},
                countPlayers : function{} 
            }

        }
    }
