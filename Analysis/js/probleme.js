var nr = 8;
var capitol = ["Șiruri", "Șiruri", "Funcții", "Funcții", "Derivate", "Grafice", "Derivate", "Derivate"];

var pSiruri = [
    "Calculați limita <img src ='/images/probleme/e1.png' class ='img-content' />.",
    "Calculați limita <img src ='/images/probleme/e2.png' class ='img-content' />.",
];
var iSiruri = [
    ["Utilizăm criteriul majorării", "<img src ='/images/probleme/h12.png' class ='img-content' />", "<img src ='/images/probleme/h13.png' class ='img-content' />"],
    ["Fie <img src ='/images/probleme/h21.png' class ='img-content' />.", "Folosim criteriul cleștelui <img src ='/images/probleme/h22.png' class ='img-content' />.", "<img src ='/images/probleme/h23a.png' class ='img-content' />, deci <img src ='/images/probleme/h23b.png' class ='img-content' />"]
]
var rSiruri = ["0", "1"];

var pLimite = [
     "Calculați limita <img src ='/images/probleme/e3.png' class ='img-content' />.",
    'Fie funcția <img src ="/images/probleme/e4a.png" class ="img-content" />. <br /> Să se calculeze <img src ="/images/probleme/e4b.png" class ="img-content" />.',

];
var iLimite = [
    ["Observăm că este o limită de tipul 1<sup>∞</sup>. Încercăm să formăm <i>limita lui euler</i>: <img src ='/images/probleme/h31.png' class ='img-content' />", "<img src ='/images/probleme/h32.png' class ='img-content' />", "<img src ='/images/probleme/h33.png' class ='img-content' />"],
    ["Înlocuim x cu f(y).", "<img src ='/images/probleme/h42.png' class ='img-content' />", "<img src ='/images/probleme/h43.png' class ='img-content' />"],
];
var rLimite =  ["sqrt(e)", "1/3",];

var pDerivate = [
   "Fie <img src = '/images/probleme/e5.png' class ='img-content' />. Ecuația tangentei la graficul lui f în punctul de abscisă x = 0 este <i>y = a x</i>. Cât este a?",
    "Fie <img src = '/images/probleme/e6.png' class ='img-content' />. Asimptota orizontală a graficului funcției are ecuația y = a. a = ?",
    "Fie funcția <img src = '/images/probleme/e7.png' class = 'img-content' /> pentru numărul natural n > 1. Scrieți 1 dacă funcția este convexă sau 2 dacă este concavă.",
    "Fie funcția f : ℝ → ℝ, f(x) = x<sup>3</sup> + t<sup>2</sup>x. Care este coeficientul lui x<sup>2</sup> în derivata întâi?"
];
var rDerivate = ["3", "1", "1", "3"];
var iDerivate = [
    ["Calculăm derivata funcției: <img src ='/images/probleme/h51.png' class ='img-content' />", "Ecuația tangentei: y - f(x<sub>0</sub>) = f\'(x<sub>0</sub>)(x - x<sub>0</sub>)", "f(0) = 0, f'(0) = 3. Deci, ecuația tangentei este y = 3x, a = 3."],
    ["Asimptota orizontala este dreapta de care se apropie graficul funcției când x tinde la infinit.", "Calculăm limita funcției când x tinde la infinit.", "a = 1."],
    ["Calculăm prima derivată: f'(x) = nx<sup>n−1</sup> + n.", "Calculăm a doua derivată: f''(x) = n(n - 1)x<sup>n-2</sup>.", "Observăm că derivata a doua este pozitivă, deci funcția este convexă."],
    ["(x<sup>n</sup>)' = nx<sup>n - 1</sup>", "(tf(x))' = tf'(x), unde t este o constantă", "Derivata funcției f este f'(x) = 3x<sup>2</sup> + t<sup>2</sup>"]
];
var crt = 0, capitol = "Siruri";
var hint = -1;

check = function () {
    var r = document.getElementById("rezultat");
    if (r.value != rSiruri[crt]) {
        //dacă răspunsul nu este corect, utilizatorul este informat și afișez un indiciu
        document.getElementById("divrezultat").setAttribute("class", "form-group has-error");
        document.getElementById("wrong").setAttribute("style", "display: block;");
        document.getElementById("right").setAttribute("style", "display: none;");
        if (hint < 2) {
            //sunt doar 3 indicii la fiecare problemă
            hint++;
            document.getElementById("h" + String(hint + 1)).setAttribute("style", "display: block;");
            document.getElementById("h" + String(hint + 1)).innerHTML = iSiruri[crt][hint];
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
