'use strict';
//Gets the data from API and presents it to the view
angular.module('GazeMetrixAPIExampleApp')
  .controller('MentionsCtrl', function ($scope,GazeMetrixAPI) {
	var mentionsData = GazeMetrixAPI.MentionsService().get(); 
    $scope.mentions = mentionsData;
  });
