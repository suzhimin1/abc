(function () {
  'use strict';
  angular.module('starter.controllers').controller('ProductAddCtrl',['$scope','CategoryService','$cordovaBarcodeScanner','$cordovaCamera','$cordovaImagePicker','$ionicActionSheet','$ionicPopup',
    function ($scope,CategoryService,$cordovaBarcodeScanner,$cordovaCamera,$cordovaImagePicker,$ionicActionSheet,$ionicPopup) {
      $scope.product={
        ID:0,
        Name:'',
        Barcode:'',
        SupplierID:0,
        Images:['/view/product/img/1.png','/view/product/img/2.png','/view/product/img/3.png'],
        CategoryID:CategoryService.activeCategory.ID,
        Category:{
          ID:CategoryService.activeCategory.ID,
          Name:CategoryService.activeCategory.Name
        },
        Supplier: {
          ID:0,
          Name:''
        }
      };
      $scope.supplier ={
        ID:0,
        Name:'',
        Phone:''
      };
      $scope.$on('CategoryUpdate',function (event,data) {
        console.log(data);
        $scope.product.CategoryID=CategoryService.activeCategory.ID;
        $scope.product.Category.ID=CategoryService.activeCategory.ID;
        $scope.product.Category.Name=CategoryService.activeCategory.Name;
      });
      $scope.scanBarcode = function () {
        $cordovaBarcodeScanner.scan().then(function (data) {
            $scope.product.Barcode = data.text;
          },
          function (error) {

          });
      };
      $scope.showActionSheet = function () {
        $ionicActionSheet.show({
          buttons:[{text:'拍照'},{text:'从相册中选取'}]
          ,cancelText:'<b>取消</b>'
          ,buttonClicked:function (index) {
            switch (index){
              case 0:
                camera();
                break;
              case 1:
                pickImage();
                break;
              default:
            }
          }
        });
      };
      function pickImage(){
        var options={
          maximumImagesCount:3,
          width:800,
          height:800,
          quality:80
        };
        $cordovaImagePicker.getPictures(options).then(function(results){
          for(var i=0;i<results.length;i++){
            if($scope.product.Images.length<3){
              $scope.product.Images.push(results[i]);
            }
          }
        },function(error){
        });
      }
      function camera() {
        if($scope.product.Images.length>=3){
          return;
        }
        var option = {
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.CAMERA,
          saveToPhotoAlbum:true,
          quality:50
        };

        $cordovaCamera.getPicture(options).then(function(imageURI){
          if($scope.product.Images.length<3){
            $scope.product.Images.push(imageURI);
          }
        },function (err) {
          //error
        });
      }
      $scope.selectSupplier=function(){
        $scope.supplier.Name="";
        $scope.supplier.Phone='';
        $ionicPopup.show({
          title:'新增供货商',
          templateUrl:'/view/supplier/supplier-quick-add.html',
          scope:$scope,
          buttons:[{
            text:'取消',
            type:'button-outline button-energized'
          },{
            text:'确定',
            type:'button-energized',
            onTap:function(){
              $scope.product.Supplier.Name=$scope.supplier.Name;
            }
          }],
        })
      };
    }]);
})();
