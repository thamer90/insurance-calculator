'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])
  .controller('InsuranceController', ['$scope', function($scope, $filter) {

    $scope.funding = {
      rent: 0,
      children: 0,
      debt: 0
    };

    $scope.stateChanged = function() {
       if ($scope.checked){
       }
       else {
         $scope.funding.rent = 0
       }
    };

    $scope.calculate = function() {
        var result = (parseFloat($scope.funding.rent) * 12 * 20) + (parseFloat($scope.funding.children) * 50000) + parseFloat($scope.funding.debt);
        if (result >= 50000 && result <= 1000000){
          return result;
        }
        else  {
          return 'The cover amount range allowed is between $50,000 - $1,000,000';
        }
    };

  }]);
