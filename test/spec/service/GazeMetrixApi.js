'use strict';

    describe('GazeMetrixAPI', function(){
    	var svc;
    	beforeEach(function(){
    		module('GazeMetrixAPIExampleApp');
    	});
    	
    	it('should not be null',
    	           inject(function(GazeMetrixAPI) {
    	                expect(GazeMetrixAPI).not.toEqual(null);
    	        }));
    	
    	
    	it('should set/get properly',
 	           inject(function(GazeMetrixAPI) {
 	        	   var api = "abc";
 	        	   GazeMetrixAPI.setApiKey(api);
 	               expect(GazeMetrixAPI.getApiKey()).toEqual(api);
 	        }));
    	
    	

    });