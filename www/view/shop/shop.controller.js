(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'张泽荣',
        name1:'张泽荣',
        phone:'18605919629',
        phone1:'18605919629',
        createTime:'2017-9-28 15:30:00',
        email:'564146379@qq.com',
        hylx:'ZZR',
      });
    });
  }])
})();
