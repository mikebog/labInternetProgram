export function laba3($scope){
    $scope.labaT = "world!!!1";
    $scope.inputCalc = "";
$scope.req1 = /[*/+.-]/;
$scope.reg2 = /[+-/*]/;
    $scope.expression = function(i){
        try{
        if(i==='del')
        {
            $scope.inputCalc="";
        }
        else if(i==="c"){
            $scope.inputCalc=  $scope.inputCalc.slice(0,$scope.inputCalc.length-1);
        
        } else if(i==="0" &&  $scope.inputCalc.slice($scope.inputCalc.length-1)==="/"){
                alert("Делить на ноль нельзя")
        } else if(!(i.search($scope.req1))){
            if(!($scope.inputCalc.slice($scope.inputCalc.length-1).search($scope.req1))){
                    alert("Уже стоит математически оператор!")
            // } else if(i===","){
            //     console.log($scope.inputCalc.lastIndexOf(","))
            //     if($scope.inputCalc.lastIndexOf(",")>0){
                    
            //         var buf = $scope.inputCalc.slice( $scope.inputCalc.lastIndexOf(','));
            //         if(buf.search($scope.req1)>0){
            //             $scope.inputCalc+=i;
            //         } else {
            //             alert("Лишняя запятая!")
            //         }
            //     } else {
            //         $scope.inputCalc+=i;
            //     }
                
            } else {
                $scope.inputCalc+=i;
            }
        } else if(i==="="){
            if($scope.inputCalc.search($scope.req1)>0){
                    lastCalc($scope.inputCalc)
            }
        }
         else {
            $scope.inputCalc+=i;
        }
    } catch (e) {
        alert(e)
    } 
var lastItem;
    function lastCalc(text){
        console.log(text)
        console.log($scope.inputCalc.search($scope.reg2))
        console.log($scope.inputCalc.slice(0,$scope.inputCalc.search($scope.reg2)))
        lastItem=parseFloat($scope.inputCalc.slice(0,$scope.inputCalc.search($scope.reg2)));
        console.log(eval(text))
        $scope.inputCalc=String(eval(text))
        console.log(lastItem)
    }
}
}