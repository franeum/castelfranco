# Espressioni e numeri

- Espressioni
- Valutazione
- Numeri (int e float)
  - i numeri sono **oggetti**
  - Tipo (o classe) di un numero (funzione type)
- La divisione restituisce sempre un numero con la virgola, le altre dipende, se sono tutti interi restituisce un intero, altrimenti un numero con la virgola
- Operatori aritmetici (+,-,*,/)
- Regole di precedenza
- Parentesi tonde
- Altri operatori (**, //, %)
- Regole di precedenza di questi nuovi operatori (** precedenza massima, divisione intera e resto come il *)

## Esercizi
### Area del trapezio

Sapendo che l'area del trapezio si calcola in questo modo:
$$\frac{(base_{maggiore} + base_{minore}) \cdot altezza}{2}$$
calcola l'area del trapezio avente le seguenti misure:
$$base_{maggiore} = 14.8$$
$$base_{minore} = 10.9$$
$$altezza =  6.1$$

### Quanti mesi hai?

Calcola quanti mesi di vita hai vissuto

### Tradurre le seguenti espressioni aritmetiche

1. Moltiplica per 4 la differenza fra il quadrato di 5 e il quadrato di 3
2. Eleva al quadrato la somma del cubo di 2 e del quadrato di 1, poi dividi il risultato per 27

<div style="page-break-after: always;"></div>

# Espressioni che non resituiscono numeri

- Le espressioni aritmetiche resituiscono oggetti di tipo numerico (int e float)
- Ma ci sono anche espressioni che restituiscono oggetti di tipo diverso
- Confrontiamo due valori verificando che uno sia maggiore dell'altro
- Il tipo **bool**
- Operatori di confronto (>, <, ==, <=, >=, !=)
- Si possono confrontare valori, ma anche espressioni:
  - (4 * 5 + 3) == (7 + 16)

## Esercizi

- Scrivere un'espressione che restituisca **True**
- Scrivere un'espressione che restituisca **False**

<div style="page-break-after: always;"></div>

# Variabili

- Necessità di salvare i dati da qualche parte
- variabili ben formate:
  - nome  (lettere, numeri, _)
  - simboli ammessi
  - parole riservate
  - lunghezza
  - convenzioni
- operatore di assegnamento (=)
  - tramite questo operatore associamo un oggetto (un numero o *qualunque* altro oggetto) a una variabile
  - assegnazioni multiple
- cosa possiamo assegnare ad una variabile?
- l'assegnamento avviene da destra a sinistra, prima python *valuta* l'espressione a destra, poi assegna il valore valutato alla variabile
- in python non esistono variabili propriamente dette, ma **etichette**
- il valore associato a una variabile può cambiare, il suo nome no!
- operazioni fra variabili
- stampa di un valore tramite **print()**

## Esercizi

### assegnamento e operazioni fra variabili
Assegna a 2 variabili chiamate **base** e **altezza** i seguenti valori: 12.8 e 13.6 poi calcola l'area del rettangolo e assegnala alla variabile **area**. Stampa il risultato con la funzione **print()**

### Area del Trapezio
Calcola l'area del trapezio dell'esercizio precedente assegnando i valori alle variabili **base_maggiore**, **base_minore**, **altezza** e infine il calcolo dell'area alla variabile **area**

### Usa le variabili per risolvere il seguente problema
Se un violino costa 500 euro, quanto lo pagherò se ottengo uno sconto del 30%?

<div style="page-break-after: always;"></div>

# Le Stringhe

- Cosa sono le stringhe?
- il tipo **str**
- Tipi di delimitatori (",')
- Includere un delimitatore in una stringa
- operatori sulle stringhe (*, +)
- usare print() con le stringhe
- caratteri speciali (\n, \t)

## Esercizi
### Scrivi le istruzioni per stampare 5 volte la stringa "Buon Compleanno"
### Scrivi la sequenza di istruzioni per ottenere il perimetro e l’area di un rettangolo che abbia i lati di cm 9 e cm 5 e infine stampa la seguente stringa: "Dato un rettangolo con lati 10 e 5, il perimetro sarà uguale a ... e l'area a ...". Naturalmente sostituisci i puntini con i giusti valori

<div style="page-break-after: always;"></div>

# Introspezione

Python consente di fare instrospezione, cioè di ottenere informazioni sugli oggetti presenti in un programma.

Importanti funzioni di instrospezione:
- tipo di un oggetto: type()
- elenco degli attributi: dir()
- descrizione di una funzione o di un attributo: help()
- identità di un oggetto: id()

