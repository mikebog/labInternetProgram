export function laba8($scope) {
    $scope.testt = "Helllo!";
    $scope.sleep =function () {
        $scope.$apply( () => {

            $scope.squareID.style.marginLeft = String(marginTop) + "px";
            $scope.squareID.style.width ="100px";
            $scope.squareID.style.height = "100px";

            }
        );
        return
    }
    $scope.sleep1 =function () {
        $scope.$apply( () => {

                $scope.squareID.style.width ="0px";
                $scope.squareID.style.height = "0px";

            }
        );
        return
    }
    $scope.sleep2 =function () {
        $scope.$apply( () => {

                $scope.squareID.style.marginTop = String(marginTop) + "px";
                $scope.squareID.style.color = "Red";
                $("#test").hide(300)

            }
        );
        return
    }


    $scope.cc = "WWWWW";
    $scope.squareID = document.getElementById("blockSquare");
    var marginTop = -100;
     marginTop = marginTop+100;
    setTimeout($scope.sleep1, 1000);
    setTimeout($scope.sleep, 3000);
    setTimeout($scope.sleep2, 6000);
    // $scope.$apply( () => {
    //
    //     $scope.squareID.style.marginTop = String(marginTop) + "px";
    //     // $scope.squareID.style.width ="100px";
    //     // $scope.squareID.style.height = "100px";
    //
    //     }
    // );

}