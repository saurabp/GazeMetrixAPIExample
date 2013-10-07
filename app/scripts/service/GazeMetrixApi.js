//GazeMetrixAPI service handles api calls to gazemetrix api
angular
		.module('GazeMetrixAPIExampleApp')
		.factory(
				'GazeMetrixAPI',
				function($resource,$location) {
					var api_key = "77dcd329c367c02de366705eb0b968b3";
					var source = "instagram";
					var date = "2013-09-25";
					var brand = {};
					return {
						getApiKey : function(){
							return api_key;
						},
						setApiKey : function(key){
							api_key = key;
							$location.path('/');
						},
						getSource : function(){
							return source;
						},
						setSource : function(source){
							source = source;
						},
						getDate : function(){
							return date;
						},
						setDate : function(date){
							date = date;
						},
						MentionsService : function() {
							return $resource(
									'https://api.gazemetrix.com/v1/mentions',
									{},
									{
										get : {
											method : 'JSONP',
											params : {
												v : '1.0',
												callback : 'JSON_CALLBACK',
												verified : 'true',
												api_key : this.getApiKey()
											}
										}
									});
						},
						TopWordsService : function() {
							return $resource(
									'https://api.gazemetrix.com/v1/top_words',
									{},
									{
										get : {
											method : 'GET',
											params : {
												v : '1.0',
												callback : 'JSON_CALLBACK',
												api_key : this.getApiKey(),
												source : this.getSource(),
												verified : true,
												start_date : this.getDate()
											}
										}
									});
						},
						TopLocationsService : function() {
							return $resource(
									'https://api.gazemetrix.com/v1/top_locations',
									{},
									{
										get : {
											method : 'GET',
											params : {
												v : '1.0',
												callback : 'JSON_CALLBACK',
												api_key : this.getApiKey(),
												source : this.getSource(),
												verified : true,
												date : this.getDate()
												
											}
										}
									});
						}
					}

				});