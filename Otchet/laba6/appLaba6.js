export function laba6($scope, $document){
    console.log("cheaccas")
    $scope.laba5test = "laba5 zdes";
    $scope.Users = {
        hello : "wwwww"
    };
    $scope.textR ="";
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
        
        console.log($scope.Users);
        alert("Поздравляю "+$scope.Users.name+" "+$scope.Users.syrename+" вы успешно зарегистрировались!");
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