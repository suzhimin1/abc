/**
 * Created by Administrator on 2017/10/10.
 */
(function () {
  'use strict';
  angular.module('starter.controllers')
    .controller('ProductListCtrl',['$scope','$ionicLoading','$timeout',
      '$filter',function ($scope,$ionicLoading,$timeout,$filter) {
        $scope.products=[];
        $scope.sourceProducts =[];
        $scope.searchMV ={
          content:''
        };

        $scope.hasMore=true;
        var isLoading = false;
        var pageIndex = 1;
        $scope.$on('$ionicView.enter', function () {
          $ionicLoading.show({
            template:'<ion-spinner icon="ios" class="spinner-light"></ion-spinner>数据加载中,请稍后...',
            //duration:'2000"
          });



          $timeout(function () {
            $ionicLoading.hide();
            $scope.products =[
              {
                ID:1
                ,Images: ['view/product/img/iPhone7.png']
                ,Name:'iphone7'
                ,Price:'￥5388'
                ,Store: 12
                ,Barcode: 'liuzhiyongSB'
              }
              , {
                ID:2
                ,Images: ['view/product/img/SONY.png']
                ,Name:'SONY XZP'
                ,Price:'￥4500'
                ,Store: 12
                ,Barcode: 'liuzhiyongSB'
              }
              , {
                ID:3
                ,Images: ['view/product/img/U11.png']
                ,Name:'HTC U11'
                ,Price:'￥5388.599'
                ,Store: 12
                ,Barcode: 'liuzhiyongSB'
              }
              , {
                ID:4
                ,Images: []
                ,Name:'小米 MIX2'
                ,Price:'￥3288'
                ,Store: 12
                ,Barcode: 'liuzhiyongSB'
              }
              , {
                ID:5
                ,Images: []
                ,Name:'冲击钻'
                ,Price:'￥88'
                ,Store: 12
                ,Barcode: 'liuzhiyongSB'
              }
              , {
                ID:6
                ,Images: []
                ,Name:'￥纯悦矿泉水'
                ,Price:'1'
                ,Store: 12
                ,Barcode: 'liuzhiyongSB'
              }
              ,
            ];
            $scope.sourceProducts=angular.copy($scope.products)
          },2000);
        });
        $scope.getByName=function () {
          $scope.products=$filter('filter') ($scope.product,{
            Name:$scope.searchMV.content
          });
        };

        $scope.doRefresh = function () {
          pageIndex =1 ;
          $scope.hasMore =true;
          $scope.product =[];
          loadData();
        };
        $scope.loadMore=function () {
          pageIndex++;
          loadData();
        };
        function  loadData() {
          if(isLoading == true){
            return;
          }
          isLoading =true;
          $timeout(function () {
              var  list =[      {
                ID:1
                ,Images: ['view/product/img/iPhone7.png']
                ,Name:'iphone7'
                ,Price:'￥5388'
                ,Store: 12
                ,Barcode: 'liuzhiyongSB'
              }
                , {
                  ID:2
                  ,Images: ['view/product/img/SONY.png']
                  ,Name:'SONY XZP'
                  ,Price:'￥4500'
                  ,Store: 12
                  ,Barcode: 'liuzhiyongSB'
                }
                , {
                  ID:3
                  ,Images: ['view/product/img/U11.png']
                  ,Name:'HTC U11'
                  ,Price:'￥5388.599'
                  ,Store: 12
                  ,Barcode: 'liuzhiyongSB'
                }
                , {
                  ID:4
                  ,Images: []
                  ,Name:'小米 MIX2'
                  ,Price:'￥3288'
                  ,Store: 12
                  ,Barcode: 'liuzhiyongSB'
                }
                , {
                  ID:5
                  ,Images: []
                  ,Name:'冲击钻'
                  ,Price:'￥88'
                  ,Store: 12
                  ,Barcode: 'liuzhiyongSB'
                }
                , {
                  ID:6
                  ,Images: []
                  ,Name:'￥纯悦矿泉水'
                  ,Price:'1'
                  ,Store: 12
                  ,Barcode: 'liuzhiyongSB'
                }
                ,];
            $scope.products =list;
            isLoading =false;
           /*$scope.products = $scope.products.concat(list);
            $scope.sourceProducts=angular.copy($scope,product);*/
            $scope.$broadcast('scroll.refreshComplete');
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $ionicLoading.hide();
            },2000

          )

        }



      }]);
}());
