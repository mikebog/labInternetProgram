export function laba7($scope) {
    console.log("HElloLAba7!")
    $scope.testL = "Pracue";
    $scope.myColor =["#FF00FF", "#0000FF", "#00FF00","#00FFFF"];
    $scope.squareID = document.getElementById("blockSquare");
    // $scope.squareID.style.background = "#fff000";
    var marginM = -100;
    var marginLeft = -100;
    var valueLeft = 30;
    var valueTop = 20;
    var sHeight = 100;
    var sWeidth = 100;
    $scope.OneTwoZ = true;
    $scope.showControl = null;
    $scope.getControl = function(){
        console.log($scope.showControl)
        if($scope.showControl==null){
            $scope.showControl = true;
        } else $scope.showControl=null
    }


    setInterval(function(){
        marginLeft = marginLeft+valueLeft;
        if(marginLeft<-850 || marginLeft>520){
            valueLeft=valueLeft*(-1);
            $scope.squareID.style.marginTop = String(marginM) + "px"
            if(sHeight<400) {
                sHeight = sHeight + 50;
                sWeidth = sWeidth + 50;
            }
            $scope.$apply( () => {
                    $scope.squareID.style.width = String(sWeidth) + "px"
                    $scope.squareID.style.height = String(sWeidth) + "px"
                }
            );
        }
        $scope.$apply( () => {
                $scope.squareID.style.marginLeft = String(marginLeft) + "px"
            }
        );
    },50)
    $scope.getForm = function() {
        console.log("getZadanie")
        $scope.formZ = true;
        $scope.OneTwoZ = null;
    };
    $scope.getZadanie = function(){
        console.log("getForm")
        $scope.formZ = null;
        $scope.OneTwoZ = true;
    }

        $scope.removeAbzac = function(id){
        $scope.text = document.getElementById("main");
        $scope.text.style.color = $scope.myColor[Math.floor(Math.random()*$scope.myColor.length)];
    }
}