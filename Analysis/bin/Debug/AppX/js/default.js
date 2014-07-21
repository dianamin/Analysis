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
    ['Lol'],
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
var divs = ["content", "content", "content", "content", "content", "content", "content", "probleme", "joc"];
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
    
    if (x <= 8) {
        //primele 7 capitole au lecții
        var l = leftpanel[x - 1].length;
        for (var i = 0; i < lmax; i++) document.getElementById("l" + String(i + 1)).setAttribute("style", "display: none");
        for (var i = 0; i < l; i++) {
            document.getElementById("l" + String(i + 1)).setAttribute("style", "display: block");
            document.getElementById("l" + String(i + 1)).innerHTML = leftpanel[x - 1][i];
        }
        document.getElementById("content").innerHTML = "<h2>Alege lecția!</h2>";
        document.getElementById("e1").innerHTML = " ";
        if (x == 8) document.getElementById("tl").innerHTML = "Capitole cu probleme";
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
    if (x == 9 && activegame == 1) {
        document.getElementById("scor").setAttribute("style", "display: block;");
        document.getElementById("scorMaxim").setAttribute("style", "display: block");
    }
    citatRandom();

};
lectie = function (y) {
    //intru în altă lecție
    if (curent == 8) {
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

function read(file) {
    localFolder.getFileAsync(file)
    .then(function (sampleFile) {
        return Windows.Storage.FileIO.readTextAsync(sampleFile);
    }).done(function (x) {
        //console.log(x);
        document.getElementById("scorMaxim").innerText = "Scor maxim: " + x;
        text = x;
    }, function () {
        console.log("No score yet!");
    });
}


function readTimestamp() {
    localFolder.getFileAsync("dataFile.txt")
       .then(function (sampleFile) {
           return Windows.Storage.FileIO.readTextAsync(sampleFile);
       }).done(function (timestamp) {
           // Data is contained in timestamp
       }, function () {
           // Timestamp not found
       });
}


//Joc

//întrebări
var nrq = 10;
var query = ["Cât este (2x<sup>2</sup>)'?", "Cât este (ln x)'?", "Cât este (cos(2x))'?", "Cât este (e<sup>x</sup>)'", "Cât este (e<sup>sinx</sup>)'?",
            "Ce funcție are ca derivată e<sup>x</sup>?", "Cât este x<sup>-1</sup> derivat?", ""
]

// 1->5 - intrebari simple (nivelul 1)

//răspunsuri
var ans = [
    ["4x", "2x"],
    ["e<sup>x</sup>", "1/x"],
    ["-2sin(2x)", "-sin(x)"],
    ["ex", "e<sup>x</sup>"],
    ["e<sup>sin(x)</sup>", "cos(x)e<sup>sin(x)</sup>"],
    ["e<sup>x</sup> + x", "e<sup>x</sup> + c"],
    ["-x<sup>-2</sup>","1"],
    [],
    []
];
//correct[i] = răspunsul corect pentru întrebarea i
var correct = [1, 2, 1, 2, 2, 2];
//taken[i] = 1 dacă am ales întrebarea i, 0 altfel
var taken = [0, 0, 0, 0, 0, 0, 0];
var scor = 0, nivel = 0, q = 0, nq = 0;;
var lifec = 100, lifee = 100;
var a, b; //range pentru intrebari
var scorMaxim;


var end = function () {

    if (lifec > 0) document.getElementById("rez").innerHTML = "Bravo :D";
    else {
        document.getElementById("robot-joc").setAttribute("style", "animation: lost; animation-duration: 2s;");
        document.getElementById("rez").innerHTML = "Poți mai bine! :)";
    }

    setTimeout(function () {
        document.getElementById("combat").setAttribute("style", "display: none;");
        document.getElementById("stopjoc").setAttribute("style", "display: block;");
        document.getElementById("robot-joc").setAttribute("style", "");
    }, 2000);
    if (scor > scorMaxim) {
        scorMaxim = scor;
        write("scor.txt", String(scor));
    }
    //read("scor.txt");
   
}

choice = function (x) {
    if (String(x) == correct[q]) {
        //dacă răspunsul este corect
        document.getElementById('ok').play(); //dau play la sunetul corespunzător răspunsului corect
        scor = scor + 20; //adaug puncte la scor
        lifee -= 20; //adversarul este lovit
        document.getElementById("enemy").setAttribute("value", lifee);
    }
    else {
        document.getElementById('notOk').play(); //dau play la sunetul corespunzător răspunsului corect
        lifec -= 10; //robotul este lovit
        if (lifec <= 0) end();
        console.log(lifec);
        document.getElementById("character").setAttribute("value", lifec);
    }
    document.getElementById("scor").innerHTML = "Scor <br />" + String(scor); //update la scor
    if (lifee && lifec) { //dacă nu s-a terminat nivelul și utilizatorul nu a pierdut
        if (nq < 4) {
            //dacă nu este ultima întrebare
            if (nivel > 0) q = 1; //jmen
            else {
                //aleg o noua întrebare între a și b
                q = Math.floor(Math.random() * b) + a;
                while (taken[q] == 1) q = Math.floor(Math.random() * b) + a;
                taken[q] = 1;
            }
            nq++;
            document.getElementById("query").innerHTML = query[q];
            document.getElementById("a1").innerHTML = ans[q][0];
            document.getElementById("a2").innerHTML = ans[q][1];
        }
    }
    if (!lifee) {
        console.log(nivel);
        document.getElementById("adv").setAttribute("style", "animation: lost; animation-duration: 2s;"); //adversarul a pierdut
        if (nivel != 5) {
            //dacă nu am ajuns la ultimul nivel, resetez unele variabile și creez o scenă nouă
            nivel++;
            newScene();
            document.getElementById("adv").setAttribute("style", "animation: opacitate; animation-duration: 2s;");
            q = 1;
            nq = 0;
            //while (taken[q] == 1) q = Math.floor(Math.random() * b) + a;
            //taken[q] = 1;
            document.getElementById("query").innerHTML = query[q];
            document.getElementById("a1").innerHTML = ans[q][0];
            document.getElementById("a2").innerHTML = ans[q][1];
            //  a = b + 1;
            //  b = b + 5;
        }
        else end(); //utilizatorul a câștigat jocul
    }
    if (!lifec) end(); //utilizatorul a pierdut jocul
}




var nrb = 11, nra = 6;

newScene = function () {
    document.getElementById("enemy").setAttribute("value", "100");
    lifee = 100; //viața adversarului este 100
    //background nou
    var b = Math.floor(Math.random() * nrb); //aleg aleator un nou fundal
    var bg = "'" + '/images/bg/' + String(b + 1) + '.png' + "'";
    document.getElementById("combat").setAttribute("style", "background-image: url(" + bg + "); display: block;");
    //adversar nou
    //var a = Math.floor(Math.random() * nra) + 1;
    document.getElementById("adv").innerHTML = '<img src = "/images/adversari/' + String(nivel + 1) + '.png" class = "personaj-joc" style = "margin-right: 150px;"/>';
}



startJoc = function () {
    //marchez întrebariile ca nefiind alese
    for (var i = 0; i < nrq; i++) taken[i] = 0;
    a = 0; b = 5; //aleg range-ul pentru primele întrebări (ușoare)
    scor = 0; //setez scorul
    read("scor.txt");
    nivel = 0; //setez nivelul
    lifec = 100; //setez viața robotului
    lifee = 100; //setez viața adversarului
    nq = 0; //setez numărul de întrebari din nivelul actual
    document.getElementById("character").setAttribute("value", lifec);
    document.getElementById("enemy").setAttribute("value", lifee);
    document.getElementById("scor").setAttribute("style", "display: block;");
    document.getElementById("stopjoc").setAttribute("style", "display: none;");
    document.getElementById("scor").innerHTML = "Scor <br />" + String(scor);
    document.getElementById("startjoc").setAttribute("style", "display: none;");
    document.getElementById("query").innerHTML = query[0];
    taken[0] = 1;
    document.getElementById("a1").innerHTML = ans[0][0];
    document.getElementById("a2").innerHTML = ans[0][1];
    activegame = 1;
    newScene();
}

