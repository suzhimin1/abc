/**
 * Created by Administrator on 2017/9/19.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('MainCtrl',['$scope','localStorageService','$state',
    function ($scope,localStorageService,$state) {
      var  APP_KEY='APP';
      var app = localStorageService.get('App',{version:'1.0.0',run:false});
      if(app.run===false){
        app.run=true;
        localStorageService.update('App',app);
        $state.go('welcome');
      }
      else {
        $state.go('login');
      }
    }
    ]);
})();


