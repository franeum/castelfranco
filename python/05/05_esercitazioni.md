# 1. Lo scambio

Acquisire da input due valori, associarli alle variabili x e y e:
1. stamparne il contenuto
2. invertire i due valori
3. stamparne nuovamente il contenuto

esempio di output:

```py
La variabile x vale 10
La variabile y vale 5
Effettuo lo scambio...
La variabile x vale 5
La variabile y vale 10
```

# 2. Incremento (decremento)

A volte è necessario incrementare (o decrementare) il valore di una variabile, cioè prendere il valore della variabile, effettuare un'operazione e riassegnare il risultato alla variabile stessa.

```py
x = 10
# incremento di 2 la variabile
x = x + 2
# ora x vale 12
# moltiplico per 3
x = x * 3
# ora x vale 36
# divido per 2
x = x / 2
# ora x vale 18.0
```

Questo meccanismo è talmente comune che esistono delle scorciatoie sintattiche:

- incremento con addizione: **+=**
- incremento con moltiplicazione: ***=**
- decremento con sottrazione: **-=**
- decremento con divisione: **/=**
- incremento con elevamento a potenza: ****=**

```py
x = 10
# incremento di 2 la variabile
x += 2 # è uguale a scrivere x = x + 2
# moltiplico per 3
x *= 3
# divido per 2
x /= 2
print(x)
>>> 18.0
```

## Esercizio

Scrivi un programma che prenda in input un numero intero e lo salvi in una variabile, poi incrementi il suo valore di 10, poi lo divida per 2 e stampi infine la viabile aggiornata.

Esempio:
```py
Scrivi un intero: 14
La variabile number ora vale 14
Incremento di 10 e divido per 2...
La variabile number ora vale: 12.0
```

# 3. Somme e quadrati

Scrivi un programma che chiede tre numeri, ne calcola la somma, la somma dei quadrati e il quadrato della somma. Infine, visualizza i risultati. 

# 4. Controllo somma

Scrivi un programma che acquisisca 3 numeri interi, il terzo è la somma dei primi due. Se la somma è corretta stampare la stringa: "Bravo, sai fare le addizioni", altrimenti stampare la stringa: "Hai ancora da imparare! La somma è ...".

Esempio:

```py
Inserisci il primo addendo: 16
Inserisci il secondo addendo: 13
Inserisci la somma: 25
>>> Hai ancora da imparare! La somma è 29
```

# 5. Estrazione caratteri

Scrivi un programma che prenda in input una stringa (parola o frase), elimini gli spazi e restituisca solo le **consonanti** se il numero totale dei caratteri è pari, altrimenti restituisca la stringa intera (privata degli spazi) al contrario e in maiuscolo.

Esempio:
```py
Scrivi una frase: Ciao a tutti
>>> cttt

Scrivi una frase: Sheldon Cooper
>>> REPOOCNODLEHS
```

# 6. Accordi maggiori e minori (MIDI)

Il protocollo MIDI (di cui non ci occuperemo ora) rappresenta le altezze con un valore numerico compreso fra 0 e 127 (incluso) a partire dal Do-0. Così la nota 12 è il Do-1, il 24 è il Do-2. La nota 2 è il Re-0, la 14 è il Re-1 e così via.

Utilizzando il protocollo MIDI, acquisire una nota da input, controllare che rientri nel range consentito dal MIDI e, utilizzando quella nota come fondamentale, stampare in output:
- una triade maggiore
- una triade minore

esempio:

```py
Inserisci la fondamentale: 60
triade maggiore: 60 64 67
triade minore: 60 63 67
```

# 7. Pitch class e MIDI

La *pitch class* (classe di altezze) è il nome di una nota privato della sua ottava di appartenenza. La nota **Do-6** è la nota Do della sesta ottava. La sua *pitch class* è **Do**.
Ragiongando in termini di protocollo MIDI, i multipli interi del 12, ossia tutte le note che, divise per 12, danno resto 0, appartengono alla *pitch class* **Do**, le note che, divise per 12, danno resto uguale a 1 appartengono alla *pitch class* **Do#**, e così via...

Scrivi un programma che prenda in input una nota (in formato MIDI) e restituisca la sua *pitch class** espressa come valore compreso fra 0 e 11 (incluso).

# 8. Intervalli 

Scrivi un programma che:
1. Prenda in input 2 note MIDI
2. Estragga le relative *pitch class*
3. Classifichi (e stampi) l'intervallo fra le due *pitch class* 
4. **Bonus track**: Stampi l'inverso dell'intervallo

Annotazioni:
La classificazione degli intervalli nel sistema tonale dipende da "quale nome" diamo alle altezze: Do-Fa# è diverso da Do-Solb. In questo programma, per semplificare, stabiliamo una tavola degli intervalli *a priori*:

| numero semitoni | intervallo       |
| --------------- | ---------------- |
| 1               | seconda minore   |
| 2               | seconda maggiore |
| 3               | terza minore     |
| 4               | terza maggiore   |
| 5               | quarta giusta    |
| 6               | quarta eccedente |
| 7               | quinta giusta    |
| 8               | sesta minore     |
| 9               | sesta maggiore   |
| 10              | settima minore   |
| 11              | settima maggiore |