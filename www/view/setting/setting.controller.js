(function () {
  'use strict';
  angular.module('starter.controllers').controller('SettingCtrl',['$scope','localStorageService','$state','$ionicHistory',function ($scope,localStorageService,$state,$ionicHistory) {
    $scope.goBack =function () {
      $ionicHistory.nextViewOptions({
        disableBack:true
      });
      $state.go('app.home');
    };
    $scope.shop={
      shopPhone:'18605919629'
    }
    $scope.callPhone = function () {
      location.href ='tel:' + $scope.shop.shopPhone;
    }
  }])
})();
