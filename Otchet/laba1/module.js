

angular.module('App', ['ngMaterial','ngRoute'])
.controller("appCtrl", function($scope,$timeout){
    $scope.hello = "world!";
    $scope.myColor =["#FF00FF", "#0000FF", "#00FF00","#00FFFF"]
    
    $scope.text = document.getElementById("test");
    $scope.text.style.color = "#fff000";
    var marginM = -100;
    $scope.check = function (){
        return $scope.hello +=1;
        
    }
    $timeout($scope.check())
    
    setInterval(function(){ 
        marginM= marginM-5;
        if(marginM <-300){
            marginM = 200;
        }
        // var rand = 0 + Math.floor(Math.random() * (3 + 1));
        $scope.$apply(
            $scope.text.style.color = $scope.myColor[Math.floor(Math.random()*$scope.myColor.length)]
        );
         $scope.$apply(
             $scope.text.style.marginTop = String(marginM)+"px"
             );
            },500)
})