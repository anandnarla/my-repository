(function () {
  'use strict';
  angular.module('NameCaluclator' , [])

  .controller('NameCaluclatorController' , function ($scope) {
    $scope.name="";
    $scope.totalValue=0;
    $scope.displayNumeric = function () {
      var totalNameValue=caluclateNumericForString($scope.name);
      $scope.totalValue=totalNameValue
    }

  })
  function caluclateNumericForString(string) {
    var totalValueString=0;
    for (var i = 0; i < string.length; i++) {
      totalValueString += string.charCodeAt(i);
    }
    return totalValueString;
  }
})();
