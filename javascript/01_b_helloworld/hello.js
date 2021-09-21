/*
oggetto print.js: 
    inlet -> bang;
    outlet -> none;
    post a `HELLO WORLD` message on bang received;
*/

// definisco il numero degli inlets
inlets = 1;

// definisco il numero degli outlets (null imposta nessun outlets)
outlets = null;

// imposto una variabile GLOBALE
var hello = "HELLO WORLD!\n";

/* 
funzione innescata alla ricezione di un bang, 
il nome della funzione è uguale al messaggio ricevuto (bang)
*/
function bang() {
    post(hello); // la funzione post(arg) stampa il valor di arg sulla max console
}
