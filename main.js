"use strict";

let ziehung = [];
let generierte_SZ = 0;
let zahlen = [];
let super_zahlen = [];
let eingabe_6_aus_49_array = [];
let gezogene_superzahl;
let zaehler_zahlen_6_aus_49 = 0;
let eingabe_superzahl = 0;


// 49 Zahlen werden generiert und in ein Array eingefügt, dasselbe passiert mit den Superzahlen 

for(let i = 1; i <= 49; i++){
    zahlen.unshift(i);
};

for(let i = 1; i <= 11; i++){
    super_zahlen.unshift(i);
};

// Selektieren der Klassen für die Tabellen

let tippfeld = document.querySelector(".tippfeld");
let tabelle_6_49 = document.querySelector(".tabelle_6_49");
let tabelle_superzahl = document.querySelector(".tabelle_superzahl");
let tabelle_tr = document.querySelector(".tabelle_6_49  tr");
let superzahl = document.querySelector(".superzahl");

// Hier werden die Zahlen 6 aus 49 generiert und dargestellt in einer Tabelle.

zahlen.forEach( e => {

    if(zahlen.indexOf(e) % 7 === 0 ){
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", e);
        let label = document.createElement("label");
        label.setAttribute("for", e);
        label.innerHTML = ` ${e} `;
        td.insertAdjacentElement("afterbegin", input);
        td.insertAdjacentElement("afterbegin", label);
        tr.insertAdjacentElement("afterbegin", td);
        tabelle_6_49.insertAdjacentElement("afterbegin", tr);
    } else {
        let td = document.createElement("td");
        let input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", e);
        let label = document.createElement("label");
        label.setAttribute("for", e);
        label.innerHTML = ` ${e} `;
        td.insertAdjacentElement("afterbegin", input);
        td.insertAdjacentElement("afterbegin", label);
        let tabelle_tr = document.querySelector(".tabelle_6_49 tr");
        tabelle_tr !== null? tabelle_tr.insertAdjacentElement("afterbegin", td):tabelle_6_49.insertAdjacentElement("afterbegin", td);
    }
});

//Hier werden die Superzahlen generiert und dargestellt in einer Tabelle.

super_zahlen.forEach( e => {
    if(super_zahlen.indexOf(e) === 0 ){
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let input2 = document.createElement("input");
        input2.setAttribute("type", "checkbox");
        input2.setAttribute("id", e);
        let label2 = document.createElement("label");
        let a = String(e);
        label2.setAttribute("for", a.length === 1 ? "0" + e : e );
        label2.innerHTML = ` ${e} `;
        td.insertAdjacentElement("afterend", label2);
        td.insertAdjacentElement("afterend", input2);
        tr.insertAdjacentElement("afterend", td);
        tabelle_superzahl.insertAdjacentElement("afterbegin", tr);
    } else {
        let td = document.createElement("td");
        let input2 = document.createElement("input");
        input2.setAttribute("type", "checkbox");
        input2.setAttribute("id", e);
        let label2 = document.createElement("label");
        let a = String(e);
        label2.setAttribute("for", a.length === 1 ? "0" + e : e );
        label2.innerHTML = ` ${e} `;
        td.insertAdjacentElement("afterbegin", label2);
        td.insertAdjacentElement("afterbegin", input2);
        let tabelle_tr = document.querySelector(".tabelle_superzahl tr");
        tabelle_tr !== null? tabelle_tr.insertAdjacentElement("afterbegin", td): tabelle_superzahl.insertAdjacentElement("afterbegin", td);
    };
});

document.querySelector("#spielen").addEventListener("click", e => {
    e.preventDefault();

    // Vor jedem Klick auf den Spielen Button wird das Array Ziehung geleert

    ziehung = []; 

    // Hier werden die 6 Zahlen aus 49 generiert/gezogen und sortiert.

    while (ziehung.length < 6) {
        let zahl = Math.floor(Math.random() * 49) + 1; 
        if (!ziehung.includes(zahl)) {
            ziehung.push(zahl); 
        }
    }

    ziehung = ziehung.sort(function(a, b) {
        return a - b;
    });

    // Die Superzahl wird hiermit generiert/gezogen.

    generierte_SZ = Math.floor(Math.random() * 10) + 1;

    // Alle Inputfelder werden selektiert und auf checked/aktiviert geprüft. Die gecheckten Zahlen werden in ein Array gepusht. 

    let input_aktiv = document.querySelectorAll(".tabelle_6_49 input");
    let p_meldung = document.querySelector("#meldung_6_aus_49");
    p_meldung.innerHTML = "";
    let spiel_schalter_1 = false;
    let spiel_schalter_2 = false;
    eingabe_6_aus_49_array = [];
    zaehler_zahlen_6_aus_49 = 0;

    input_aktiv.forEach( e => {
        if(e.checked === true){
            zaehler_zahlen_6_aus_49++;
            eingabe_6_aus_49_array.push(e.id);
        }
    });

    // Anhand des Zählers wird die korrekte Eingabe geprüft. 6 Zahlen aus 49 Feldern müssen gesetzt sein für das Spiel. 
    // Bei Falscheinghabe wird eine CSS Klasse für 3,5 Sekunden gesetzt. Ebenso wird der Schalter 1 auf true gesetzt.

    if(zaehler_zahlen_6_aus_49 < 6){
        p_meldung.innerHTML = "Du musst mindestens 6 Zahlen aus 49 Feldern auswählen.";
        p_meldung.setAttribute("class", "meldung_6_aus_49");
        setTimeout(function() {p_meldung.removeAttribute("class");}, 3500);
    } else if(zaehler_zahlen_6_aus_49 > 6){
        p_meldung.innerHTML = "Du kannst maximal 6 Zahlen aus 49 Feldern auswählen.";
        p_meldung.setAttribute("class", "meldung_6_aus_49");
        setTimeout(function() {p_meldung.removeAttribute("class");}, 3500);
    } else if(zaehler_zahlen_6_aus_49 === 6){
        p_meldung.innerHTML = "";
        spiel_schalter_1 = true;
    }

    let input_aktiv_superzahl = document.querySelectorAll(".tabelle_superzahl input");
    let p_meldung_superzahl = document.querySelector("#meldung_superzahl");
    let p_meldung_zahlen = document.querySelector("#meldung_zahlen");
    p_meldung_superzahl.innerHTML = "";
    p_meldung_zahlen.innerHTML = "";
 
    // Ab hier wird die Superzahl geprüft auf dieselbe Weise wie oben die 6 Zahlen aus 49.
    // Hier wird der Schalter 2 auf true gesetzt sobald die Eingabe der Superzahl korrekt ist.

    eingabe_superzahl = 0;
    input_aktiv_superzahl.forEach( i => {
        if(i.checked === true){ 
            eingabe_superzahl++; 
        };
    });

    input_aktiv_superzahl.forEach( e => {

        if(eingabe_superzahl > 1 ){
            p_meldung_superzahl.innerHTML = "Du darfst nur eine Superzahl auswählen.";
            p_meldung_superzahl.setAttribute("class", "meldung_superzahl");
            setTimeout(function() {p_meldung_superzahl.removeAttribute("class");}, 3500);
        } else if(eingabe_superzahl < 1){
            p_meldung_superzahl.innerHTML = "Du musst eine Superzahl auswählen.";
            p_meldung_superzahl.setAttribute("class", "meldung_superzahl");
            setTimeout(function() {p_meldung_superzahl.removeAttribute("class");}, 3500);
        } else if(eingabe_superzahl === 1){
            p_meldung_superzahl.innerHTML = "";
            if(e.checked === true){
                gezogene_superzahl = e.id;
                gezogene_superzahl = Number(gezogene_superzahl);
            }
            spiel_schalter_2 = true;
        }
    });

    // Mit den beiden Schalter wissen wir, dass die Eingaben korrekt von der Anzahl sind. 
    // Somit beginnt ab hier die Prüfung ob die eingegebenen Zahlen mit den gezogen Zahlen übereinstimmen. 

    if(spiel_schalter_1 === true && spiel_schalter_2 === true){

        // Die generierten Zahlen werden mit den gecheckten Zahlen auf Gleichheit geprüft und somit die Anzahl der Treffer gezählt. 

        let i = -1;
        let treffer_zaehler = 0;
        ziehung.forEach( e => {
            i++;
            e = String(e);
            eingabe_6_aus_49_array.forEach( a => {
                if(a === e){
                    treffer_zaehler++;
                }
            });
        });

        // Die Ziehung sollte etwas spielerisch aussehen, dementsprechend ist die Ziehung der Zahlen zeitverzögert und somit animiert.
        // Dies musste als Funktion definiert werden da es bei verschieden Fällen oft verwendet wird.
        
        const ziehung_animiert = function() {

            let index = 0;
            document.getElementById("spielen").disabled = true;
            const intervalId = setInterval(() => {

                let text_zahlen_gezogen;
                index === 0 ? text_zahlen_gezogen =  "Folgende Zahlen werden gerade gezogen.<br>" : text_zahlen_gezogen = "";
                let leer_o_stern;
                index === 5 ? leer_o_stern = "" : leer_o_stern = " * ";
                p_meldung_zahlen.innerHTML += text_zahlen_gezogen + "<strong>" + ziehung[index] + "<strong>" +  leer_o_stern; 
                console.log(ziehung[index]);
                index++;

                if (index === ziehung.length) {
                    setTimeout(function() {p_meldung_zahlen.innerHTML += "<br>Superzahl: <strong>" + generierte_SZ  + "<strong>"}, 800);
                    setTimeout(function() {document.getElementById("spielen").disabled = false;}, 1700);
                    clearInterval(intervalId);
                }
        

            }, 300);
        }

        // Hier wird das Confetti Feature eingebettet.

        const confetti = function(){
            setTimeout(function() {const jsConfetti = new JSConfetti();jsConfetti.addConfetti()}, 4500); 
        }

        // Zum Schluss werden die Treffer geprüft und je nach Fall die Entsprechenden Medlungen ausgegeben + Confetti Asuführung bei Treffer.
        
        if(treffer_zaehler === 3 && gezogene_superzahl !== generierte_SZ){
            ziehung_animiert();
            setTimeout(function() {p_meldung.innerHTML = "Du hast drei richtige Zahlen. Herzlichen Glückwünsch."}, 3500);
            confetti();
        }else if(treffer_zaehler === 3 && gezogene_superzahl === generierte_SZ){
            ziehung_animiert();
            setTimeout(function() {p_meldung.innerHTML = "Du hast drei richtige plus Superzahl. Herzlichen Glückwünsch."}, 3500);
            confetti();
        }else if(treffer_zaehler === 4 && gezogene_superzahl !== generierte_SZ){
            ziehung_animiert();
            setTimeout(function() {p_meldung.innerHTML = "Du hast vier richtige Zahlen. Herzlichen Glückwünsch."}, 3500);
            confetti();
        }else if(treffer_zaehler === 4 && gezogene_superzahl === generierte_SZ){
            ziehung_animiert();
            setTimeout(function() {p_meldung.innerHTML = "Du hast vier richtige plus Superzahl. Herzlichen Glückwünsch."}, 3500);
            confetti();
        }else if(treffer_zaehler === 5 && gezogene_superzahl !== generierte_SZ){
            ziehung_animiert();
            setTimeout(function() {p_meldung.innerHTML = "Du hast fünf richtige Zahlen. Herzlichen Glückwünsch."}, 3500);
            confetti();
        }else if(treffer_zaehler === 5 && gezogene_superzahl === generierte_SZ){
            ziehung_animiert();
            setTimeout(function() {p_meldung.innerHTML = "Du hast fünf richtige plus Superzahl. Herzlichen Glückwünsch."}, 3500);
            confetti();
        }else if(treffer_zaehler === 6 && gezogene_superzahl !== generierte_SZ){
            ziehung_animiert();
            setTimeout(function() {p_meldung.innerHTML = "Du hast sechs richtige Zahlen. Herzlichen Glückwünsch."}, 3500);
            confetti();
        }else if(treffer_zaehler === 6 && gezogene_superzahl === generierte_SZ){
            ziehung_animiert();
            setTimeout(function() {p_meldung.innerHTML = "Du hast sechs richtige plus Superzahl. Herzlichen Glückwünsch."}, 3500);
            confetti();
        }else if(treffer_zaehler < 3 && gezogene_superzahl === generierte_SZ){
            ziehung_animiert();
            setTimeout(function() {p_meldung.innerHTML = "Du hast keinen Treffer. Schade."}, 3500);
        }else if(treffer_zaehler < 3 && gezogene_superzahl !== generierte_SZ){
            ziehung_animiert();
            setTimeout(function() {p_meldung.innerHTML = "Du hast keinen Treffer. Schade."}, 3500);
        }else {
            ziehung_animiert();
            setTimeout(function() {p_meldung.innerHTML = "Du hast keinen Treffer. Schade."}, 3500);
        } 

    }
});




