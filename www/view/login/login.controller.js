/**
 * Created by Administrator on 2017/9/18.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('LoginCtrl',['$scope','$state','$ionicPopup','localStorageService',
      function ($scope,$state,$ionicPopup,localStorageService) {
        var  USER_KEY='User';
        $scope.user = {
          username: ''
          , password: ''
        };
        $scope.login = function () {
          var account = localStorageService.get(USER_KEY, {
            username: 'abc',
            password: '123'
          });

          if (account.username === $scope.user.username && account.password === $scope.user.password) {
            account.isLogin = true;
            localStorageService.update(USER_KEY, account);
            $state.go('app.home');
          }
          else {
            $ionicPopup.alert({
              title: '警告',
              template: '您的用户名或者密码错误',
              okText: '确定',
              okType: 'button-energized'
            });
          }
        };
      }]);
})();





