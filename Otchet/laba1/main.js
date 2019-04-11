// import { laba } from 'C:/Users/Михаил/Desktop/labInternetProgram/Otchet/laba2/appLaba2.js';
// import { laba } from __dirname +"/../laba2/appLaba2.js"
//  import { laba2 } from './../laba2/appLaba2.js';
// var test = require(__dirname+"/ch");
// import {test} from './ch';
import { laba } from '../laba2/appLaba2.js';
import { laba3 } from '../laba3/appLaba3.js';
import { laba4 } from '../laba4/appLaba4.js';
import { laba6 } from '../laba6/appLaba6.js';
angular.module('App', ['ngMaterial','ngRoute'])
.config(
  function($routeProvider,$locationProvider){
    console.log(localStorage.getItem("lab"))
    var path = "/../"+localStorage.getItem("lab") +"/index.html"
    console.log(path);
    
      $routeProvider
          .when("/laba1", {
              templateUrl: "/../laba1/index.html",
              controller: "AppCtrl"
          })
          .when("/laba2", {
            templateUrl: "/../laba2/index.html",
            conroller: "laba2"
          })
          .when("/laba3", {
            templateUrl: "/../laba3/index.html",
            conroller: "laba3"
          })
          .when("/laba4", {
            templateUrl: "/../laba4/index.html",
            conroller: "laba4"
          })
          .when("/laba6", {
            templateUrl: "/../laba6/index.html",
            conroller: "laba6"
          })
          $locationProvider.html5Mode(true);
          // $urlRouterProvider.otherwise('/');
        })
 .controller("laba2" , laba)
 .controller("laba6" , laba6)
.controller("laba3", laba3)
.controller("laba4", laba4)
.controller('AppCtrl', function($scope,$http,$location,$route) {
  $scope.title1 = 'Button';
  $scope.title4 = 'Warn';
  $scope.isDisabled = true;
  $scope.result= false;

  $scope.googleUrl = 'http://google.com';
  console.log("hello1")
  $http.get("http://localhost:8000/labs")
      .then(res => {
        $scope.labs = res.data.labs;
        console.log(res.data)
      }) 
  $scope.test = function(lab){
    console.log(lab)
    $scope.labsss = lab;
    localStorage.setItem("lab",lab)

    $http.get("http://localhost:8000/laba",{params:{lab:lab}})
    .then(res => {

      console.log(res.data)
      $location.path("/")
    }) 
  }
  $scope.getResult = function(){
    $scope.result=true;
    $scope.zadanie=false;
    $scope.pathCode=false;
    $route.reload('/testt');
    console.log(localStorage.getItem("lab"))
    var path = "/"+localStorage.getItem("lab")
    $location.path(path)
  }

  $scope.programmCode = function(){
    $scope.zadanie=false;
    $scope.result=false;
    $http.get("http://localhost:8000/pathCode",{params:{lab:$scope.labsss}})
    .then(res => {
      $scope.pathCode = res.data.pathCode;
      console.log(res.data)
    }) 
  }
$scope.getCode = function(path){
  $scope.zadanie=false;
  $scope.result=false;
  $location.path('/home')
  $http.get("http://localhost:8000/getCode",{params:{lab:$scope.labsss,path:path}})
  .then(res => {
    $scope.code = res.data.code;
    console.log(res.data)
  })
}
  $scope.navBarZadanie = function(){
    $scope.pathCode=false;
    $scope.result=false;
    $location.path('/home')
    $http.get("http://localhost:8000/zadanie",{params:{lab:$scope.labsss}})
    .then(res => {
      $scope.zadanie = res.data.zadanie;
      console.log(res.data)
    }) 
  }
});
