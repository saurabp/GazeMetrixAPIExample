'use strict';
//Tag cloud directive wraps jquery jqcloud
angular.module('GazeMetrixAPIExampleApp')
  .directive('tagcloud', function () {
	return {
		restrict:'A',
		link : function(scope,element,attrs){
			scope.$watch(attrs.words, function(newValue) {
				if(newValue != undefined)
					$(element).jQCloud(newValue);
            });
		}
	}
  });
