export function laba4($scope, $document){
    $scope.tesss = "ZdeessI";
    $scope.flag = true;
    $scope.testClick = function(){
        $scope.zadanie = true;
    }
    $scope.check = function(){
        $scope.test1 = true;
    }
    $scope.check1 = function(){
        $scope.test1 = false;
    }
    $scope.menu = function (){
        $scope.checkMenu = true;
    }
    $scope.menuCl = function (){
        $scope.checkMenu = false;
    }
    $scope.remItem = function(){
        console.log('here')
        $scope.tesss = "pobeda";
        if($scope.flag==true){
            $scope.flag=false;
            var img1 = "firstImg";
            var img2 = "twoImg";
        } else {
            $scope.flag=true;
            var img1 = "twoImg";
            var img2 = "firstImg";
        }
        
        var imgOne = document.getElementById(img1);
        var imgTwo =  document.getElementById(img2);
       
        document.getElementById('preview').removeChild(imgOne);
        document.getElementById('preview').removeChild(imgTwo);
        
        document.getElementById('preview').appendChild(imgTwo);
        document.getElementById('preview').appendChild(imgOne);
    }
}