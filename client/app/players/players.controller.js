/**
 * Created by terrencewatson on 2/28/15.
 */

angular.module('relationalDataApp')
  .controller("PlayersController", function($scope){
    $scope.players = [
      {
        firstName: "Terrence",
        lastName: "Watson"
      }
    ]
  })
