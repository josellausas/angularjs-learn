var myApp = angular.module('myApp', []);


myApp.directive('onEnterKeyPressed', function() {
  return function ($scope, element, attrs) {
    element.bind("keydown press", function(event) {
      if(event.which === 13) {
        // ENTER
        $scope.$apply(function(){
          $scope.$eval(attrs.onEnterKeyPressed);
        });
        event.preventDefault();
      }
    });
  }
});


myApp.controller('mainController', function($scope) {
  $scope.name = 'Carnalito Angular';
  $scope.title = 'Angular 1.3.12';
  $scope.filename = 'hello.js';
  $scope.updateValue = function() {
    $scope.name = 'Another one bites the dust';
  };
  $scope.submit = function() {
    alert(`${$scope.filename}`);
  }
});
