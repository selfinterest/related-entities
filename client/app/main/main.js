'use strict';

angular.module('relationalDataApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        pageTitle: "Main"
      });
  })
  .directive("draggable", [function(){
    return {
      restrict : "A",
      link : function(scope, element, attrs) {
        element[0].addEventListener("dragstart", scope.handleDragStart, false);
        element[0].addEventListener("dragend", scope.handleDragEnd, false);
        element[0].addEventListener("dragenter", scope.handleDragEnter, false);
        element[0].addEventListener("dragleave", scope.handleDragLeave, false);

      }
    }

  }])
  .directive("droppable", [function(){
    return {
      restrict : "A",
      link : function(scope, element, attrs) {

        element[0].addEventListener("drop", scope.handleDrop, false);
        element[0].addEventListener("dragover", scope.handleDragOver, false);

      }
    }

  }])
;
