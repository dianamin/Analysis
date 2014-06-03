// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

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

var nrc = 7;
var citate = ["Cand legile matematicii se refera la realitate, atunci ele nu sunt sigure. Daca sunt sigure, nu se refera la realitate. - Albert Einstein",
                "Matematica va fi limba latină a viitorului, obligatorie pentru toți oamenii de știință. Tocmai pentru că matematica permite accelerarea maximă a circulației ideilor științifice. - Grigore Moisil",
                "Invatand matematica, înveti sa gandesti. - Grigore Moisil",
                "Matematica este regina stiintelor - Carl Friedrich Gauss",
                "Esenta matematicii nu este aceea de a face lucrurile mai complicate, dar de a face lucrurile complicate mai simple. - S. Gudder",
                "Matematica este o limbă şi o ştiinţă. - Lucian Blaga",
                "Matematica, ştiinţă zisă exactă!? - Grigore Moisil"];
var leftpanel = [
    ['Numere reale', 'Submulțimi mărginite ale lui <b> R </b>', 'Vecinătate a unui punct'],
    ['Ce este un șir?', 'Limita unui șir', 'Subșiruri', 'Convergența', 'Trecere la limită în inegalități și egalități', 'Numărul e', 'Limite remarcabile'],
    ['Limite de funcții', 'Limita unei funcții într-un punct', 'Limite laterale', 'Criterii de existență', 'Limite remarcabile'],
    ['Aspect intuitiv', 'Continuitate laterală', 'Proprietăți'],
    ['Derivata într-un punct', 'Derivabilitate și continuitate', 'Funcții elementare', 'Derivata funcției inverse', 'Derivate de ordin superior', 'Teoreme', 'L\'Hospital', 'Derivata a doua'],
    ['Asimptote', 'Reprezentări grafice']
];
var lectii = [
    ['<!-- Numere reale -->   <h2> Numere reale <img src = "/images/axa.png" class = "img-content"/> </h2> \
            <span class ="glyphicon glyphicon-pencil"></span> Mulțimea numerelor reale are ca reprezentare geometrică axa numerelor reale. <br /> \
            \
            <span class ="glyphicon glyphicon-pencil"></span> Să ne amintim!\
            <table class ="table">\
                <thead>\
                    <th> Interval real </th> <th> Valori </th>\
                </thead>\
                <tbody>\
                    <tr> <td> (a, b) </td> <td> {x e <b>R</b> | a < x < b } </td> </tr>\
                    <tr> <td> [a, b] </td> <td> {x e <b>R</b> | a ≤ x ≤ b } </td> </tr>\
                    <tr> <td> [a, b) </td> <td> {x e <b>R</b> | a ≤ x < b } </td> </tr>\
                    <tr> <td> (a, b] </td> <td> {x e <b>R</b> | a < x ≤ b } </td> </tr>\
                    <tr> <td> (-∞, a) </td> <td> {x e <b>R</b> | x < a } </td> </tr>\
                    <tr> <td> (a, ∞) </td> <td> {x e <b>R</b> | a < x } </td> </tr>\
                </tbody>\
            </table>',
            '<h2>Submulțimi mărginite ale lui <b>R</b> </h2>\
            <p> <span class ="glyphicon glyphicon-pencil"></span> a ∈ <b>R</b> se numește <i>majorant</i> pentru mulțimea A dacă ∀ x ∈ A avem x ≤ a.<img src = "/images/max.png" class = "img-content"/> < </p>\
            <p> <span class ="glyphicon glyphicon-pencil"></span> O mulțime A care are cel puțin un majorant se numește <i> mărginită superior</i>. <img src = "/images/min.png" class = "img-content"/></p>\
            <p> <span class ="glyphicon glyphicon-pencil"></span> a ∈ <b>R</b> se numește <i>minorant</i> pentru mulțimea A dacă ∀ x ∈ A avem x ≥ a. </p>\
            <p> <span class ="glyphicon glyphicon-pencil"></span> O mulțime A care are cel puțin un minorant se numește <i> mărginită inferior</i>. </p>\
            <p> <span class ="glyphicon glyphicon-pencil"></span> O mulțime <i> mărginită </i> este mărginită atât superior, cât și inferior. <img src = "/images/marginit.png" class = "img-content"/></p>\
            <h2> Axioma lui Cantor </h2>\
            <p> Orice mulțime de numere reale mărginită superior admite un cel mai mic majorant. </p>\
            <table class ="table">\
                <thead>\
                    <th> <h2> Notații </h2> </th>\
                    <th><img src = "/images/caiet.png" class = "img-content"/> </th>\
                </thead>\
                <tbody>\
                    <tr> <td>max A</td> <td>cel mai mare element din mulțimea A</td> </tr>\
                    <tr> <td>min A</td> <td>cel mai mic element din mulțimea A</td> </tr>\
                    <tr> <td>sup A</td> <td>marginea superioară a mulțimii A</td> </tr>\
                    <tr> <td>inf A</td> <td>marginea inferioară a mulțimii A</td> </tr>\
                </tbody>\
            </table>',
            ' <h2> Vecinătate a unui punct </h2> \
                <p> <span class ="glyphicon glyphicon-pencil"></span> Adăugând -∞ și +∞ la mulțimea numerelor reale, obținem <i>dreapta reală încheiată.</i> <img src = "/images/R.png" class = "img-content"/> </p> \
                <p> <span class ="glyphicon glyphicon-pencil"></span> Se numește <i>vecinătate</i> a numărului real x orice mulțime V ⊂ ℝ care include un interval deschis (a, b) astfel încât x ∈ (a, b).</p> \
                <img src = "/images/case.png" class = "img-content"/>',
    ],
    ['<h2>Ce este un șir? </h2>\
               <p> <span class ="glyphicon glyphicon-pencil"></span> Fie k un număr natural fixat și A ⊂ ℝ, N<sub>k</sub> = {n ∈ ℕ | k ≤ n}. <i>Șirul</i> cu elemente din A se referă la o funcție f:N<sub>k</sub>→A.</p>\
                <img src ="/images/sir.png" class ="img-content" />\
                <table class ="table">\
                    <thead>\
                        <th> <h2> Notații </h2> </th>\
                        <th><img src = "/images/caiet.png" class = "img-content"/> </th>\
                    </thead>\
                    <tbody>\
                        <tr> <td>a<sub>n</sub></td> <td>f(n)</td></tr>\
                        <tr> <td>a<sub>k</sub></td> <td>termen al șirului</td></tr>\
                        <tr> <td>a<sub>n</sub></td> <td>termen general</td></tr>\
                        <tr> <td>(a<sub>n</sub>)<sub>n≥k</sub> sau (a<sub>n</sub>)<sub>n</sub></td> <td>șirul</td></tr>\
                    </tbody>\
                </table>\
                <h2> Recurențe de ordin K </h2>\
                <p><span class ="glyphicon glyphicon-pencil"></span>Considerăm că pentru șirul (a<sub>n</sub>)<sub>n</sub> se cunosc primii k termeni. Termenul a<sub>n</sub> se va obține printr-o egalitate cu ajutorul termenilor a<sub>n-1</sub>, a<sub>n-2</sub>, ..., a <sub>n-k</sub>.</p>\
                <p><span class ="glyphicon glyphicon-pencil"></span>Atunci, șirul este definit printr-o <i>recurența de ordinul k.</i></p>',
                '<h2>Limite de șiruri</h2> \
                <p><span class ="glyphicon glyphicon-pencil"></span> Șirul (x<sub>n</sub>)<sub>n</sub> <i>are limită</i> l dacă orice vecinătate a lui l conține toți termenii șirului începând de la un anumit rang. </p>  \
                <p><span class ="glyphicon glyphicon-pencil"></span> Un șir se numește <i>convergent</i> dacă are limita finită. Altfel, se numește <i>divergent</i>. </p> \
                 <img src ="/images/limsir.png" style ="margin-top: -200px; margin-right: 20px; display: inline-block;"  class = "img-med" /> \
                <table class ="table" style ="width: 150px; display: inline-block;"> \
                    <thead> \
                        <th> <h2> Notații </h2> \
                        <img src = "/images/caiet.png" class = "img-content"/> </th> \
                    </thead> \
                    <tbody> \
                        <tr> <td>lim x<sub>n</sub> = l</td></tr> \
                        <tr> <td>x → l</td></tr> \
                    </tbody> \
                </table>',
                '<h2>Subșir al unui șir dat</h2>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Fie (a<sub>n</sub>)<sub>n≥p</sub> un șir dat și (k<sub>n</sub>)<sub>n≥0</sub> un șir strict crescător de numere naturale. Șirul (a<sub>k<sub>n</sub></sub>)<sub>n≥0</sub> se numește <i>subșir</i> al șirului (a<sub>n</sub>)<sub>n≥p</sub>.</p>\
                <img src ="images/subsequence.png" class ="img-content" />\
                <ul class="list-group">\
                  <li class="list-group-item">Dacă un șir este monoton, atunci orice subșir al său este <i>monoton</i>.</li>\
                  <li class="list-group-item">Dacă un șir este mărginit (inferior, superior), atunci orice subșir al său este <i>mărginit</i> (inferior, superior).</li>\
                  <li class="list-group-item">Dacă șirul are limita <i>l</i>, atunci orice subșir al său are limita <i>l</i>.</li>\
                  <li class="list-group-item">Dacă un șir are un subșir divergent sau are două subșiruri cu limite diferite, atunci șirul este divergent, în ultimul caz <i>neavând limită</i>.</li>\
                </ul>',
                '<h2> Criterii de convergență </h2> \
                <p> Dacă un șir este <i>convergent</i>, atunci este <i>mărginit</i>.</p> \
                <ul class="list-group"> \
                    Fie șirul (a<sub>n</sub>)<sub>n</sub>. \
                    <li class="list-group-item"> \
                        <h4> <i>Criteriul majorării</i> </h4>\
                        Dacă există șirul (b<sub>n</sub>)<sub>n</sub> care tinde la 0 și |a<sub>n</sub> - l| ≤ b<sub>n</sub>, atunci <i>a<sub>n</sub>→l</i>.\
                    </li>\
                    <li class="list-group-item">\
                        <h4> <i>Weierstrass</i> <h4>\
                        Dacă (x<sub>n</sub>) <sub>n</sub> este monoton și mărginit, atunci este convergent.    \
                    </li> \
                </ul>',
                ' <h2>Trecerea la limită în egalități și inegalități</h2>\
                <p> <span class ="glyphicon glyphicon-pencil"></span> Fie (a<sub>n</sub>)<sub>n</sub> și (a<sub>n</sub>)<sub>n</sub> două șiruri convergente.</p>\
                    Dacă a<sub>n</sub> = b<sub>n</sub>m oricare ar fi n ≥ n<sub>0</sub>, atunci lim a<sub>n</sub> = lim b<sub>n</sub>.\
                    Dacă a<sub>n</sub> ≥ b<sub>n</sub>m oricare ar fi n ≥ n<sub>0</sub>, atunci lim a<sub>n</sub> ≥ lim b<sub>n</sub>.\
                <h4><i>Criteriul cleștelui</i></h4>\
                <img src ="/images/cleste.png" class ="img-content"/> <br />\
                    Fie (x<sub>n</sub>)<sub>n</sub>, (y<sub>n</sub>)<sub>n</sub>, (z<sub>n</sub>)<sub>n</sub> astfel încât x<sub>n</sub> ≤ y<sub>n</sub> ≤ z<sub>n</sub> și lim x<sub>n</sub> = lim y<sub>n</sub> = l.\
                    Atunci, (y<sub>n</sub>)<sub>n</sub> este convergent și lim y<sub>n</sub> = l.',
                '3']
];

var exemple = [
    [
        ' <h5> Exemple </h5> \
                <ol>\
                    <li>[1, 3] </li>\
                    <li>(1, 3) </li>\
                    <li>(4, 5) </li>\
                </ol>',
        ' <h5> Exemple </h5>\
                <ol>\
                    <li> Mulțimea numerelor naturale este mărginită inferior (0 e minorant).</li>\
                    <li> Dacă A = {1, 2, 3, 4, 5} , atunci <i> min A </i> = 1, iar <i> max A </i> = 5.</li>\
                    <li> Dacă A = {n<sup>2</sup> | n ∈ <b>N*</b>}, atunci <i> min A </i> = 1, iar <i> max A </i> nu există. </li>\
                </ol>',
         ' <h5> Exemple </h5>\
                <ol>\
                    <li> [0, 3) este vecinătate a numărului 1. </li>\
                    <li> (-2, +∞) este vecinătate a lui +∞. </li>\
                    <li> (-∞, -3) U {4} este vecinătate a lui -∞. </li>\
                </ol>'

    ],
    [ ' <h5> Exemple </h5>\
                   <p> Șirul lui Fibonacci: 1 1 2 3 5 8 13 ... are o recurență de ordinul 2: f<sub>n</sub> = f<sub>n-1</sub> + f<sub>n-2</sub>. </p>\
                   <img src = "/images/fibo.png" style = "height: 50px;"/>\
               ',
        ' <h5> Exemple </h5>\
            <img src = "/images/limsir2.png" /> \
        ',
        ' <h5> Exemple </h5>\
            <ol> \
            <li> Șirul <i> 2, 4, 6, 8, ... </i> este subșir al șirului <i> 1, 2, 3, 4, 5, 6, 7, 8, ... </i>  </li> \
            <li> Șirul <i> 1, 3, 1, 3, 1, 3 </i> nu are limită deoarece subșirul termenilor de rang par tinde la 3, iar cel al termenilor de rang impar tinde la 1. </i>\
        ',
        ' <h5> Exemple </h5>\
            Șirul cu termenul general a<sub>n</sub> = (-1)<sup>k</sup> este convergent. \
        ',
          'TRECERE LA INEGALITATI - TODO',
        ':)'
    ]
];

var lmax = 12;

citatRandom = function () {
    var x = Math.floor(Math.random() * nrc);
    document.getElementById("c").innerHTML = citate[x];
    return x;
}
curent = 1;
nav = function (x) {
    if (x != curent) {
        document.getElementById("m" + String(x)).setAttribute("class", "active");
        document.getElementById("m" + String(curent)).removeAttribute("class");
        curent = x;
        var l = leftpanel[x - 1].length;
        for (var i = 0; i < lmax; i++) document.getElementById("l" + String(i + 1)).setAttribute("style", "display: none");
        for (var i = 0; i < l; i++) {
            document.getElementById("l" + String(i + 1)).setAttribute("style", "display: block");
            document.getElementById("l" + String(i + 1)).innerHTML = leftpanel[x - 1][i];
        }
        document.getElementById("content").innerHTML = ":)";

    }

    citatRandom();

};
lectie = function (y) {
    document.getElementById("content").innerHTML = lectii[curent - 1][y - 1];
    document.getElementById("e1").innerHTML = exemple[curent - 1][y - 1];
}

var height = [130, 100]; 
getExemplu = function (x) {
    document.getElementById("e" + String(x)).setAttribute("style", "height:" + String(height[x - 1]) + "px;");
    document.getElementById("e" + String(x)).setAttribute("onclick", "hideExemplu (" + String (x) + ")");
}
hideExemplu = function (x) {
    document.getElementById("e" + String(x)).setAttribute("style", "height: 30px;");
    document.getElementById("e" + String(x)).setAttribute("onclick", "getExemplu (" + String(x) + ")");

}