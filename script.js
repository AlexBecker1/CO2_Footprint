let urspruenglicheWerte; // Globale Variable, um die ursprünglichen Daten zu speichern
let sortDirection = { Land: 1, Unternehmen: 1 }; // Sortierrichtung für jede Spalte
let sortierwerte;

document.addEventListener('DOMContentLoaded', (event) => {
    // Event-Listener für das popstate-Ereignis hinzufügen
    window.addEventListener('popstate', function(event) {
        console.log('popstate event triggered!');
        console.log('Location: ' + document.location);
        console.log('State: ' + JSON.stringify(event.state)); // Zeigt den Zustand des Verlaufseintrags
        //Überprüfung ob die Daten existieren und es eine gültige Id gibt
        if (event.state && event.state.contentId) {
            displayContent(event.state.contentId);
        } else {
            displayDefaultContent();
            handleReset();
        }
    });
});
//Funktionsaufruf um Content zu laden
function loadContent(contentId) {
    // Inhalt basierend auf der contentId anzeigen
    displayContent(contentId);
    // Neuen Verlaufseintrag hinzufügen
    history.pushState({ contentId: contentId }, `Content ${contentId}`, `?content=${contentId}`);
}
//Funktion zum anzeigen eines neuen Seiteninhaltes
function displayContent(contentId) {
    const contentDiv = document.getElementById('content');
    let contentHtml = '';
    const filterDiv = document.getElementById('filter');
    let filterHtml = '';
    console.log('displayContent == ' + contentId);
    switch (contentId) {
        case 1:
            contentHtml = `
            <div dir="ltr" style="padding-left:10px; padding-right:10px;">
                <br>
                <h2 class="text-center">Über die Webseite</h2>
                <p class="text-center">Diese Webseite wurde im Laufe einer Fallstudie im Studiengang Medieninformatik erstellt.</p>
                <br>
                <h4 class="text-center">Nutzungshinweise:</h4>
                <p class="text-center">Über die Eingabefelder unter der Überschrift "Filter" kann die Tabelle nach Land und/oder Unternehmen gefiltert werden.</p>
                <p class="text-center">Durch einen Klick auf den Button Zurücksetzen werden die Eingabefelder gelöscht und die ursprünglichen Daten wieder in die Tabelle eingefügt.</p>
                <p class="text-center">In der Kopfzeile der Tabelle kann über die Pfeile bei Land oder Unternehmen die aktuell angezeigte Tabelle auf- oder absteigend sortiert werden.</p>
                <p class="text-center">Über den Menüpunkt "Startseite" in der Kopfzeile wird die Home-Webseite neu geladen.</p>
                <p class="text-center">Über den Menüpunkt "Über die Webseite" in der Kopfzeile wird diese Webseite geladen, auf der die Nutzung erklärt wird</p>
                <p class="text-center">Über den Menüpunkt "Rechtliche Hinweise" in der Fußzeile wird ein Fenster mit Hinweisen zum Datenschutz angezeigt.</p>
                <p class="text-center">Über den Menüpunkt "Impressum" in der Fußzeile wird ein Fenster mit einem Impressum angezeigt.</p>
                <p class="text-center">Über die Menüpunkte im lokalen Menü wird die Webseite mit anderen informativen Daten gefüllt.</P>
                <p class="text-center">Über den Menüpunkt CO2 Rechner vom Umweltbundesamt wird auf die Webseite des Umweltbundesamtes weitergeleitet.</p>
                <br>
                </div>
        `;
            break;
        case 2:
            contentHtml = `
            <div dir="ltr" style="padding-left:10px; padding-right:10px;">
                <br>
                <h2>Datenerhebung</h2>
                <br>
                <p>Warum ist ein gesuchtes Unternehmen nicht aufgelistet?</p>
                <br>
                <p>Dass ein Unternehmen in der Liste fehlt, kann verschiedene Gründe haben:</p>
                <p>1. Das Unternehmen hat keine aktuellen Werte.</p>
                <p>2. Das Unternehmen befindet sich in der Umstrukturierung und es sind noch nicht alle Daten verfügbar.</p>
                <p>3. Die Webseite befindet sich noch im Aufbau und bestimmte Regionen sind noch nicht voll erfasst.</p>
                <br>
            </div>
        `;
            break;
        case 3:
            contentHtml = `
            <div dir="ltr" style="padding-left:10px; padding-right:10px;">
                <br>    
                <h2 class="text-center">Was können wir tun?</h2>
                <br>
                <p class="text-center">Um Veränderungen in Gang zu bringen, muss Verständniss geschaffen werden. Verständnis durch Transparenz.
                Auf dieser Webseite werden die Emissionen von Unternehmen dokumentiert, um die Schwere der Belastung zu zeigen, aber auch einen Vergleich
                zu anderen Unternehmen ziehen zu können. Ziel ist es, in den Unternehmen ein Bewusstsein dafür zu schaffen und den Willen etwas zu verändern.</p>
                <br>
                <h3 class="text-center">Wie können wir helfen?</h3>
                <br>
                <p class="text-center">Wir stehen Ihnen gerne für eine umfassende Beratung zur Seite.
                Dabei ist es unerheblich, ob Sie eine Privatperson sind und ihren CO2-Fußabdruck vermindern wollen, oder ob Sie ein Unternehmen haben,
                welches durch effektive Konzepte einen Wandel vollziehen möchte.</p>
                <br>
                <div style="text-align: center;">
                    <h5>E-Mail:</h5>
                    <p>info@co2footprint.com</p>
                    <h5>Adresse:</h5>
                    <p>co2footprint e.V.</p>
                    <p>Musterstraße 234</p>
                    <p>98996 Musterhausen</p>
                    <p>Tel: +49 8556 / 689578</p>
                    <p>Fax: +49 8556 / 689579</p>
                </div>
                <br>
            </div>
        `;
            break;
        case 4:
            contentHtml = `
            <div dir="ltr" style="padding-left:10px; padding-right:10px;">
                <br>
                <h2 class="text-center">Summe der Emissionen</h2>
                <br>
                <p class="text-center">Sobald eine Repräsentative Menge an Daten verfügbar ist, werden hier die durchschnittlichen CO2-Emissionen je Land angezeigt</p>
                <br>
                <p class="text-center">Wir bitten um Entschuldigung, dass diese Funktion noch nicht verfügbar ist.</p>
                <br>
                <p class="text-center">Bearbeitungsfortschritt:</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                        <span class="sr-only">60% abgeschlossen</span>
                    </div>
                </div>
                <br>
            </div>
        `;
            break;
        default:
            displayDefaultContent();
            break;
    }

    contentDiv.innerHTML = contentHtml;
    filterDiv.innerHTML = filterHtml;
}
//Funktion zum Laden der Startseite
function displayDefaultContent() {
    const filterDiv = document.getElementById('filter');
    filterDiv.innerHTML = `<h5 class="text-center">Filter</h5>
                    <form>
                        <p class="text-center"><input type="text" name="filter1" placeholder="Land" oninput="handleInput(this)"></p>
                        <!--Eingabefeld zum Filtern-->
                        <p class="text-center"><input type="text" name="filter2" placeholder="Unternehmen" oninput="handleInput(this)"></p>
                        <!--Eingabefeld zum Filtern-->
                        <p class="text-center"><input class="btn btn-primary" type="reset" value="Zurücksetzen" onclick="handleReset()"></p>
                        <!--Resetbutton zum Zurücksetzen der Tabelle und Eingabefelder-->
                    </form>`
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<div class="tabconfig">
                    <div dir="ltr"> <!--Legt die Leserichtung auf ltr fest, damit sich diese bei anderen Schriftkulturen nicht verändert-->
                        <table class="table tabsm table-light table-striped table-hover table-bordered">
                            <caption>Daten erfasster Unternehmen</caption>
                            <thead class="table-dark">
                                <tr>
                                    <th>Land
                                        <a onclick="sortTable('Land')" class="pe-auto link-light" style="cursor: pointer">
                                            <i class="bi-arrow-down-up"></i>
                                        </a>
                                    </th>
                                    <!-- pe-auto -> klickbarer Link
                                    link-dark -> schwarzes Icon
                                    cursor: pointer -> Mauszeiger als Hand
                                    bi-arrow-down-up -> Pfeil-Icon-->
                                    <th>Unternehmen
                                        <a onclick="sortTable('Unternehmen')" class="pe-auto link-light" style="cursor: pointer">
                                            <i class="bi-arrow-down-up"></i>
                                        </a>
                                    </th>
                                    <th>CO2 Emissionen in Tonnen</th>
                                </tr>
                            </thead>
                            <tbody id="data-output"> <!--Vergabe einer ID, um die Tabelle über Javascript einzulesen-->
                            </tbody>
                        </table>
                    </div>
                </div>`
}

// Überprüfen Sie die URL beim Laden der Seite, um den richtigen Inhalt anzuzeigen
const urlParams = new URLSearchParams(window.location.search);
const contentId = urlParams.get('content');
if (contentId) {
    displayContent(Number(contentId));
} else {
    displayDefaultContent();
}



// Daten aus der data.json Datei laden und initial die Tabelle füllen 
fetch("data.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(werte) {
        urspruenglicheWerte = werte; // Speichere die ursprünglichen Daten 
        window.gesamtWerte = werte; // speichert die gesamten Daten global
        renderTable(werte);
    })
    .catch(function(err) {
        console.log('Ein Fehler ist aufgetreten', err);
    });

//Initiale Darstellung der Tabelle
function renderTable(werte) {
    let placeholder = document.querySelector("#data-output");
    let out = "";

    for (let wert of werte) {
        out += `
        <tr>
            <td>${wert.Land}</td>
            <td>${wert.Unternehmen}</td>
            <td>${wert.CO}</td>
        </tr>
        `;
    }
    //setzt die Sortierwerte auf die aktuellen Tabellenwerte
    sortierwerte = werte;
    placeholder.innerHTML = out;
}

//Funktion um nur bestimmte Zeichen bei der Eingabe zu erlauben
function handleInput(event) {
    const regex = new RegExp('[^A-Za-z0-9ÄÖÜäöü-]', 'g');           //Reguläres Ausdrucksobjekt / der Ausdruck besagt, dass es nicht  A-Za-z0-9ÄÖÜäöü-  enthält und global (ganze Eingabe) gültig ist
    event.value = event.value.replace(regex, '');                   //ersetzt alle vorkommen von regex durch '' -> d.h. alles was nicht  A-Za-z0-9ÄÖÜäöü-  ist, wird entfernt
    filter();
}

// Filter zum Filtern nach Spalte 1 und 2
function filter() {
    //Elemente aus den Eingabefeldern holen
    let Element1 = document.getElementsByName("filter1")[0];
    let Element2 = document.getElementsByName("filter2")[0];
    
    if (!Element1 || !Element2) {
        console.log('mind. 1 Filterelement wurden nicht gefunden'); //Hinweis, wenn eine Variable nicht auffindbar ist
        return;
    }
//eingegebene Werte in Kleinbuchstaben abspeichern
    let Value1 = Element1.value.toLowerCase();
    let Value2 = Element2.value.toLowerCase();
//window.gesamtWerte = Array von Objekten
//filter erstellt ein neues Array, das die folgenden Bedingungen erfüllt
    let gefilterteWerte = window.gesamtWerte.filter(function(wert) {
        //für jedes Objekt "wert" wird geprüft, ob die Land Eigenschaft Value1 enthält
        let Match1 = wert.Land.toLowerCase().includes(Value1);
        //für jedes Objekt "wert" wird geprüft, ob die Unternehmen Eigenschaft Value2 enthält
        let Match2 = wert.Unternehmen.toLowerCase().includes(Value2);
        //nur wenn beides übereinstimmt, wird das Objekt in das neue Array übernommen
        return Match1 && Match2;
    });
    //darstellen der Tabelle mit den gefilterten Werten
    renderTable(gefilterteWerte);
}

//Funktion Reset
function handleReset(){
    renderTable(urspruenglicheWerte);//neu laden der Tabelle ohne Filter
    sortDirection = { Land: 1, Unternehmen: 1 }; //zurücksetzen der Sortierreihenfolge
    return false;
}

// Funktion zum Sortieren der Tabelle
function sortTable(spalte) {
// Erstelle eine Kopie der ursprünglichen Daten
    let sortedWerte = [...sortierwerte];
//Sortiert die kopierten Daten basierend auf der angegebenen Spalte (spalte).
    sortedWerte.sort((a, b) => {
//Wenn der Wert in Zeile a kleiner ist als der Wert in Zeile b, wird -1 multipliziert mit der aktuellen Sortierrichtung zurückgegeben.
//Dies bedeutet, dass a vor b platziert wird, wenn die Sortierrichtung aufsteigend ist, und nach b, wenn sie absteigend ist.
        if (a[spalte] < b[spalte]) {
            return -1 * sortDirection[spalte];
        }
//Wenn der Wert in Zeile a größer ist als der Wert in Zeile b, wird 1 multipliziert mit der aktuellen Sortierrichtung zurückgegeben.
//Dies bedeutet, dass a nach b platziert wird, wenn die Sortierrichtung aufsteigend ist, und vor b, wenn sie absteigend ist.
        if (a[spalte] > b[spalte]) {
            return 1 * sortDirection[spalte];
        }
//Wenn die Werte in a und b gleich sind, wird 0 zurückgegeben, was bedeutet, dass ihre Reihenfolge unverändert bleibt.
        return 0;
    });
// Ändere die Sortierrichtung für das nächste Sortieren
    sortDirection[spalte] *= -1;
//Aktualisiert die Anzeige der Tabelle mit den sortierten Daten.
    renderTable(sortedWerte);
}

// Funktion zur Ermittlung der Benutzersprache um das lokale Menü auf die Sprachkultur anzupassen
function searchLanguage() {
    // Verwendung der Browsersprache
    let userLanguage = navigator.language || navigator.userLanguage;
    //Überprüfen der Sprache
    if (userLanguage.startsWith('he')) {
    // Setze die Sprache der HTML-Seite auf Hebräisch
        document.documentElement.lang = 'he';
    }
    if (userLanguage.startsWith('ar')) {
    // Setze die Sprache der HTML-Seite auf Arabisch
        document.documentElement.lang = 'ar';
    }
    if (userLanguage.startsWith('fa')) {
    // Setze die Sprache der HTML-Seite auf Persisch
        document.documentElement.lang = 'fa';
    }
    if (userLanguage.startsWith('ur')) {
    // Setze die Sprache der HTML-Seite auf Urdu (Pakistan)
        document.documentElement.lang = 'ur';
    }
}

// Ermittlung der Benutzersprache nachdem die gesamte Seite geladen wurde
window.onload = searchLanguage;