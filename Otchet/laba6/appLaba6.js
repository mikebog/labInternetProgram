export function laba6($scope, $document){
    console.log("cheaccas")
    $scope.laba5test = "laba5 zdes";
    $scope.Users = {
        hello : "wwwww"
    };
    $scope.textR ="";
    $scope.errorTime = 0;
    var testString = "advfva asd saasd aaddsddsa ahhhhhha";
    // var arr = textR.split(" ");

    // var reg = /^[a]?[^a]*[a]$/;
    // var pat = new RegExp(reg,"g")
    // var pat1 = new RegExp(/[a]/,"g")
    // for(var i=0;i<arr.length;i++){
    //     console.log(arr[i])
    //     // console.log(pat.test(arr[i]))
    //     if(pat.test(arr[i])===true){
            
    //         arr[i]=arr[i].replace(/[a]/g,"!")
            
    //     }

    // }
    // $scope.resultREg = arr.join(" ");
    $scope.submit = function() {
        if($scope.errorTime<5) {
            if (typeof $scope.Users.credit  =="undefined" || $scope.Users.credit.length < 16 || $scope.Users.credit.length > 16) {
                $scope.Users.credit="";
                alert("ВЫ неправильно ввели значение кредитной карты!. Осторожно у вас " + (5-$scope.errorTime) + " попыток");
                $scope.errorTime = $scope.errorTime + 1
                return
            }
            console.log($scope.Users);
            alert("Поздравляю " + $scope.Users.name + " " + $scope.Users.syrename + " вы успешно зарегистрировались!");
        } else {
            $scope.dontShow = true;
            alert("возможность ввода отключена!")
        }
    };
    $scope.RegAdd = function(){
    console.log("RegAdd")
        var arr = $scope.textR.split(" ");

    var reg = /^[a]?[^a]*[a]$/;
    var pat = new RegExp(reg,"g")
    var pat1 = new RegExp(/[a]/,"g")
    for(var i=0;i<arr.length;i++){
        console.log(arr[i])
        // console.log(pat.test(arr[i]))
        if(pat.test(arr[i])===true){
            
            arr[i]=arr[i].replace(/[a]/g,"!")
            
        }

    }
    $scope.resultReg = arr.join(" ");
    }
    $scope.clean = function(){
        $scope.Users={};
    };
}