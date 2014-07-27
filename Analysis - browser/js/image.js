var image = Windows.System.UserProfile.UserInformation.getAccountPicture(Windows.System.UserProfile.AccountPictureKind.smallImage);
if (image) {
    document.getElementById("profile-pic").src = URL.createObjectURL(image, { oneTimeOnly: true });
    WinJS.log && WinJS.log("Small image path= " + image.path, "sample", "status");
} else {
    WinJS.log && WinJS.log("Small account picture is not available.", "sample", "status");
}