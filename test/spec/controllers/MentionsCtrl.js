describe('Testing Mentions controller', function() {
  var $scope = null;
  var ctrl = null;
  
  /* A mocked version of our service, someService
   * we're mocking this so we have total control and we're
   * testing this in isolation from any calls it might
   * be making.
   */
  var GazeMetrixAPI = {
	MentionsService: function (){
      return {
    	  get: function(){
    		  return [];
    	  }
      }
    }
  }
  
  //you need to indicate your module in a test
  beforeEach(module('GazeMetrixAPIExampleApp'));

  /* IMPORTANT!
   * this is where we're setting up the $scope and
   * calling the controller function on it, injecting
   * all the important bits, like our mockService */
  beforeEach(inject(function($rootScope, $controller) {
    //create a scope object for us to use.
    $scope = $rootScope.$new();

    //now run that scope through the controller function,
    //injecting any services or other injectables we need.
    ctrl = $controller('MentionsCtrl', {
      $scope: $scope,
      GazeMetrixAPI: GazeMetrixAPI
    });
  }));

  /* Test 1: The simplest of the simple.
   * here we're going to test that some things were 
   * populated when the controller function whas evaluated. */
  it('should start with mentions un populated', function() {
    
    //just assert. $scope was set up in beforeEach() (above)
	 console.log($scope.mentions);
    expect($scope.mentions).toBeUndefined();
  });
  
  
  /* Test 2: Still simple.
   * Now let's test a simple function call. */
  it('should set mentions ', function (){
    //set up.
    var mentions = GazeMetrixAPI.MentionsService().get();
    
    
    //assert
    expect(mentions).toEqual([]);
  });
//  
//  
//  /* Test 3: Testing a $watch()
//   * The important thing here is to call $apply() 
//   * and THEN test the value it's supposed to update. */
//  it('should update baz when bar is changed', function (){
//    //change bar
//    $scope.bar = 'test';
//    
//    //$apply the change to trigger the $watch.
//    $scope.$apply();
//    
//    //assert
//    expect($scope.baz).toEqual('testbaz');
//  });
//  
//  
//  /* Test 4a: Testing an asynchronous service call.
//   * Here we don't really even need to worry about asynchronicity.
//   * Since we make a mockService (above) and injected it,
//   * We can take out the asynchronous stuff and just test that it's 
//   * returning a value.  We can test the service's asynchronous behavior
//   * when we test the service, it's not the controller's concern. */
//  it('should update fizz asynchronously when test2() is called', function (){
//    //just make the call
//    $scope.test2();
//    
//    //assert
//    expect($scope.fizz).toEqual('weee');    
//  });
//  
//  /* Test 4b: Probably should test that the service method was
//   * called as well. We'll use Jasmine's spyOn() method to do
//   * this. */
//  it('should make a call to someService.someAsyncCall() in test()', function (){
//    //set up the spy.
//    spyOn(mockService, 'someAsyncCall').andCallThrough();
//    
//    //make the call!
//    $scope.test2();
//    
//    //assert!
//    expect(mockService.someAsyncCall).toHaveBeenCalled();    
//  });
});