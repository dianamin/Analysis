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
    ['Lol']
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
        document.getElementById("tl").innerHTML = "Lecții";
        document.getElementById("e1").setAttribute("style", "display: block;");
    }
    else {
        //problemele și jocul sunt puse altfel - conțin apeluri la funcții din script
        document.getElementById("tl").innerHTML = "Să exersăm!";
        for (var i = 0; i < lmax; i++) document.getElementById("l" + String(i + 1)).setAttribute("style", "display: none");
        document.getElementById("e1").setAttribute("style", "display: none;");
    }
    document.getElementById("scor").setAttribute("style", "display: none");
    if (x == 9 && activegame == 1) document.getElementById("scor").setAttribute("style", "display: block;");
    citatRandom();

};
lectie = function (y) {
    //intru în altă lecție
    document.getElementById("content").innerHTML = lectii[curent - 1][y - 1];
    document.getElementById("e1").innerHTML = exemple[curent - 1][y - 1];
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


//Probleme
var nr = 8;
var capitol = ["Șiruri", "Șiruri", "Funcții", "Funcții", "Derivate", "Grafice", "Derivate", "Derivate"];
var enunt = [
    "Calculați limita <img src ='/images/probleme/e1.png' class ='img-content' />.",
    "Calculați limita <img src ='/images/probleme/e2.png' class ='img-content' />.",
    "Calculați limita <img src ='/images/probleme/e3.png' class ='img-content' />.",
    'Fie funcția <img src ="/images/probleme/e4a.png" class ="img-content" />. <br /> Să se calculeze <img src ="/images/probleme/e4b.png" class ="img-content" />.',
    "Fie <img src = '/images/probleme/e5.png' class ='img-content' />. Ecuația tangentei la graficul lui f în punctul de abscisă x = 0 este <i>y = a x</i>. Cât este a?",
    "Fie <img src = '/images/probleme/e6.png' class ='img-content' />. Asimptota orizontală a graficului funcției are ecuația y = a. a = ?",
    "Fie funcția <img src = '/images/probleme/e7.png' class = 'img-content' /> pentru numărul natural n > 1. Scrieți 1 dacă funcția este convexă sau 2 dacă este concavă.",
    "Fie funcția f : ℝ → ℝ, f(x) = x<sup>3</sup> + t<sup>2</sup>x. Care este coeficientul lui x<sup>2</sup> în derivata întâi?"
];
var raspuns = ["0", "1", "sqrt(e)", "1/3", "3", "1", "1", "3"];
var indiciu = [
    ["Utilizăm criteriul majorării", "<img src ='/images/probleme/h12.png' class ='img-content' />", "<img src ='/images/probleme/h13.png' class ='img-content' />"],
    ["Fie <img src ='/images/probleme/h21.png' class ='img-content' />.", "Folosim criteriul cleștelui <img src ='/images/probleme/h22.png' class ='img-content' />.", "<img src ='/images/probleme/h23a.png' class ='img-content' />, deci <img src ='/images/probleme/h23b.png' class ='img-content' />"],
    ["Observăm că este o limită de tipul 1<sup>∞</sup>. Încercăm să formăm <i>limita lui euler</i>: <img src ='/images/probleme/h31.png' class ='img-content' />", "<img src ='/images/probleme/h32.png' class ='img-content' />", "<img src ='/images/probleme/h33.png' class ='img-content' />"],
    ["Înlocuim x cu f(y).", "<img src ='/images/probleme/h42.png' class ='img-content' />", "<img src ='/images/probleme/h43.png' class ='img-content' />"],
    ["Calculăm derivata funcției: <img src ='/images/probleme/h51.png' class ='img-content' />", "Ecuația tangentei: y - f(x<sub>0</sub>) = f\'(x<sub>0</sub>)(x - x<sub>0</sub>)", "f(0) = 0, f'(0) = 3. Deci, ecuația tangentei este y = 3x, a = 3."],
    ["Asimptota orizontala este dreapta de care se apropie graficul funcției când x tinde la infinit.", "Calculăm limita funcției când x tinde la infinit.", "a = 1."],
    ["Calculăm prima derivată: f'(x) = nx<sup>n−1</sup> + n.", "Calculăm a doua derivată: f''(x) = n(n - 1)x<sup>n-2</sup>.", "Observăm că derivata a doua este pozitivă, deci funcția este convexă."],
    ["(x<sup>n</sup>)' = nx<sup>n - 1</sup>", "(tf(x))' = tf'(x), unde t este o constantă", "Derivata funcției f este f'(x) = 3x<sup>2</sup> + t<sup>2</sup>"]
];
var crt = 0;
var hint = -1;

check = function () {
    var r = document.getElementById("rezultat");
    if (r.value != raspuns[crt]) {
        //dacă răspunsul nu este corect, utilizatorul este informat și afișez un indiciu
        document.getElementById("divrezultat").setAttribute("class", "form-group has-error");
        document.getElementById("wrong").setAttribute("style", "display: block;");
        document.getElementById("right").setAttribute("style", "display: none;");
        if (hint < 2) {
            //sunt doar 3 indicii la fiecare problemă
            hint++;
            document.getElementById("h" + String(hint + 1)).setAttribute("style", "display: block;");
            document.getElementById("h" + String(hint + 1)).innerHTML = indiciu[crt][hint];
        }
    }
    else {
        //în cazul în care răspunsul este corect, utilizatorul este informat
        document.getElementById("divrezultat").setAttribute("class", "form-group has-success");
        document.getElementById("wrong").setAttribute("style", "display: none;");
        document.getElementById("right").setAttribute("style", "display: block;");
    }
}
next = function () {
    //următoarea întrebare

    //aleg o întrebare
    var n = Math.floor(Math.random() * nr);
    document.getElementById("capitol").innerHTML = capitol[n];
    document.getElementById("enunt").innerHTML = enunt[n];
    document.getElementById("divrezultat").setAttribute("class", "form-group");
    document.getElementById("wrong").setAttribute("style", "display: none;");
    document.getElementById("right").setAttribute("style", "display: none;");
    document.getElementById("rezultat").value = "";

    //ascund indiciile (probabil afișate la întrebarea precedentă)
    hint = -1;
    crt = n;
    document.getElementById("h1").setAttribute("style", "display: none;");
    document.getElementById("h2").setAttribute("style", "display: none;");
    document.getElementById("h3").setAttribute("style", "display: none;");
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
    else {
        document.getElementById("adv").setAttribute("style", "animation: lost; animation-duration: 4s;"); //adversarul a pierdut
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
        else {
            //utilizatorul a terminat jocul
            document.getElementById("combat").setAttribute("style", "display: none;");
            document.getElementById("stopjoc").setAttribute("style", "display: block;");
            if (scor >= 50) document.getElementById("rez").innerHTML = "Bravo :D";
            else document.getElementById("rez").innerHTML = "Poți mai bine! :)";
        }
    }
}

var nrb = 10, nra = 6;

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

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                console.log(allText);
            }
        }
    }
    rawFile.send(null);
}

function writeTextFile(file, text) {
    var _Folder = Windows.ApplicationModel.Package.Current.InstalledLocation;
    _Folder =  _Folder.GetFolderAsync("txt");
    var _File =  _Folder.getFileAsync("test");
    Windows.Storage.FileIO.writeTextAsync(_File, "yay");
}


startJoc = function () {
    //marchez întrebariile ca nefiind alese
    for (var i = 0; i < nrq; i++) taken[i] = 0;
    a = 0; b = 5; //aleg range-ul pentru primele întrebări (ușoare)
    scor = 0; //setez scorul
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
    //#mlc
}

