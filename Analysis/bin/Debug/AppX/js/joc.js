//întrebări
var nrq = 10;

var intrebari = new Array();


var scor = 0, nivel = 0, q = 0, nq = 0;;
var lifec = 100, lifee = 100;
var time;


var end = function () {
    time = (Date.now() - time) / 1000;
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

}

var puneIntrebare = function (q) {
    intrebari[q].pusa = true;
    document.getElementById("query").innerHTML = intrebari[q].intrebare;
    document.getElementById("a1").innerHTML = intrebari[q].raspuns[0];
    document.getElementById("a2").innerHTML = intrebari[q].raspuns[1];
}


choice = function (x) {
    console.log(intrebari[q].raspunsCorect);
    if (String(x) == intrebari[q].raspunsCorect) {
        //dacă răspunsul este corect
        document.getElementById('ok').play(); //dau play la sunetul corespunzător răspunsului corect
        scor = scor + 20; //adaug puncte la scor
        lifee -= 20; //adversarul este lovit
        document.getElementById("enemy").setAttribute("value", lifee);
    }
    else {
        document.getElementById('notOk').play(); //dau play la sunetul corespunzător răspunsului corect
        lifec -= 20; //robotul este lovit
        if (lifec <= 0) end();
        document.getElementById("character").setAttribute("value", lifec);
    }
    document.getElementById("scor").innerHTML = "Scor <br />" + String(scor); //update la scor
    if (lifee && lifec) { //dacă nu s-a terminat nivelul și utilizatorul nu a pierdut
        q = Math.floor(Math.random() * intrebari.length)
        while (intrebari[q].pusa == 1) q = Math.floor(Math.random() * intrebari.length);
        nq++;
        puneIntrebare(q);
    }
    if (!lifee) {
        document.getElementById("adv").setAttribute("style", "animation: lost; animation-duration: 2s;"); //adversarul a pierdut
        if (nivel != 5) {
            //dacă nu am ajuns la ultimul nivel, resetez unele variabile și creez o scenă nouă
            nivel++;
            newScene();
            document.getElementById("adv").setAttribute("style", "animation: opacitate; animation-duration: 2s;");
        }
        else {
            end(); //utilizatorul a câștigat jocul
            updateScor(scor / time);
        }
    }
    if (!lifec) {
        end(); //utilizatorul a pierdut jocul
        updateScor(scor * 1000 / time);
    }
}


var nrb = 11, nra = 6;

newScene = function () {
    intrebari = [];
    WinJS.xhr({ url: "data/Joc" + String(nivel + 1) + ".txt" }).then(function (xhr) {
        var items = JSON.parse(xhr.responseText);
        items.forEach(function (item) {
            intrebari.push(item);
        });
        document.getElementById("enemy").setAttribute("value", "100");
        lifee = 100; //viața adversarului este 100
        //background nou
        var b = Math.floor(Math.random() * nrb); //aleg aleator un nou fundal
        var bg = "'" + '/images/bg/' + String(b + 1) + '.png' + "'";
        document.getElementById("combat").setAttribute("style", "background-image: url(" + bg + "); display: block;");
        //adversar nou
        //var a = Math.floor(Math.random() * nra) + 1;
        document.getElementById("adv").innerHTML = '<img src = "/images/adversari/' + String(nivel + 1) + '.png" class = "personaj-joc" style = "margin-right: 150px;"/>';
        q = 0;
        puneIntrebare(0);
    });
}


startJoc = function () {
    newScene();
    
    time = Date.now();

    scor = 0; //setez scorul
    nivel = 0; //setez nivelul
    lifec = 100; //setez viața robotului
    lifee = 100; //setez viața adversarului
    
    document.getElementById("character").setAttribute("value", lifec);
    document.getElementById("enemy").setAttribute("value", lifee);
    document.getElementById("scor").setAttribute("style", "display: block;");
    document.getElementById("stopjoc").setAttribute("style", "display: none;");
    document.getElementById("scor").innerHTML = "Scor <br />" + String(scor);
    document.getElementById("startjoc").setAttribute("style", "display: none;");
    
    activegame = 1;
}

