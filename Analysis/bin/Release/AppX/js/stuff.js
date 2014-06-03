/// <reference group="Dedicated Worker" />

onmessage = function (event) {

}

var nrc = 7;
var citate = ["Cand legile matematicii se refera la realitate, atunci ele nu sunt sigure. Daca sunt sigure, nu se refera la realitate. - Albert Einstein",
                "Matematica va fi limba latină a viitorului, obligatorie pentru toți oamenii de știință. Tocmai pentru că matematica permite accelerarea maximă a circulației ideilor științifice. - Grigore Moisil",
                "Invatand matematica, înveti sa gandesti. - Grigore Moisil",
                "Matematica este regina stiintelor - Carl Friedrich Gauss",
                "Esenta matematicii nu este aceea de a face lucrurile mai complicate, dar de a face lucrurile complicate mai simple. - S. Gudder",
                "Matematica este o limbă şi o ştiinţă. - Lucian Blaga",
                "Matematica, ştiinţă zisă exactă!? - Grigore Moisil"];

citatRandom = function () {
    var x = Math.floor(Math.random() * nrc);
    document.getElementById("c").innerHTML = citate[x];
    return x;
}
citatRandom();
