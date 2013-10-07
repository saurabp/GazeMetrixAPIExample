'use strict';
//BrandCtrl allows the user to change the brand.
angular.module('GazeMetrixAPIExampleApp')


  .controller('BrandCtrl', function ($scope,GazeMetrixAPI) {
	  $scope.api_key = GazeMetrixAPI.getApiKey();
	  $scope.change = function(){
		  GazeMetrixAPI.setApiKey($scope.api_key);
	  }
	  
  });
