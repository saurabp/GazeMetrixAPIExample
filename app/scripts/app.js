'use strict';

angular.module('GazeMetrixAPIExampleApp', ['ngResource','ngRoute','iso.directives','googlechart'])
.config(function ($routeProvider,$httpProvider) {
    $routeProvider
        .when('/',                      {templateUrl: 'views/main.html',controller: 'MainCtrl'})
        .when('/api/mentions',                      {templateUrl: 'views/mentions.html',        controller: 'MentionsCtrl'})
        .when('/api/top_locations',                      {templateUrl: 'views/locations.html',       controller: 'LocationCtrl'})
        .when('/api/top_words',                      {templateUrl: 'views/top_words.html',       controller: 'TopWordsCtrl'})
        .otherwise({
            redirectTo: '/'
          });
     
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post['api_key'] = '77dcd329c367c02de366705eb0b968b3';
});