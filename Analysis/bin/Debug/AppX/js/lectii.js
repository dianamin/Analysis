var lectii = [
    ['<!-- Numere reale -->   <h2> Numere reale </h2> <img src = "/images/axa.png" class = "img-content" style = "width: 200px;"/> <br /> \
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
            </table>\
                <br /> <center> <img src = "/images/g2.jpg" class = "disappear" />  <img src = "/images/g3.jpg" class = "disappear" />\
                <br /> Universul este <i>infinit</i>.</center> <br /> \
             <span class ="glyphicon glyphicon-pencil"></span> Simbolul ∞, denumit <i>infinit</i>, se referă la o valoare nelimitată - „mai mare decât cel mai mare lucru la care te poți gândi”. <br /> <br />',
            '<h2>Submulțimi mărginite ale lui ℝ </h2>\
            <p> <span class ="glyphicon glyphicon-pencil"></span> a ∈ <b>R</b> se numește <i>majorant</i> pentru mulțimea A dacă ∀ x ∈ A avem x ≤ a. <!-- <img src = "/images/max.png" class = "img-content"/> --> </p>\
                <center> <img src = "/images/majorant.png" class = "img-med2" /> </center> \
            <p> <span class ="glyphicon glyphicon-pencil"></span> O mulțime A care are cel puțin un majorant se numește <i> mărginită superior</i>. <!-- <img src = "/images/min.png" class = "img-content"/> --> </p>\
                <center> <img src = "/images/majorant.png" class = "img-med2" /> </center> \
            <p> <span class ="glyphicon glyphicon-pencil"></span> a ∈ <b>R</b> se numește <i>minorant</i> pentru mulțimea A dacă ∀ x ∈ A avem x ≥ a. </p>\
            <p> <span class ="glyphicon glyphicon-pencil"></span> O mulțime A care are cel puțin un minorant se numește <i> mărginită inferior</i>. </p>\
            <p> <span class ="glyphicon glyphicon-pencil"></span> O mulțime <i> mărginită </i> este mărginită atât superior, cât și inferior. <img src = "/images/marginit.png" class = "img-content"/></p>\
            <h2> Axioma lui Cantor </h2>\
            <p> Orice mulțime de numere reale mărginită superior admite un cel mai mic majorant. </p>\
            <table class ="table" cellspacing = "5px">\
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
                <img src = "/images/case.png" class = "img-content" id = "vecinatati"/>',
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
                <center> <img class = "img-med2" src = "/images/limsir3.png" /> </center> <br /> \
                <div class = "alert alert-success"> <p> <span class ="glyphicon glyphicon-pencil"></span> Ideea de limită poate fi asemanată cu linia orizontului: pământul și cerul tind sa se atingă:</p> <center> <img class = "img-med" src = "/images/orizont.png" /> </center> </div> <br /> \
                <p><span class ="glyphicon glyphicon-pencil"></span> Un șir se numește <i>convergent</i> dacă are limita finită. Altfel, se numește <i>divergent</i>. </p>\
                <div class="alert alert-info"> într-un restaurant, intră o infinitate de matematicieni. Primul cere un pahar de suc. Al doilea, cere o jumătate. Al treilea, un sfert și tot așa. Chelnerul le spune sa lase glumele și le aduce două pahare. \
                <br /> <center> <img src ="/images/limsir.png" id = "glasses"  class = "img-med2" /> </center> </div>\
                <h2> Notații <img src = "/images/caiet.png" class = "img-content" style = "display: inline-block;"/> </h2> \
                 <center> <img src = "/images/i1.png" class = "img-content" /> <img src = "/images/i2.png" class = "img-content" />  </center>  \
                <div class="alert alert-info" role="alert">Prima notație se citește „Limita când n tinde la infinit din a<sub>n</sub> este egală cu l.”, iar a doua „Șirul a<sub>n</sub> tinde la l, când n tinde la infinit”. Sunt echivalente.</div>',
                '<h2>Subșir al unui șir dat</h2>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Fie (a<sub>n</sub>)<sub>n≥p</sub> un șir dat și (k<sub>n</sub>)<sub>n≥0</sub> un șir strict crescător de numere naturale. Șirul (a<sub>k<sub>n</sub></sub>)<sub>n≥0</sub> se numește <i>subșir</i> al șirului (a<sub>n</sub>)<sub>n≥p</sub>.</p>\
                <img src ="images/subsequence.png" class ="img-content smaller" />\
                <ul class="list-group">\
                  <li class="list-group-item">Dacă un șir este monoton, atunci orice subșir al său este <i>monoton</i>.</li>\
                  <li class="list-group-item">Dacă un șir este mărginit (inferior, superior), atunci orice subșir al său este <i>mărginit</i> (inferior, superior).</li>\
                  <li class="list-group-item">Dacă șirul are limita <i>l</i>, atunci orice subșir al său are limita <i>l</i>.</li>\
                  <li class="list-group-item">Dacă un șir are un subșir divergent sau are două subșiruri cu limite diferite, atunci șirul este divergent, în ultimul caz <i>neavând limită</i>.</li>\
                </ul>',
                '<h2> Criterii de convergență </h2> \
                <p class = "alert alert-success"> Dacă un șir este <i>convergent</i>, atunci este <i>mărginit</i>.</p> \
                <p class = "alert alert-danger"> Reciproca nu este întotdeauna adevarată! </p> \
                <ul class="list-group"> \
                    Fie șirul (a<sub>n</sub>)<sub>n</sub>. \
                    <li class="list-group-item"> \
                        <h4> <i>Criteriul majorării</i> </h4>\
                        Dacă există șirul (b<sub>n</sub>)<sub>n</sub> care tinde la 0 și |a<sub>n</sub> - l| ≤ b<sub>n</sub>, atunci <i>a<sub>n</sub>→l</i>.\
                    </li>\
                    <li class="list-group-item">\
                        <h4> <i>Weierstrass</i> </h4>\
                        Dacă (x<sub>n</sub>) <sub>n</sub> este monoton și mărginit, atunci este convergent.    \
                    </li> \
                    <li class = "list-group-item"> \
                    <h4> <i> Lema lui Cesaro </i> </h4>\
                        Orice șir mărginit de numere reale conține un subșir convergent.\
                    </li>    \
                </ul>',
                ' <h2>Trecerea la limită în egalități și inegalități</h2>\
                <p> <span class ="glyphicon glyphicon-pencil"></span> Fie (a<sub>n</sub>)<sub>n</sub> și (a<sub>n</sub>)<sub>n</sub> două șiruri convergente.</p>\
                    Dacă a<sub>n</sub> = b<sub>n</sub> oricare ar fi n ≥ n<sub>0</sub>, atunci lim a<sub>n</sub> = lim b<sub>n</sub>.\
                    Dacă a<sub>n</sub> ≥ b<sub>n</sub> oricare ar fi n ≥ n<sub>0</sub>, atunci lim a<sub>n</sub> ≥ lim b<sub>n</sub>.\
                <h4><i>Criteriul cleștelui</i></h4>\
                <img src ="/images/cleste.png" class ="img-content"/> <br />\
                    Fie (x<sub>n</sub>)<sub>n</sub>, (y<sub>n</sub>)<sub>n</sub>, (z<sub>n</sub>)<sub>n</sub> astfel încât x<sub>n</sub> ≤ y<sub>n</sub> ≤ z<sub>n</sub> și lim x<sub>n</sub> = lim y<sub>n</sub> = l.\
                    Atunci, (y<sub>n</sub>)<sub>n</sub> este convergent și lim y<sub>n</sub> = l.',
                 ' <h2>Nedeterminări</h2>\
                Fie x ≠ 0.\
                <table class ="table">\
                    <tbody>\
                        <tr><td>∞ + x</td><td>∞</td></tr>\
                        <tr><td>∞ * x</td><td>+∞ dacă x > 0, altfel -∞</td></tr>\
                        <tr><td>-∞ * x</td><td>+∞ dacă x < 0, altfel -∞</td></tr>\
                        <tr><td>∞ * 0</td><td>nedeterminare</td></tr>\
                        <tr><td>-∞ * 0</td><td>nedeterminare</td></tr>\
                        <tr><td>∞ - ∞</td><td>nedeterminare</td></tr>\
                        <tr><td>∞ + ∞</td><td>∞</td></tr>\
                        <tr><td>-∞ - ∞</td><td>-∞</td></tr>\
                        <tr><td>x<sup>∞</sup></td><td>∞, dacă x > 0 și x ≠ 1 sau -∞, dacă x < 0 și x ≠ -1</td></tr>\
                        <tr><td>x<sup>-∞</sup></td><td>0</td></tr>\
                        <tr><td>∞<sup>x</sup></td><td>∞ dacă x > 0, 0 altfel.</td></tr>\
                        <tr><td>0<sup>0</sup></td><td>nedeterminare</td></tr>\
                        <tr><td>1<sup>∞</sup></td><td>nedeterminare</td></tr>\
                        <tr><td>0<sup>∞</sup></td><td>nedeterminare</td></tr>\
                        <tr><td>∞<sup>0</sup></td><td>nedeterminare</td></tr>\
                        <tr><td>∞/x</td><td>∞</td></tr>\
                        <tr><td>x/∞</td><td>0</td></tr>\
                        <tr><td>0/0</td><td>nedeterminare</td></tr>\
                        <tr><td>x/0</td><td>+∞ sau -∞</td></tr>\
                        <tr><td>∞/∞</td><td>nedeterminare</td></tr>\
                    </tbody>\
                </table>\
                    <h3><i>Lema lui Cesaro-Stoltz</i></h3>    \
                    <img src = "/images/sc.png" class = "img-content" style = "height: 80px;"/> \
                     <p>Fie șirurile (a<sub>n</sub>)<sub>n</sub> și (b<sub>n</sub>)<sub>n</sub>. </p>\
                     <p> Dacă șirul (b<sub>n</sub>)<sub>n</sub>) este strict crescător și are termeni nenuli, sau dacă lim a<sub>n</sub> = lim b<sub>n</sub> = 0 și (b<sub>n</sub>) strict descrescător:</p>\
',
                ' <h2> Numărul <i>e</i> </h2>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Șirul <i>(e<sub>n</sub>)<sub>n≥1</sub></i> este monoton, strict crescător și mărginit. (convergent)</p>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Șirul <i>(E<sub>n</sub>)<sub>n≥0</sub></i> este monoton, strict crescător și mărginit. (convergent)</p>\
                <img src="/images/en.png" class ="img-content smaller"/>\
                <img src="/images/en2.png" class ="img-content smaller"/>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Limita șirului Șirul <i>(e<sub>n</sub>)<sub>n</sub></i> se notează cu litera <i>e</i> (după inițiala numelui lui Euler). </p>\
                <p> <span class ="glyphicon glyphicon-pencil"></span> Numărul lui Euler, e, este aproximativ egal cu <i>2.71828</i>.</p>\
                <img src ="/images/lime.png" class ="img-content smaller"/>\
                <p><span class ="glyphicon glyphicon-pencil"></span> <i>e</i> este și limita șirului (E<sub>n</sub>)<sub>n</sub>.</p>',
                '<h2>Limite remarcabile</h2>\
                <img class = "robot" src = "/images/robot.png" /> Pune cursorul pe valoarea limitei pentru a o evidenția.\
                <table class ="table table-striped">\
                    <thead>\
                        <th>Limită</th> <th>Valoare</th>\
                    </thead>\
                    <tbody>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limite/l1.png" /> </td> <td> <p class ="limita-rez"> e </p></td>\
                        </tr>\
                        <!--<tr>\
                            <td> <img class="limita-img" src ="/images/limite/l2.png" /> </td> <td> <p class ="limita-rez"> e </p></td>\
                        </tr>-->\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limite/l3.png" /> </td> <td> <p class ="limita-rez"> e </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limite/l4.png" /> </td> <td> <p class ="limita-rez"> e </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limite/l5.png" /> </td> <td> <p class ="limita-rez"> 1 </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limite/l6.png" /> </td> <td> <p class ="limita-rez"> ln a </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limite/l7.png" /> </td> <td> <p class ="limita-rez"> 1 </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limite/l8.png" /> </td> <td> <p class ="limita-rez"> 1 </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limite/l9.png" /> </td> <td> <p class ="limita-rez"> 1 </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limite/l10.png" /> </td> <td> <p class ="limita-rez"> 1 </p></td>\
                        </tr>\
                    </tbody>\
                </table>'],
    [
        '<h2>Limite de funcții</h2>\
                <p> Fie <i>f : D ⊂ ℝ → ℝ.</i> \
                    Analizăm pentru x suficient de apropiat de x<sub>0</sub> valoriele funcției, care se apropie, oricât de mult de un anumit punct l. \
                    Atunci l este <i>limita funcției în punctul x</i>.</p>\
                <img src ="/images/limf.png" class ="img-med2"/>\
                <p>Putem calcula limite doar în <i>puncte de acumulare</i>. Un punct x<sub>0</sub> se numește punct de acumulare din mulțimea D dacă oricare ar fi vecinătatea V a lui x<sub>0</sub> avem\
                    (V\\{x0}) ∩ ≠ ∅. Nu este neapărat un element al mulțimii. Un punct ce aparține mulțimii D care nu este punct de acumulare se numește <i>punct izolat</i>.\
                Mulțimea punctelor de acumulare se va nota cu D\'.</p>\
                <p><i>Teoremă</i> - Punctul a este punct de acumulare al mulțimii D ⊂ ℝ dacă și numai dacă există un șir (x<sub>n</sub>)<sub>n</sub>, x<sub>n</sub> ∈ D \\ {a}, astfel încât lim x<sub>n</sub> = a</p>',
        ' <h2>Limita unei funcții într-un punct</h2>\
                <p> Fie f : D ⊂ ℝ → ℝ și x<sub>0</sub> ∈ D\'. Punctul l este <i>limita funcției în x<sub>0</sub> </i> dacă ∀ vecinătate V a lui l, ∃ vecinătatea U a lui x<sub>0</sub>,\
                    ∀ x ∈ D ∩ U, x ≠ x <sub>0</sub>, avem f(x) ∈ V. </p>\
                <p>Limita funcției în punctul x<sub>0</sub> se notează <img src ="/images/limf2.png" class ="img-content" /> și se citește „limită când x tinde la x<sub>0</sub> din f(x).”</p>\
                <h3><i>Criteriul lui Heine</i></h3>\
                <p>Funcția f : D ⊂ ℝ → ℝ are limita l în punctul a ∈ D\' dacă și numai dacă pentru orice șir (x<sub>n</sub>)<sub>n</sub>, x<sub>n</sub> ∈ D \\ {a}, x<sub>n</sub> → a, avem f(x<sub>n</sub>) → l. </p>',
        '<h2>Limite laterale</h2>\
                <p>Fie f : D ⊂ ℝ → ℝ și x<sub>0</sub> un punct de acumulare al mulțimii D<sub>1</sub> = (-∞, x<sub>0</sub>) ∩ D sau D<sub>2</sub> = (x<sub>0</sub>, ∞) ∩ D.</p>\
                <p><span class ="glyphicon glyphicon-pencil"></span>\
                    Spunem că f are <i>limită la stânga în x<sub>0</sub></i> dacă există l<sub>s</sub> astfel încât ∀ vecinătate V a lui l<sub>s</sub>, ∃ vecinătatea U a lui x<sub>0</sub>,\
                    ∀ x ∈ D<sub>1</sub> ∩ U, x ≠ x<sub>0</sub>, avem f(x) ∈ V.<br />\
                    Notăm l<sub>s</sub> = <img src = "/images/ls.png" class ="img-content"/> limită din f(x) când x tinde la x<sub>0</sub> prin valori mai mici decât x<sub>0</sub>.\
                </p>\
                <p><span class ="glyphicon glyphicon-pencil"></span>\
                    Spunem că f are <i>limită la dreapta în x<sub>0</sub></i> dacă există l<sub>d</sub> astfel încât ∀ vecinătate V a lui l<sub>d</sub>, ∃ vecinătatea U a lui x<sub>0</sub>,\
                    ∀ x ∈ D<sub>2</sub> ∩ U, x ≠ x<sub>0</sub>, avem f(x) ∈ V.<br />\
                    Notăm l<sub>d</sub> = <img src = "/images/ld.png" class ="img-content"/> limită din f(x) când x tinde la x<sub>0</sub> prin valori mai mari decât x<sub>0</sub>.\
                </p>\
                  <p><span class ="glyphicon glyphicon-pencil"></span> Dacă există l<sub>s</sub> și l<sub>d</sub>, atunci funcția are limită în punctul respectiv.',
            '<h2>Criterii de existență</h2>\
                <ul class="list-group">\
                  <li class="list-group-item">\
                      <h4><i>Criteriul majorării</i></h4>\
                      <p>Fie f,g : D ⊂ ℝ → ℝ, x<sub>0</sub> ∈ D\' astfel încât <img src ="/images/limg.png" class ="img-content" /> = 0.  </p>\
                      <p>Dacă există o vecinătate V a lui x<sub>0</sub> și l ∈ ℝ astfel încât |f(x) - l| ≤ g(x) pentru orice V ∩ D, x ≠ x<sub>0</sub>, atunci <img src ="/images/limf2.png" class ="img-content" /> = l. </p>\
                  </li>\
                  <li class="list-group-item">\
                      <h4><i>Criteriul majorării la +∞</i></h4>\
                      <p>Fie f,g : D ⊂ ℝ → ℝ, x<sub>0</sub> ∈ D\' astfel încât <img src ="/images/limg.png" class ="img-content" /> = ∞.  </p>\
                      <p>Dacă există o vecinătate V a lui x<sub>0</sub> și l ∈ ℝ astfel încât f(x) ≥ g(x) pentru orice V ∩ D, x ≠ x<sub>0</sub>, atunci <img src ="/images/limf2.png" class ="img-content" /> = ∞. </p>\
                  </li>\
                  <li class="list-group-item">\
                      <h4><i>Criteriul majorării la -∞</i></h4>\
                      <p>Fie f,g : D ⊂ ℝ → ℝ, x<sub>0</sub> ∈ D\' astfel încât <img src ="/images/limg.png" class ="img-content" /> = -∞.  </p>\
                      <p>Dacă există o vecinătate V a lui x<sub>0</sub> și l ∈ ℝ astfel încât f(x) ≤ g(x) pentru orice V ∩ D, x ≠ x<sub>0</sub>, atunci <img src ="/images/limf2.png" class ="img-content" /> = -∞. </p>\
                  </li>\
                  <li class="list-group-item">\
                      <h4><i>Criteriul cleștelui</i></h4>\
                      <p>Fie f,g, h : D ⊂ ℝ → ℝ, x<sub>0</sub> ∈ D\' astfel încât <img src ="/images/limg.png" class ="img-content" /> = <img src ="/images/limh.png" class ="img-content" /> = l.  </p>\
                      <p>Dacă există o vecinătate V a lui x<sub>0</sub> astfel încât g(x) ≤ f(x) ≤ h(x), x ≠ x<sub>0</sub>, atunci <img src ="/images/limf2.png" class ="img-content" /> = l. </p>\
                  </li>\
                </ul>',
          '<h2>Limite remarcabile</h2>\
                <img class = "robot" src = "/images/robot.png" /> Pune cursorul pe valoarea limitei pentru a o evidenția.\
                <table class ="table table-striped">\
                    <thead>\
                        <th>Limită</th> <th>Valoare</th>\
                    </thead>\
                    <tbody>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limitef/l1.png" /> </td> <td> <p class ="limita-rez"> 1 </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limitef/l2.png" /> </td> <td> <p class ="limita-rez"> 1 </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limitef/l3.png" /> </td> <td> <p class ="limita-rez"> 1 </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limitef/l4.png" /> </td> <td> <p class ="limita-rez"> 1 </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limitef/l5.png" /> </td> <td> <p class ="limita-rez"> e </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limitef/l6.png" /> </td> <td> <p class ="limita-rez"> 1 </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limitef/l7.png" /> </td> <td> <p class ="limita-rez"> ln a </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limitef/l8.png" /> </td> <td> <p class ="limita-rez"> 0 </p></td>\
                        </tr>\
                        <tr>\
                            <td> <img class="limita-img" src ="/images/limitef/l9.png" /> </td> <td> <p class ="limita-rez"> 0 </p></td>\
                        </tr>\
                    </tbody>\
                </table>'
    ],
    [
        '<h2>Continuitate</h2>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Intuituv, o funcție este continuă dacă graficul său poate fi reprezentat printr-o „linie curbă” neîntreruptă.</p>\
                <p><span class ="glyphicon glyphicon-pencil"></span> O funcție f : D ⊂ ℝ → ℝ este <i>continuă</i> în x<sub>0</sub> dacă ∀ V din vecinătățile lui f(x<sub>0</sub>)\
                    există U din vecinătățile lui x<sub>0</sub> astfel încât ∀ x ∈ U ∩ D rezultă f(x) ∈ V.</p>\
                <div class = "row">\
                    <div class = "col-md-6">Funcție continuă <br />  <img src ="/images/fcont.png" class ="img-med" /> </div> \
                    <div class = "col-md-6">Funcție care nu e continuă <br /> </td><td><img src ="/images/fnecont.png" class ="img-med" /> </div>\
                </div>\
                </table>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Dacă funcția este continuă într-un punct x<sub>0</sub>, atunci x<sub>0</sub> este <i>punct de continuitate</i>.</p>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Într-un punct izolat al domeniului de definiție, funcția este continuă.</p>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Funcția f este continuă în x ⇔ limita funcției în x este egală cu f(x).</p> \
                <p><span class ="glyphicon glyphicon-pencil"></span> Funcțiile <i>elementare</i> sunt continue. </p>'
                ,
          ' <h2>Continuitatea laterală</h2>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Fie f : D ⊂ ℝ → ℝ și x<sub>0</sub>, punct de acumulare în care există ambele limite laterale.</p>\
                <p>Funcția f este <i>continuă la stânga</i> în x<sub>0</sub> dacă <img src ="/images/ls.png" class ="img-content" /> = f(x<sub>0</sub>).</p>\
                <p>Funcția f este <i>continuă la dreapta</i> în x<sub>0</sub> dacă <img src ="/images/ld.png" class ="img-content" /> = f(x<sub>0</sub>).</p>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Funcția f este continuă în x<sub>0</sub> dacă și numai dacă este continuă la stânga și la dreapta în x<sub>0</sub>.</p>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Atunci când limitele laterale ale funcției în x<sub>0</sub> există, sunt finite și diferite, se numește <i>discontinuitate de speța I</i>.\
                    Dacă limitele laterale sunt diferite și cel puțin una nu există sau este infinită, avem <i>discontinuitate de speța a II-a</i>.</p>',
          '<h2>Proprietăți ale funcțiilor continue definite pe un interval</h2>\
                <ul class="list-group">\
                    <li class="list-group-item">\
                        <h4><i>Proprietatea valorilor intermediare (Darboux)</i></h4>\
                        <p>O funcție are proprietatea că dacă oricare ar fi x<sub>1</sub> și x<sub>2</sub> din domeniul de definiție și oricare ar fi numărul real a între f(x<sub>1</sub>) și f(x<sub>2</sub>), există c în intervalul (x<sub>1</sub>, x<sub>2</sub>) astfel încât f(c) = a.</p>\
                        <p>Orice funcție continuă pe un interval are proprietatea valorilor intermediare.</p>\
                        <p>Dacă o funcție cu proprietatea Darboux nu atinge valoarea 0, atunci are semn constant.</p>\
                        <p>Dacă există a, b astfel încât f(a) * f(b) < 0, f continuă, atunci există c astfel încât f(c) = 0.</p>\
                        <p>Imaginea unei funcții continue definite pe un interval este tot un interval.</p>\
                    </li>\
                </ul>'
    ],
    [
        ' <h2>Derivata într-un punct</h2> \
                <p><span class ="glyphicon glyphicon-pencil"></span> Fie f : D ⊂ ℝ → ℝ și x<sub>0</sub> punct de acumulare al mulțimii D.</p>\
                <p>Funcția f este <i>derivabilă</i> în x<sub>0</sub> dacă raportul <img src ="/images/raport.png" class ="exp" /> are limită finită în punctul x<sub>0</sub>.</p>\
                <p>În acest caz, limita raportului se numește derivata funcției în x<sub>0</sub> și se notează cu f\'(x<sub>0</sub>).</p>\
                <img src="/images/deriv.png" class ="exp smaller"/>\
                <p>Derivatele au doua aspecte:\
                    <ul>\
                        <li>Unul <i>calitativ</i>: dacă funcția este sau nu derivabilă într-un punct.</li>\
                        <li>Unul <i>cantitativ</i>: numărul f\'(x), dacă există.</li>\
                    </ul>\
                </p>\
                <p>Dacă f este derivabilă în x<sub>0</sub>, atunci graficul său admite tangentă. Derivata este <i>panta tangentei</i>, ecuația tangentei fiind <i>y - f(x<sub>0</sub>) = f\'(x<sub>0</sub>)(x - x<sub>0</sub>)</i>.</p>',
           ' <h2>Derivabilitate și continuitate</h2>\
                <img src ="/images/diagrama.png" class ="img-content img-med" />\
                <p>Dacă funcția f : D ⊂ ℝ → ℝ este derivabilă în punctul de acumulare x<sub>0</sub>, atunci f este continuă în x <sub>0</sub>.</p>',
           '<h2>Derivate laterale</h2>\
                <p>Fie f : D ⊂ ℝ → ℝ și x<sub>0</sub> un punct de acumulare al domeniului D.</p>\
                <p><span class ="glyphicon glyphicon-pencil"></span>Funcția are <i>derivată la stânga</i> în punctul x<sub>0</sub> dacă există \
                    <img src ="/images/ds.png" class ="exp smaller" /> în <img src ="/images/R.png" class ="img-content" />.</p>\
                <p><span class ="glyphicon glyphicon-pencil"></span>Funcția are <i>derivată la dreapta</i> în punctul x<sub>0</sub> dacă există \
                    <img src ="/images/dd.png" class ="exp smaller" /> în <img src ="/images/R.png" class ="img-content" />. </p>  \
                <p>Derivata la stânga se notează <i>f\'<sub>s</sub>(x)</i>, iar derivata la dreapta <i>f\'<sub>d</sub>(x)</i>.</p>\
                <ul class="list-group">\
                    <li class="list-group-item">Dacă derivatele laterale ale lui x<sub>0</sub> sunt egale și finite, atunci funcția este derivabilă în x<sub>0</sub> și graficul are tangentă în punctul respectiv. <img src ="/images/caz1.png" class ="img-content" /></li>\
                    <li class="list-group-item">Dacă derivatele laterale ale lui x<sub>0</sub> sunt egale și infinite, atunci funcția nu este derivabilă în x<sub>0</sub>, iar tangenta la grafic va fi dreapta de ecuație x = x<sub>0</sub>. <img src ="/images/caz2.png" class ="img-content" /></li>\
                    <li class="list-group-item">Dacă derivatele laterale ale lui x<sub>0</sub> sunt diferite și cel puțin una este finită, x<sub>0</sub> este punct unghiular, graficul admite două semitangente. <img src ="/images/caz3.png" class ="img-content" /></li>\
                    <li class="list-group-item">Dacă derivatele laterale ale lui x<sub>0</sub> sunt diferite și infinite, x<sub>0</sub> se numește punct de întoarcere, graficul admite o singură semitangentă. <img src ="/images/caz4.png" class ="img-content" /></li>\
                </ul>',
            '<h2>Derivatele funcțiilor elementare</h2>\
                <img class = "robot" src = "/images/robot.png" />\
                <table class ="table table-striped">\
                    <tr><th>Funcția</th><th>Derivata</th><th>Domeniul de derivabilitate</th></tr>\
                    <tbody class ="dt">\
                        <tr>\
                            <td><img src ="images/derivate/d1.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r1.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d2.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r2.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d3.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r3.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d4.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r4.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d5.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r5.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d6.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r6.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d7.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r7.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d6.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r6.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d6.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r6.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d7.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r7.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d8.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r8.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d9.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r9.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d10.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r10.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d11.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r11.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d12.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r12.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d13.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r13.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d14.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r14.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                        <tr>\
                            <td><img src ="images/derivate/d15.png" class ="d" /></td>\
                            <td><img src ="images/derivate/r15.png" class ="d" /></td>\
                            <td>ℝ</td>\
                        </tr>\
                    </tbody>\
                </table>',
            '<h2>Operații cu funcții derivabile</h2>\
                <ul class="list-group">\
                    <li class="list-group-item">\
                        <h4><i>Adunare</i></h4>\
                        <p>Dacă f, g : D → ℝ sunt funcții derivabile pe D, atunci f + g este derivabilă pe D.</p>\
                        <img src="/images/adunare.png" class ="img-content smaller" />\
                    </li>\
                    <li class="list-group-item">\
                        <h4><i>Înmulțire cu o constanta</i></h4>\
                        <p>Dacă f : D → ℝ este o funcție derivabilă pe D și λ ∈ ℝ*, atunci λf este derivabilă pe D.</p>\
                        <img src="/images/inmultirec.png" class ="img-content smaller" />\
                    </li>\
                    <li class="list-group-item">\
                        <h4><i>Înmulțire</i></h4>\
                        <p>Dacă f, g : D → ℝ sunt funcții derivabile pe D, atunci fg este derivabilă pe D.</p>\
                        <img src="/images/inmultire.png" class ="img-content smaller" />\
                    </li>\
                    <li class="list-group-item">\
                        <h4><i>Împărțire</i></h4>\
                        <p>Dacă f, g : D → ℝ sunt funcții derivabile pe D, g(x) ≠ 0, atunci f/g este derivabilă pe D.</p>\
                        <img src="/images/impartire.png" class ="img-content smaller" />\
                    </li>\
                    <li class="list-group-item">\
                        <h4><i>Compunere</i></h4>\
                        <p>Fie. f, g : D → ℝ. Dacă g este derivabilă în x, iar f este derivabilă în y = f(x), atunci f ∘ g este derivabilă în x.</p>\
                        <img src="/images/compunere.png" class ="img-content smaller" />\
                    </li>\
                </ul>',
            '<h2>Derivata funcției inverse</h2>\
                <p><img src ="/images/robot.png" class ="robot img-content"/> <br />Fie I, J ⊂ ℝ intervale și f : I → J o funcție bijectivă și continuă. Dacă f este derivabilă în x și f\'(x) ≠ 0, atunci funcția f<sup>-1</sup> : J → I este derivabilă în f(x) și (f<sup>-1</sup>)\'(f(x)) = <i>1 / f\'(x)</i>.  </p>',
            '<h2>Derivate de ordin superior</h2>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Fie f : D ⊂ ℝ → ℝ și x<sub>0</sub> punct de acumulare. Spunem că f este <i>derivabilă de n ori</i>\
                    în punctul x<sub>0</sub> dacă f este derivabilă de n - 1 ori într-o vecinătate a lui x<sub>0</sub>, iar derivata de ordin n - 1 este la rândul său derivabilă în x<sub>0</sub>.\
                    Dacă notăm f<sup>(n)</sup>(x<sub>0</sub>) derivata de ordin n în x<sub>0</sub>, reținem că <img src ="/images/nderiv.png" class ="img-content smaller" />.</p>\
                <p><span class ="glyphicon glyphicon-pencil"></span> Funcția f este <i>indefinit derivabilă</i> în x dacă este derivabilă de n ori oricare ar fi n ∈ ℕ.</p>',
            '<h2>Teoreme</h2>\
                <ul class="list-group">\
                    <li class="list-group-item">\
                        <h4><i>Teorema lui Fermat</i></h4>\
                        <p>Fie f : D ⊂ ℝ → ℝ și x<sub>0</sub> ∈ D.</p>\
                        <p>Spunem că x<sub>0</sub> este de <i>maxim (minim) local</i> al funcției dacă există o vecinătate V a lui x<sub>0</sub> astfel încât\
                            f(x) ≤ f(x<sub>0</sub>) (f(x) ≥ f(x<sub>0</sub>)) pentru orice x ∈ V ∩ D.</p>\
                        <p>Punctele de maxim și minim local se numesc și <i>puncte de extrem local</i>. Atunci când vecinătatea este chiar domeniul de definiție al funcției, x<sub>0</sub> se numește <i>punct de extrem global</i> (absolut).</p>\
                        <p><i>Dacă f este derivabilă în punctul de extrem local x<sub>0</sub>, atunci f\'(x<sub>0</sub>) = 0.</i></p>\
                        <img src ="/images/fermat.png" class ="img-content" />\
                    </li>\
                    <li class="list-group-item">\
                        <h4><i>Teorema lui Rolle</i></h4>\
                        <p>Fie f : D ⊂ ℝ → ℝ și a, b ∈ D, a < b. Dacă funcția f este continuă pe [a, b] și derivabilă pe (a, b) (<i>funcție Rolle</i>), atunci există cel puțin un punct c ∈ (a, b) astfel încât f\'(c) = 0.</p>\
                        <img src ="/images/rolle.png" class ="img-content" />\
                    </li>\
                    <li class="list-group-item">\
                        <h4><i>Șirul lui Rolle</i></h4>\
                        <p>Fie f : D ⊂ ℝ → ℝ o funcție derivabilă pe intervalul D. Între două rădăcini ale lui f se află cel puțin o rădăcină a derivatei, iar între două rădăcini ale derivatei se află cel mult o rădăcină a lui f.\
                           Șirul lui Rolle este un șir de semne: semnele funcției la capetele intervalului D și semnele funcției în punctele critice. La fiecare schimbare de semn, avem o soluție.</p>\
                        <ol>\
                                Algoritm\
                            <li>Determinăm domeniul de definiție și de derivabilitate.</li>\
                            <li>Derivăm funcția și determinăm rădăcinile derivatei: x<sub>1</sub>, x<sub>2</sub> etc.</li>\
                            <li>Calculăm f(x<sub>1</sub>), f(x<sub>2</sub>) etc și limitele la capetele intervalului.</li>\
                            <li>Numărul schimbărilor de semn este egal cu numărul rădăcinilor ecuației f(x) = 0.</li>\
                        </ol>\
                   </li>\
                    <li class="list-group-item">\
                        <h4><i>Teorema lui Lagrange</i></h4>\
                        <p>Dacă f : [a, b] → ℝ funcție Rolle, atunci există cel puțin un c ∈ (a, b) astfel încât <img src ="/images/lagrange.png" class ="exp" /></p>\
                        <ol>\
                            Consecințe\
                            <li>Dacă o funcție definită pe un interfal are derivata nulă, atunci este constantă.</li>\
                            <li>Fie h = f - g. Dacă h este derivabilă pe interval și h\'(x) = 0, atunci h este constantă, h = k. Deci f(x) = g(x) + k.</li>\
                            <li>Dacă f\' > 0 (< 0), atunci f este strict crescătoare (strict descrescătoare).</li>\
                            <li> Dacă f este derivabilă pe vecinătatea lui x<sub>0</sub>, continuă în x<sub>0</sub> și există limita <i>l</i> din derivata funcției când x tinde la x<sub>0</sub>, atunci f are derivată în x<sub>0</sub> și f\'(x<sub>0</sub>) = l.</li>\
                        </ol>\
                    </li>\
                </ul>',
            '<h2>Regulile lui l\'Hospital</h2>\
                <p>Fie f, g : (a, x<sub>0</sub>) → ℝ, x <sub>0</sub> ∈ ℝ ∪ {-∞ , ∞}.</p>\
                <ol>\
                    Condiții\
                    <li><img src ="/images/limg.png" class ="img-content" /> = ∞ sau -∞, sau <img src ="/images/limf2.png" class ="img-content" /> = 0 și <img src ="/images/limg.png" class ="img-content" /> = 0</li>\
                    <li>f și g sunt derivabile într-o vecinătate a lui x<sub>0</sub></li>\
                    <li>g\'(x) ≠ 0, pentru orice x dintr-o vecinătate a lui x<sub>0</sub></li>\
                    <li>există <img src ="/images/r2.png" class ="img-content"/> = l, l ∈ <img src ="/images/R.png" class ="img-content"/> </li>\
                </ol>\
                Atunci, există <img src ="/images/r1.png" class ="img-content"/> și <img src ="/images/r1.png" class ="img-content"/> = l.',
            '<h2>Rolul derivatei a doua în studiul funcțiilor</h2>\
                <p><span class ="glyphicon glyphicon-pencil"></span> O funcție f : I ⊂ ℝ → ℝ, I interval, se numește <i>convexă</i> pe I dacă oricare ar fi x<sub>1</sub>, x<sub>2</sub> ∈ I și oricare ar fi t ∈ [0, 1] avem:\
                <i>f((1 - t)x<sub>1</sub> + tx<sub>2</sub>) ≤ (1 - t)f(x<sub>1</sub>) + tf(x<sub>2</sub>)</i>.</p>\
            <p><span class ="glyphicon glyphicon-pencil"></span> O funcție f : I ⊂ ℝ → ℝ, I interval, se numește <i>concavă</i> pe I dacă oricare ar fi x<sub>1</sub>, x<sub>2</sub> ∈ I și oricare ar fi t ∈ [0, 1] avem:\
                <i>f((1 - t)x<sub>1</sub> + tx<sub>2</sub>) ≥ (1 - t)f(x<sub>1</sub>) + tf(x<sub>2</sub>)</i>.</p>\
            <p><span class ="glyphicon glyphicon-pencil"></span> Dacă <i>f\'\'(x) ≥ 0</i> ∀ x ∈ I, atunci f este convexă. Dacă <i>f\'\'(x) ≤ 0</i> ∀ x ∈ I, atunci f este concavă.</p>\
            <p><span class ="glyphicon glyphicon-pencil"></span> Un punct x se numește <i>punct de inflexiune</i> dacă funcția este continuă și are derivată în x și dacă funcția este convexă de o parte a lui x și concavă de cealaltă parte.</p>\
            <div class = "row">\
                <div class = "col-md-4"> Funcție convexă <br /> <img src="/images/convex.png" class="img-content" /> </div>\
                <div class = "col-md-4"> Funcție concavă <br /> <img src="/images/concav.png" class="img-content" /> </div>\
                <div class = "col-md-4"> Punct de inflexiune <br /> <img src="/images/inflexiune.png" class="img-content" /> </div>\
            </div>\
            <!--<table class ="table table-striped">\
                <thead><tr><th>Funcție convexă</th><th>Funcție concavă</th><th>Punct de inflexiune</th></tr></thead>\
                <tbody><tr>\
                    <td><img src="/images/convex.png" class="img-content" /></td>\
                    <td><img src="/images/concav.png" class="img-content" /></td>\
                    <td><img src="/images/inflexiune.png" class="img-content" /></td>\
                </tr></tbody>\
            </table>-->'
    ],
    [
        '<h2>Asimptote</h2>\
        <p><span class ="glyphicon glyphicon-pencil"></span> La o funcție nemărginită, se pune problema dacă ramurile graficului săul se apropie necontenit de o dreaptă,\
                într-un sens care va fi precizat mai jos. Dacă există o asemenea dreaptă, se numește <i>asimptotă</i>.</p>\
        <ol>\
            <li><i>Asimptota oblică</i> este dreapta de ecuație <i>y = mx + n</i>, unde <img src ="/images/m.png" class ="img-content" /> și <img src ="/images/n.png" class ="img-content" />. </li>\
             <li><i>Asimptota orizontală</i> este dreapta de ecuație y = a, unde <img src ="/images/a.png" class ="img-content" /></li>\
             <li><i>Asimptota verticală</i> este dreapta de ecuație x = a, unde a este un punct în care cel puțin una dintre limitele la dreapta și la stânga este infinită.</li>\
        </ol>',
        '<h2>Grafice de funcții</h2>\
                <p>Vom realiza graficul funcției <i> f(x) = ln(sin(x)) </i>.</p>\
                <ul class="list-group">\
                    <li class="list-group-item">\
                        <h4><i>Domeniul de definiție</i></h4> Dacă domeniul de definiție nu este precizat trebuie să găsim mulțimea formată din toate punctele pentru care f(x) are sens.\
                        <p> <span class ="glyphicon glyphicon-pencil"></span> Pentru funcția dată, domeniul de definiție este reuniunea intervalelor de forma (2kπ, (2k + 1)π), k ∈ ℤ. </p>\
                        <div class="alert alert-danger"><b>De ce?</b> Pentru că domeniul de definiție al logaritmului este (0, ∞). Funcția sinus este definită pe ℝ și are valori în [-1, 1].\
                        Ne uităm pe cercul trigonometric și observăm că valorile funcției sinus sunt pozitive pentru valori din intervalul (2kπ, (2k + 1)π), k ∈ ℤ.</div>\
                    </li>\
                    <li class="list-group-item">\
                        <h4><i>Particularități ale funcției</i></h4> Verificăm dacă funcția este pară, impară sau periodică pentru a limita studiul proprietăților.\
                        <p> <span class ="glyphicon glyphicon-pencil"></span> Funcția ln(sin(x)) este periodică. Perioada este <i>π</i>.</p>\
                        <div class="alert alert-danger"><b>De ce?</b> Funcția sin este periodică, iar perioada este π. Putem analiza funcția doar pe intervalul (0, π), după care îl vom extinde.</div>\
                    </li>\
                    <li class="list-group-item">\
                        <h4><i>Intersecția cu axele de coordonate</i></h4>Punctul (0, f(0)) pentru intersecția cu Oy și punctele (x, f(x)) unde f(x) = 0 pentru intersecțiile cu Ox.\
                        <p><span class ="glyphicon glyphicon-pencil"></span> Funcția dată se intersectează cu Ox când sin(x) = 1, deci x = kπ/2, k ∈ ℤ. </p>\
                    </li>\
                    <li class="list-group-item">\
                        <h4><i>Asimptote</i></h4> Verificăm dacă graficul admite asimptote verticale, orizontale sau oblice.\
                        <p><span class ="glyphicon glyphicon-pencil"></span> Pentru intervalul (0, π), funcția are asimptotă verticală la dreapta lui 0 și la stânga lui π. </p> \
                        <div class="alert alert-danger"><b>De ce?</b> Pentru că limita când x tinde la 0 este ∞, iar limita când x tinde la π este -∞. </div>\
                    </li>\
                    <li class="list-group-item">\
                        <h4><i>Derivata întâi</i></h4> Rezolvăm ecuația f\'(x) = 0 pentru a determina punctele critice. Precizăm semnele derivatei de unde decurg intervalele de monotonie, punctele de extrem, unghiulare, de întoarcere.\
                        <p><span class ="glyphicon glyphicon-pencil">Derivata funcției este ctg(x).</span> </p>\
                    </li>\
                    <li class="list-group-item">\
                        <h4><i>Derivata a doua</i></h4> Precizăm semnul derivatei a II-a, de unde se deduc intervalele de convexitate, concavitate și eventualele puncte de inflexiune.\
                        <p><span class ="glyphicon glyphicon-pencil"></span> Derivata a doua a funcției este 1/sin(x)<sup>2</sup> </p>\
                    </li>\
                    <li class="list-group-item">\
                        <h4><i>Tabelul de variație</i></h4>\
                        <table class ="table table-striped">\
                            <tbody>\
                                <tr><td>x</td><td>Domeniul maximal, punctele remarcabile</td></tr>\
                                <tr><td>f\'(x)</td><td>Semnul derivatei I (determinat de zerourile sale)</td></tr>\
                                <tr><td>f(x)</td><td>Se consemnează prin săgeți monotonia + valori remarcabile</td></tr>\
                                <tr><td>f\'\'(x)</td><td>Semnul derivatei a II-a (determinat de zerourile sale)</td></tr>\
                                <tr><td></td><td>Intervalele de conexitate / concavitate</td></tr>\
                            </tbody>\
                        </table>\
                    </li>\
                    <li class="list-group-item">\
                        <h4><i>Trasarea graficului</i></h4> Se trasează asimptotele, se marchează punctele remarcabile, care se unesc. Completăm graficul prin simetrie, repetare dacă funcția este para, impară, periodică etc.\
                    </li>\
                </ul>'
    ],
    [
        ' <h2> Șiruri </h2>\
            <div class="alert alert-warning"> Următoarele afirmații sunt greșite! </div> \
            <ol>\
            <li> <p class = "danger"> Orice șir mărginit este convergent. </p> </li>\
            <li> Orice șir divergent este nemărginit. </li>\
            <li> Orice șir  struct crescător este nemărginit. </li>\
            <li> (1/a<sub>n</sub>) este mărginit, deci (a<sub>n</sub>) este convergent.</li>\
            <li> Dacă (a<sub>n</sub>) și (b<sub>n</sub>) sunt mărginite, atunci (a<sub>n</sub> + b<sub>n</sub>) și (a<sub>n</sub> * b<sub>n</sub>) sunt mărginire, iar reciproca este adevărată întotdeauna.</li>\
            <li> Orice șir monoton este convergent. </li>\
            <li> Orice șir convergent este monoton. </li>\
            <li> Șirul (a<sub>n</sub> + b<sub>n</sub>) este crescător, deci (a<sub>n</sub>) sau (b<sub>n</sub>) sunt crescătoare. </li>\
            <li> Orice șir care conține un subșir convergent este mărginit. </li>\
            <li> Orice șir care conține un subșir monoton este monoton. </li>\
            </ol>\
        '
    ]
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
    [' <h5> Exemple </h5>\
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
          '<h5> Exemple </h5>\
          <img src = "/images/cleste2.png" style = "height: 100px;"/>',
          '<h5> Exemple </h5>\
          lim (sin n)<sup>n</sup> este nedeterminare. \
          ',
        '<h5>Exemple</h5>\
                <p>În cazul limitelor de genul 1<sup>∞</sup>, vom face un artificiu de calcul: adăugăm 1 și scădem 1.</p>\
                <img src ="/images/lime2.png" style ="height: 60px;"/>',
         '<h5>Exemple</h5>\
                <p>În cazul limitelor de genul 1<sup>∞</sup>, vom face un artificiu de calcul: adăugăm 1 și scădem 1.</p>\
                <img src ="/images/lime2.png" style ="height: 60px;"/>'
    ],
    [
        '<h5> Exemple </h5>\
                <ol>\
                    <li>Q\' = ℝ</li>\
                    <li>Mulțimea numerelor naturale nu are puncte de acumulare. Este formată doar din puncte izolate.</li>\
                    <li>Fie A = [0, 1) ∪ {2}. Atunci, A\' = [0, 1].</li>\
                </ol>',
        '<h5>Exemple</h5> \
                    Funcția <img src ="/images/nolimit.png" style ="height: 80px;"/> nu are limită în nici un punct.',
        '<h5>Exemple</h5>\
                <ol>\
                    <li>Pentru f : [-1, 1] → ℝ, are sens numai limita la dreapta în -1 și limita la stânga în -1.</li>\
                    <li>Funcția f(x) = <img src ="/images/lsld.png" style ="height: 50px;" /> are limită în 0.</li>\
                </ol>',
        '<h5>Exemple</h5> <img src ="/images/clestef.png" />',
        '<h5>Exemple</h5> <img src ="/images/limr.png" />'
    ],
    [
        '<h5>Exemple</h5>\
                <ol>\
                    <li>Funcția sgn : ℝ → ℝ nu este continuă.</li>\
                    <li>Funcția sin : ℝ → ℝ este continuă.</li>\
                </ol> ',
        '<h5>Exemple</h5> \
                <ol> \
                    <li>Funcția f : ℝ → ℝ, f(x) = [x], prezintă discontinuități de speța I.</li> \
                    <li>Funcția tg prezintă discontinuități de speța a II-a.</li> \
                </ol>',
        '<h5>Exemple</h5> <p>Funcția f(x) = [x] nu are proprietatea Darboux.</p>'
    ],
    [
        '<h5>Exemple</h5>\
                <ol>\
                    <li>Funcția f : ℝ → ℝ, f(x) = x<sup>2</sup> este derivabilă în 0 deoarece limita raportului în 0 există și este finită.</li>\
                    <li>Funcția f : ℝ → ℝ, f(x) = |x| nu este derivabilă în 0 deoarece limita raportului în 0 nu există.</li>\
                </ol>',
         '<h5>Exemple</h5> <p>Funcția f : ℝ → ℝ nu este continuă în x<sub>0</sub> înteg, deci nu este derivabilă în x<sub>0</sub>.</p>',
         '<h5>Exemple</h5> Pentru funcția f : ℝ → ℝ, f(x) = x|x - 1|, 1 este punct unghiular.',
         '<h5>Exemple</h5>\
                <ol>\
                    <li>(x<sup>2</sup>)\' = 2x </li>\
                    <li>Pentru funcții compuse, <i>derivăm și argumentul</i>: (a<sup>sin 2x</sup>)\' = 2 a<sup>sin 2x</sup> ln(a) cos 2x </li>\
                </ol>',
        '<h5>Exemple</h5>\
                <ol>\
                    <li>(4x<sup>3</sup>)\' = 12 x<sup>2</sup></li>\
                    <li>(cos(x) ln(x))\' = -sin(x) ln(x) + cos(x) 1/x</li>\
                    <li>(x + 1)\' = 1</li>\
                </ol>',
        '<h5>Exemple</h5> Funcțiile arcsin, arccos, arctg, arcctg sunt inversele funcțiilor sin, cos, tg, ctg.',
        '<h5>Exemple</h5> Funcțiile <i>sin</i> și <i>cos</i> sunt indefinit derivabile. //DE COMPLETAT',
        '<h5>Exemple</h5> Fie funcția f (x) = x<sup>3</sup> - 4x<sup>2</sup> + 5x - 10. Utilizând șirul lui Rolle, observăm o singură rădăcină, în intervalul (5/3, ∞). \
                <img src ="/images/sirrolle.png" />',
        '<h5>Exemple</h5> <img src="/images/hospital.png" />',
        '<h5>Exemple</h5> <p>x<sup>2</sup> este o funcție convexă, iar -x<sup>2</sup> este concavă.</p>'
    ],
    [
        '<h5>Exemple</h5>\
                <ol>\
                    <li>Graficul funcției f : ℝ* → ℝ, f(x) = (x<sup>2</sup> - 1) / x admite dreapta x = 0 ca asimptotă verticală și dreapta y = x asimptotă oblica la +∞ și la -∞.</li>\
                    <li>f : (2, ∞) → ℝ, f (x) = x / (x - 1) admite ca asimptotă orizontală dreapta y = 1 la +∞ și la -∞.</li>\
                </ol>',
        '<h5>Ajutor</h5> Site-ul <a href ="https://www.wolframalpha.com/">Wolframalpha</a> este un bun ajutor pentru verificarea graficelor obținute! :)'
    ],
    [
        'exemplu', 'exemplu'
    ]
];