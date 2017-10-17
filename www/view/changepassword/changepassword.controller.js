(function () {
  'use strict';
  angular.module('starter.controllers').controller('ChangePasswordCtrl',['$scope',function ($scope) {
    $scope.user = {
      oldPassword:'',
      password:'',
      confirmPassword:''
    }
  }]);
})();
