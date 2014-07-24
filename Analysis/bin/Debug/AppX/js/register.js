var imgURL;
var image = Windows.System.UserProfile.UserInformation.getAccountPicture(Windows.System.UserProfile.AccountPictureKind.smallImage);
if (image) {
    imgURL = URL.createObjectURL(image, { oneTimeOnly: true });
    WinJS.log && WinJS.log("Small image path= " + image.path, "sample", "status");
}

var app = angular.module('analysis', []);
app.controller('User', ['$scope', function ($scope) {
    Windows.System.UserProfile.UserInformation.getDisplayNameAsync().done(function (data) {
        $scope.username = data;
        console.log($scope.username);
        $scope.img = image.path;
    });
}]);

getScore();
