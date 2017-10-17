(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
    $scope.title=$stateParams.title;
    $scope.property=$stateParams.property;
    $scope.shop=localStorageService.get('Shop',{
      phone:'18605919629',
      createTime:'2017-9-27 17:18:23',
      name:'',
      ab:'',
      boss:'',
      email:'',
      shopPhone:''
    });
    $scope.save = function () {
      localStorageService.update('Shop',$scope.shop);
    };
  }]);
})();
