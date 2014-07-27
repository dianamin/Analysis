
var app = angular.module('analysis', []);
app.controller('User', ['$scope', function ($scope) {
    Windows.System.UserProfile.UserInformation.getDisplayNameAsync().done(function (data) {
        $scope.username = data;
        console.log($scope.username);
    });
}]);

getScore();
