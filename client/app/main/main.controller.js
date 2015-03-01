'use strict';

angular.module('relationalDataApp')
  .directive("playerWidget", function(){
    return {
      restrict: "C",
      templateUrl: "/app/players/player-widget.jade"
    }

  })
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.players = [
      {
        firstName: "Terrence",
        lastName: "Watson"
      }
    ];

    $scope.handleDragStart = function(e){

      e.dataTransfer.setData("text", this.id);


    };

    $scope.handleDrop = function(e){
      var playerId = e.dataTransfer.getData("text").split("-")[1];
      if(playerId){
        $scope.$apply(function(){

          var elm = $("<div class='player-widget'></div>");
          $(".canvas").append(elm);
          elm.css({top: e.offsetY, left: e.offsetX, position: "absolute", width: "160px", height: "60px"});

        })

      }


    };

    $scope.handleDragOver = function(e){
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.dataTransfer.dropEffect = 'copy';

      return false;


    }
  });
