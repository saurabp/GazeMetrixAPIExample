'use strict';
//LocationCtrl controller controls the google charts plugin by sending data into it.
angular.module('GazeMetrixAPIExampleApp')


 	.controller("LocationCtrl", function ($scope,GazeMetrixAPI) {

    var chart1 = {};
    chart1.type = "GeoChart";
    chart1.displayed = false;
    chart1.cssStyle = "height:600px; width:90%;margin-left:5%;margin-top:2%";
    $scope.datageo = GazeMetrixAPI.TopLocationsService().get();
    $scope.$watch("datageo.data.countries", function(newValue) {
    	if(newValue != undefined){
    		var countries = [];
    		for (var i =0; i < newValue.length;i++){
    			countries.push([newValue[i].name,newValue[i].count])
    		}
    		chart1.data = countries;
            chart1.options = {region:"world",resolution:"country"};
            
    	}
    	
    });
    $scope.chart = chart1;
});



