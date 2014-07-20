var big = function () {
    document.getElementById("registerbox").setAttribute("style", "margin-top: 0px");
}

var user = {
    "username": "dianamin",
    "parola": "parola"
}

var x;
Windows.System.UserProfile.UserInformation.getDisplayNameAsync().done(function (data) {
    x = data;
    console.log(data);
});
console.log(x);


var app = angular.module('analysis', []);
app.controller('User', ['$scope', function ($scope) {
    Windows.System.UserProfile.UserInformation.getDisplayNameAsync().done(function (data) {
        $scope.username = data;
        console.log($scope.username);
    });
}]);

//document.getElementById("u").innerHTML = "Welcome, " + "test" + "! ";
/*
Windows.System.UserProfile.UserInformation.getDisplayNameAsync().done(function (data) {
    document.getElementById("username").innerHTML = "Welcome, " + data + "! ";
});
*/