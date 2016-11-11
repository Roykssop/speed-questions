    angular
        .module('player',[])
        .factory('contestant', Factory)

    /** @ngInject */
    function Factory(){

        return {
            getInstance: fn
        }

        function fn(){
            var name, socket, hitPoints, missedPoints;

            return {
                getName: function(){
                    return name;
                },
                setName: function(_name){
                    name = _name;
                },
                getSocket: function(){
                    return socket;
                },
                setSocket: function(_socket){
                    name = _socket;
                },
                getHitPoints: function(){
                    return hitPoints;
                },
                addHitPoints: function(){
                    hitPoints++;
                },
                getMissedPoints: function(){
                    return missedPoints;
                },
                addMissedPoints: function(){
                    missedPoints++;
                },

            }

        }
    }
