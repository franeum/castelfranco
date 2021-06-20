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
- identità di un oggetto: **id()**
- tipo di un oggetto: **type()**
- elenco degli attributi: **dir()**
- descrizione di una funzione o di un attributo: **help()**

Ogni tipo definisce un insieme di attributi, alcuni dei quali sono dati *accessorii* dell'oggetto, altri sono *chiamabili*, cioè sono delle vere e proprie operazioni da compiere sull'oggetto. Questi attributi *operazionali* sono detti **metodi**.
Per sapere se un attributo di un oggetto è un metodo, si può chiamare l'attributo con la funzione *callable*:

```py
callable(str.capitalize)
```

che resituirà **True** o **False**.

## Metodi importanti delle stringhe 

Alcuni metodi restituiscono informazioni su una stringa:
- upper(): restituisce una stringa tutta maiuscola
- lower(): restituisce una stringa tutta minuscola
- replace(): sostituisce uno o più caratteri con altri
- count(): conta il numero di occorrenze di un caratteri o di una sequenza di caratteri
- isdigit(): restituisce **True** se la stringa contiene delle cifre  

```py
# str.upper()
stringa = "sheldon cooper"
print(stringa.upper())
>>> SHELDON COOPER
```


```py
# str.lower()
stringa = "ShEldOn cooPer"
print(stringa.lower())
>>> sheldon cooper
```

```py
# str.replace()
stringa = "sheldon cooper"
print(stringa.replace('o','a'))
>>> sheldan caaper
```

```py
# str.count()
stringa = "sheldon cooper"
print(stringa.count('o'))
>>> 3
```

```py
# str.isdigit()
stringa = "sheldon cooper"
print(string.isdigit())
>>> False
```

```py
# str.isdigit()
stringa = "23"
print(string.isdigit())
>>> True
```


I metodi **NON** modificano la stringa originale, ma creano una **NUOVA** stringa modificata. Gli oggetti di tipo **str** infatti sono **IMMUTABILI**, come del resto gli **int** e i **float**. 

## Funzioni importanti delle stringhe

### input()

Permette di *catturare* una sequenza di caratteri immessi da tastiera. Permette di stampare una stringa di descrizione del testo da immettere e restituisce a sua volta la stringa immessa da tastiera.

```py
input("scrivi il tuo nome: ")
```

### len()

Restituisce la lunghezza di una stringa, cioè la quantità di caratteri che la compongono.

```py
stringa = "Leonard Hofstader"
lunghezza = len(stringa)
print(lunghezza)
>>> 17 
```

## Conversione

La conversione di *tipo* permette di convertire un oggetto di un tipo in un oggetto di un altro tipo. Ad esempio un numero di tipo *float* può essere convertito in un oggetto di tipo *int*:

```py
>>> numero = 13.8
>>> numero_convertito = int(numero)
>>> print(numero_convertito)
>>> 13
``` 

Le stringhe possono essere convertite in numeri. Se una stringa contiene delle cifre, possiamo convertirla in numero intero con **int()**. Se invece contiene cifre separate da un punto, possiamo convertirla in **float**.

```py
stringa = '13'
print(type(stringa))
>>> <class 'str'>
numero = int(stringa)
print(numero)
print(type(numero))
>>> 13
>>> <class 'int'>
```

Il meccanismo della conversione consente di ottenere valori numerici da tastiera tramite la funzione input() e di convertirli con int() e float() in un valore di tipo numerico.

```py
>>> anno_di_nascita = input("quando sei nato? ")
>>> anno_attuale = 2021
>>> eta = anno_attuale - anno_di_nascita
>>> print("Hai", eta, "anni!")
```

### Esercitazioni

1. Acquisisci una stringa con la funzione **input()** e stampa la stringa acquisita, tutta al maiuscolo
2. Acquisisci due stringhe (una alla volta) con la funzione **input()** e stampa le due stringhe concatenate con l'operatore **+**
3. Scrivi un programma che prenda in input la base e l'altezza di un triangolo e restituisca l'area. Usa **input()** per acquisire i due valori, inseriscili in due variabili e convertili in numero, poi calcola l'area, inseriscila in una variabile **area** e stampa il suo valore 
4. Scrivi un programma che acquisica una stringa da input, stampi il tipo dell'oggetto, l'identità e l'elenco dei metodi
5. Esplora i metodi per le stringhe con la funzione **dir()** e cerca di capire cosa fanno i metodi **str.capitalize()**, **str.title()**, **str.strip()**. Usa la funzione **help()** su un metodo per accedere alla sua documentazione

<div style="page-break-after: always;"></div>

# Slicing

Una stringa è una sequenza *ordinata* di caratteri. In quanto ordinata i caratteri hanno una *posizione* identificata da un **indice**

| stringa | 'h' | 'o' | 'w' | 'a' | 'r' | 'd' |
| ------- | --- | --- | --- | --- | --- | --- |
| indice  | 0   | 1   | 2   | 3   | 4   | 5   |

## Slicing semplice (index)

Per accedere a un singolo carattere di una stringa si usa la notazione a **slicing** semplice:

```py
str[index]
```

```py
stringa = 'howard'
print(stringa[0])
>>> h
print(stringa[1])
>>> o
# posso usare l'indice -1 per ottenere l'ultimo carattere
print(stringa[-1])
>>> d
```
## Slicing con inizio e fine

Con lo stesso tipo di notazione posso ottenere *fettine* di una stringa, cioè frammenti, definendo un punto di inizio e un punto di fine separati da due punti:

```py
str[start:end]
```

```py
stringa = 'howard'
# Ottengo tutti i caratteri dall'indice 1 all'indice 3 (escluso)
print(stringa[1:3])
>>> ow
```

Se si omette il punto di inizio, è implicito che il punto di inizio sia il primo carattere:

```py
stringa = 'rajesh'
# Ottengo i caratteri dall'inizio fino all'indice 4 (escluso)
print(stringa[:4])
>>> raje
```

Se si omette il punto di fine, è implicito che il punto di fine sia l'ultimo carattere:

```py
stringa = 'rajesh'
# Ottengo i caratteri dall'indice 4 fino alla fine
print(stringa[4:])
>>> sh
```

## Slicing con inizio, fine e *step*

Si può aggiungere anche un terzo argomento, che definisce lo *step*, cioè il passo con cui estrarre i caratteri, la notazione è:

```py
str[start:end:step]
```

```py
stringa = "sheldon cooper"
# Ottengo i caratteri dall'indice 1 all'indice -1 (escluso) procedendo a passi di due
print(stringa[1:-1:2])
>>> hlo op
```

Naturalmente è possibile omettere l'inizio e/o la fine:

```py
stringa = "sheldon cooper"
# Ottengo i caratteri dall'inizio fino all'indice 6 (escluso) procedendo a passi di due
print(stringa[:6:2])
>>> sed
```

Trucchetto: se si omette l'inizio e la fine si ottiene una copia dell'intera stringa:

```py
stringa = 'leonard hofstader'
print(stringa[:])
>>> leonard hofstader
```

E se si aggiunge l'argomento *step* a -1 si ottiene l'intera stringa al contrario:

```py
stringa = 'leonard hofstader'
print(stringa[::-1])
>>> redatsfoh dranoel
```

### Esercitazioni

1. Scrivi un programma che prenda in input una stringa e stampi prima una stringa formata dai soli caratteri in posizione pari, poi un'altra stringa formata dai caratteri in posizione dispari
     * esempio: 
       * stringa di entrata: "BigBangTheory"
       * uscita1: "Bgaghoy"
       * uscita2: "iBnTer"
2. Scrivi un programma che prenda in input una stringa e calcoli il numero dei soli caratteri pari (usa lo slicing e la funzione len())
3. Scrivi un programma che prenda in input una frase (una stringa formata da caratteri e spazi) e produca in uscita la frase senza gli spazi e stampi anche la lunghezza della stringa.
4. Scrivi un programma che prenda in input due stringhe (una alla volta), le concateni tramite l'operatore **+** e stampi 3 volte la nuova stringa ottenuta.
     * esempio:
       * stringa1: "ciao"
       * stringa2: "mondo"
       * uscita: "ciao mondo ciao mondo ciao mondo" 
     * N.B. *Attenzione agli spazi!*

<div style="page-break-after: always;"></div>

# Selezione

## if
### struttura

### condizione

### indentazione

### operatori di confronto

### operatori logici

### esempio
- valore assoluto di un numero inserito da tastiera

### esercizio

## if/else

## if/elif/else

## annidare