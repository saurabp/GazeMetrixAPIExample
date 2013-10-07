'use strict';
//API List Controller lists down the apis that are exposed.
angular.module('GazeMetrixAPIExampleApp')
  .controller('APIListCtrl', function ($scope) {
    $scope.apis = [
      {id:"mentions",title:"Mentions API"},
      {id:"top_locations",title:"Locations API"},
      {id:"top_words",title:"Top Words API"}
    ];
  });
