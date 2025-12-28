
 window.onload = function() {
    alert("Willkommen auf meiner Seite!"); // beim Laden der Seite erscheint ein Alert  
    
   
    frageNachThemeninteresse(); //nach weckklicken des Alerts erscheint zuerst die Interessensabfrage
 
    frageNachHintergrundfarbe(); // Im Anschluss die Wahl des Hintergrunds
};



function frageNachThemeninteresse() {
        const moechteMehrWissen = confirm("Möchtest du mehr über dieses Thema erfahren?");
          if (moechteMehrWissen) {
            alert("Herzlich wilkommen!!");
               } else {
       
            alert("Vielleicht nächstes mal");   // einfach If-else Anweisung und Ergebnis als Alert
    }
}






function frageNachHintergrundfarbe() {
    
    const bodyElement = document.body; //Hintergrund im gesamten Dokument ändern
    
    
    const farbauswahl = prompt(    // prompt für die Farbauswahl
        "Wähle deinen Wunschhintergrund (red, purple oder blue):", 
        "red"
    );

    if (farbauswahl) {           //hier gibt der Benutzer die Farbe ein
       const gewaehlteFarbe = farbauswahl; 

        if (gewaehlteFarbe === 'red' || gewaehlteFarbe === 'purple' || gewaehlteFarbe === 'blue') {
            
            
            bodyElement.style.backgroundColor = gewaehlteFarbe;   //Änderung des Hintergrunds                    
            bodyElement.style.color = 'black';   //Wenn eine Farbe ausgewählt wurde, ändert sich die Textfarbe für besser Lesbarkeit
            
            alert("Hintergrund erfolgreich geändert!");
        } else {
            alert("Falsche Eingabe, der Hintergrund bleibt unverändert");  //Wenn es falsches eingegeben wurde, dann bleibt der Hintergrund unverändert
        }
    } else {
        alert("Keine Farbe ausgewählt, es bleibt alles so wie es ist");  // Wurde nichts eingegeben, dann bleibt der Hintergrund ebenfalls unverändert
    }
}

