// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;



    app.onsettings = function (e) {
        e.detail.applicationcommands = {
            "about": {
                href: "/pages/about.html",
                title: "Despre"
            },
            "preferences": {
            href: "/pages/preferences.html",
            title: "Preferințe"
        }

        }

        WinJS.UI.SettingsFlyout.populateSettings(e);
    };

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.

            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();


})();


var nrc = 12;
var citate = ["Când legile matematicii se referă la realitate, atunci ele nu sunt sigure. Dacă sunt sigure, nu se referă la realitate. - Albert Einstein",
                "Matematica va fi limba latină a viitorului, obligatorie pentru toți oamenii de știință. Tocmai pentru că matematica permite accelerarea maximă a circulației ideilor științifice. - Grigore Moisil",
                "Invățând matematica, înveți să gândești. - Grigore Moisil",
                "Matematica este regina știintelor. - Carl Friedrich Gauss",
                "Esența matematicii nu este aceea de a face lucrurile mai complicate, dar de a face lucrurile complicate mai simple. - S. Gudder",
                "Matematica este o limbă şi o ştiinţă. - Lucian Blaga",
                "Matematica, ştiinţă zisă exactă!? - Grigore Moisil",
                "Inﬁnitul este locul unde se produce ceea ce nu se poate întâmpla. - Un elev",
                "Ușurința matematicii se bazează pe posibilitatea construcției sale logice, însă diﬁcultatea, de care se sperie mulți, în imposibilitatea expunerii în alt mod. - Hugo Steinhaus",
                "Egalitatea nu există decât în matematică. - Mihai Eminescu",
                "Matematica este muzica raţiunii. - James J. Sylvester",
                "Matematica este limba cu care Dumnezeu a scris universul. - Galileo Galilei"
];
var leftpanel = [
    ['Numere reale', 'Submulțimi mărginite ale lui ℝ', 'Vecinătate a unui punct'],
    ['Ce este un șir?', 'Limita unui șir', 'Subșiruri', 'Convergența', 'Trecere la limită în inegalități și egalități', 'Nedeterminări', 'Numărul e', 'Limite remarcabile'],
    ['Limite de funcții', 'Limita unei funcții într-un punct', 'Limite laterale', 'Criterii de existență', 'Limite remarcabile'],
    ['Aspect intuitiv', 'Continuitate laterală', 'Proprietăți'],
    ['Derivata într-un punct', 'Derivabilitate și continuitate', 'Derivate laterale', 'Funcții elementare', 'Operații cu derivate', 'Derivata funcției inverse', 'Derivate de ordin superior', 'Teoreme', 'L\'Hospital', 'Derivata a doua'],
    ['Asimptote', 'Reprezentări grafice'],
    ['Șiruri', 'Funcții', 'Continuitate', 'Derivabilitate', 'Grafice']
];


var lmax = 12;

citatRandom = function () {
    //aleg un nou citat
    var x = Math.floor(Math.random() * nrc);
    document.getElementById("c").innerHTML = citate[x] + "<br />";
    return x;
}


curent = 1;
var activegame = 0;
var divs = ["content", "content", "content", "content", "content", "content", "probleme", "joc"];
var capitolProbleme = "Șiruri";
nav = function (x) {
    //comut între capitle
    if (x != curent) {
        //dacă intru în alt capitol, schimb stilul elementelor
        document.getElementById(divs[curent - 1]).setAttribute("style", "display: none;");
        document.getElementById(divs[x - 1]).setAttribute("style", "display: block;");
        document.getElementById("m" + String(x)).setAttribute("class", "active");
        document.getElementById("m" + String(curent)).removeAttribute("class");
    }
    curent = x;
    
    if (x <= 7) {
        //primele 7 capitole au lecții
        var l = leftpanel[x - 1].length;
        for (var i = 0; i < lmax; i++) document.getElementById("l" + String(i + 1)).setAttribute("style", "display: none");
        for (var i = 0; i < l; i++) {
            document.getElementById("l" + String(i + 1)).setAttribute("style", "display: block");
            document.getElementById("l" + String(i + 1)).innerHTML = leftpanel[x - 1][i];
        }
        document.getElementById("content").innerHTML = "<h2>Alege lecția!</h2>";
        document.getElementById("e1").innerHTML = " ";
        if (x == 7) document.getElementById("tl").innerHTML = "Capitole cu probleme";
        else document.getElementById("tl").innerHTML = "Lecții";
        document.getElementById("e1").setAttribute("style", "display: block;");
        document.getElementById("scorMaxim").setAttribute("style", "display: none;");
    }
    else {
        //problemele și jocul sunt puse altfel - conțin apeluri la funcții din script
        document.getElementById("tl").innerHTML = "Să exersăm!";
        for (var i = 0; i < lmax; i++) document.getElementById("l" + String(i + 1)).setAttribute("style", "display: none");
        document.getElementById("e1").setAttribute("style", "display: none;");
    }
    document.getElementById("scor").setAttribute("style", "display: none");
    if (x == 8 && activegame == 1) {
        document.getElementById("scor").setAttribute("style", "display: block;");
        document.getElementById("scorMaxim").setAttribute("style", "display: block");
    }
    citatRandom();

};
lectie = function (y) {
    //intru în altă lecție
    if (curent == 7) {
        capitolProbleme = leftpanel[curent - 1][y - 1];
        initializeaza();
    }
    else
    MSApp.execUnsafeLocalFunction(function () {
        document.getElementById("content").innerHTML = toStaticHTML(lectii[curent - 1][y - 1]);
        document.getElementById("e1").innerHTML = exemple[curent - 1][y - 1];
    });
}

var height = [130, 100]; 
getExemplu = function (x) {
    //arată exemplul
    document.getElementById("e" + String(x)).setAttribute("style", "height:" + String(height[x - 1]) + "px;");
    document.getElementById("e" + String(x)).setAttribute("onclick", "hideExemplu (" + String (x) + ")");
}
hideExemplu = function (x) {
    //ascunde exemplul
    document.getElementById("e" + String(x)).setAttribute("style", "height: 30px;");
    document.getElementById("e" + String(x)).setAttribute("onclick", "getExemplu (" + String(x) + ")");

}


//Fisiere
var applicationData = Windows.Storage.ApplicationData.current;
var localFolder = applicationData.localFolder;

function write(file, text) {
    localFolder.createFileAsync(file, Windows.Storage.CreationCollisionOption.openIfExists)
    .then(function(sampleFile) {
        return Windows.Storage.FileIO.writeTextAsync(sampleFile, text);
    })
    .done(function() {
    });
}



