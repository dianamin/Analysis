var nr = 8;
var capitol = ["Șiruri", "Șiruri", "Funcții", "Funcții", "Derivate", "Grafice", "Derivate", "Derivate"];


var pLimite = [
     "Calculați limita <img src ='/images/probleme/e3.png' class ='img-content' />.",
    'Fie funcția <img src ="/images/probleme/e4a.png" class ="img-content" />. <br /> Să se calculeze <img src ="/images/probleme/e4b.png" class ="img-content" />.',

];
var iLimite = [
    ["Observăm că este o limită de tipul 1<sup>∞</sup>. Încercăm să formăm <i>limita lui euler</i>: <img src ='/images/probleme/h31.png' class ='img-content' />", "<img src ='/images/probleme/h32.png' class ='img-content' />", "<img src ='/images/probleme/h33.png' class ='img-content' />"],
    ["Înlocuim x cu f(y).", "<img src ='/images/probleme/h42.png' class ='img-content' />", "<img src ='/images/probleme/h43.png' class ='img-content' />"],
];
var rLimite =  ["sqrt(e)", "1/3",];

var crt = 0, capitol = "Siruri";
var hint = -1;
var probleme = new Array();

check = function () {
    var r = document.getElementById("rezultat");
    if (r.value != probleme[crt].rezultat) {
        //dacă răspunsul nu este corect, utilizatorul este informat și afișez un indiciu
        updateScor(-10);
        document.getElementById("divrezultat").setAttribute("class", "form-group has-error");
        document.getElementById("wrong").setAttribute("style", "display: block;");
        document.getElementById("right").setAttribute("style", "display: none;");
        if (hint < 2) {
            //sunt doar 3 indicii la fiecare problemă
            hint++;
            document.getElementById("h" + String(hint + 1)).setAttribute("style", "display: block;");
        }
    }
    else {
        //în cazul în care răspunsul este corect, utilizatorul este informat
        updateScor(100);
        document.getElementById("divrezultat").setAttribute("class", "form-group has-success");
        document.getElementById("wrong").setAttribute("style", "display: none;");
        document.getElementById("right").setAttribute("style", "display: block;");
    }
}



var puneProblema = function (x) {
    var p = probleme[x];
    document.getElementById("capitol").innerHTML = p.capitol;
    document.getElementById("enunt").innerHTML = p.enunt;
    document.getElementById("divrezultat").setAttribute("class", "form-group");
    document.getElementById("wrong").setAttribute("style", "display: none;");
    document.getElementById("right").setAttribute("style", "display: none;");
    document.getElementById("rezultat").value = "";
    hint = -1;
    crt = x;
    document.getElementById("h1").setAttribute("style", "display: none;");
    document.getElementById("h2").setAttribute("style", "display: none;");
    document.getElementById("h3").setAttribute("style", "display: none;");
    document.getElementById("h1").innerHTML = p.indiciu[0];
    document.getElementById("h2").innerHTML = p.indiciu[1];
    document.getElementById("h3").innerHTML = p.indiciu[2];
}

var next = function () {
    crt++;
    if (crt == probleme.length) crt = 0;
    puneProblema(crt);
}

var prev = function () {
    crt--;
    if (crt < 0) crt = probleme.length - 1;
    puneProblema(crt);
}

var shuffle = function () {
    var crt = Math.floor(Math.random() * probleme.length);
    puneProblema(crt);
}

var initializeaza = function () {
    probleme = [];
    WinJS.xhr({ url: "data/" + capitolProbleme + ".txt" }).then(function (xhr) {
        var items = JSON.parse(xhr.responseText);
        items.forEach(function (item) {
            probleme.push(item);
        });
        puneProblema(0);
    });
}

initializeaza(0);


