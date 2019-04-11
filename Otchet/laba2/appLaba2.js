export function laba($scope) {
    $scope.v = "HELLOsssssss";
    $scope.calc = function(){
        try{
        if(parseFloat($scope.angle)>6.2) {
            $scope.result ="err";
            alert("Угол не должен привышать 6.2")
        } else
        $scope.result = (Math.pow(parseFloat($scope.radius),2)*parseFloat($scope.angle))/2;
    } catch (e){
        alert(e)
    }
        
    }
    $scope.calc2 = function(){
        try {
        $scope.result = Math.sqrt((Math.pow($scope.radius2,2)+Math.pow($scope.heig,2)))
        } catch(e){
            alert(e)
        }
    }
    function calcAngle(a,b,c){
        try{
        var bufer = Math.acos((Math.pow(a,2) + Math.pow(c,2) - Math.pow(b,2))/(2*a*c));
        return bufer;
        } catch(e){
            alert(e)
        }
    }
    $scope.calc3 = function(){
        try{
        var a = parseFloat($scope.side1);
        var b = parseFloat($scope.side2);
        var c = parseFloat($scope.side3);
        console.log(parseFloat($scope.side1)+parseFloat($scope.side2))
        console.log(parseFloat($scope.side3)+parseFloat($scope.side2))
        console.log(parseFloat($scope.side1)+parseFloat($scope.side3))
        if((parseFloat($scope.side1)+parseFloat($scope.side2))>
        parseFloat($scope.side3) && (parseFloat($scope.side3)+parseFloat($scope.side2))>parseFloat($scope.side1) && (parseFloat($scope.side1)+parseFloat($scope.side3))>parseFloat($scope.side2)){
            alert("Треугольник существует!");
            console.log(calcAngle(a,b,c));
            console.log(calcAngle(a,c,b));
            console.log(calcAngle(c,a,b));
            var ang1= calcAngle(a,b,c);
            var ang2= calcAngle(a,c,b);
            var ang3 = calcAngle(c,a,b);
            $scope.result = "Углы противолижащие сторонам  1,2,3."+
            "В радианах 1 -- "+calcAngle(a,b,c) +
                "; 2 --" + calcAngle(a,c,b) + "; 3 -- "+calcAngle(c,a,b)+";"+
                "В градусах 1 -- "+(ang1/(Math.PI/180)) +"; 2 -- "+ (ang2/(Math.PI/180)) + "; 3 -- "+
                (ang3/(Math.PI/180))+";"
            
        } else alert("такого треугольника не может быть!");
      
    } catch(e){
        alert(e)
    }
 } 
}