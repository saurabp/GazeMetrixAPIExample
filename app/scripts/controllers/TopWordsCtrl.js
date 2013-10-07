'use strict';
//Gets the data from api and presents it to the view.
angular.module('GazeMetrixAPIExampleApp')
  .controller('TopWordsCtrl', function ($scope,GazeMetrixAPI) {
	  $scope.words = GazeMetrixAPI.TopWordsService().get();
  });
