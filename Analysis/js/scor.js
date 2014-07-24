var getScore = function () {
    localFolder.getFileAsync("scor.txt")
    .then(function (sampleFile) {
        return Windows.Storage.FileIO.readTextAsync(sampleFile);
    }).done(function (x) {
        document.getElementById("puncte").innerText = x + " Puncte";
    }, function () {
        document.getElementById("puncte").innerText = 0 + " Puncte";
    });
}

var updateScor = function (a) {
    localFolder.getFileAsync("scor.txt")
    .then(function (sampleFile) {
        return Windows.Storage.FileIO.readTextAsync(sampleFile);
    }).done(function (x) {
        x = parseInt(x) + parseInt(a);
        console.log(x + a);
        document.getElementById("puncte").innerText = x + " puncte";
        localFolder.createFileAsync("scor.txt", Windows.Storage.CreationCollisionOption.openIfExists)
        .then(function (sampleFile) {
            return Windows.Storage.FileIO.writeTextAsync(sampleFile, x);
        })
        .done(function () {
        });
    }, function () {
        console.log(a);
        console.log("No score yet!");
        document.getElementById("puncte").innerText = a + " puncte";
        localFolder.createFileAsync("scor.txt", Windows.Storage.CreationCollisionOption.openIfExists)
        .then(function (sampleFile) {
            return Windows.Storage.FileIO.writeTextAsync(sampleFile, a);
        })
        .done(function () {
        });
    });
}