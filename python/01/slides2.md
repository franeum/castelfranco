# programmare

---

- scienza (e arte) di scrivere **istruzioni** per un computer al fine di ottenere un risultato **utile**
- tali istruzioni sono scritte in un **linguaggio di programmazione** (leggibile dall'umano) e poi trasformate in **linguaggio macchina** (leggibile da un computer)

---

- le istruzioni solitamente compiono operazioni semplici:
  - effettuare una somma
  - stampare una stringa sul monitor
  - leggere un numero dalla tastiera
- ma molte istruzioni, opportunamente messe in sequenza, possono costituire complessi programmi
- i computer possono eseguire miliari di operazioni al secondo

---

## programma

- un **programma** è una sequenza di istruzioni elementari che operano su **dati**
- queste istruzioni sono `ordinate`

---

## ricetta

### pasta in bianco per 2 persone

- metti sul fuoco una pentola piena d'acqua
- aggiungi il sale (qb)
- quando l'acqua bolle, butta nella pentola 250 gr di pasta
- fai cuocere per 10 minuti circa
- scola
- aggiungi il burro
- servi

---

- una ricetta come la precedente ha un certo grado di flessibilità (qb significa *quanto basta*, quanta acqua devo usare? che significa circa?)
- la flessibilità spesso in un programma per computer significa **ambiguità**

---

- per evitare l'ambiguità i programmi per computer vengono scritti in un **linguaggio di programmazione**
- ...che consente di descrivere i passi di un algoritmo tramite 
  - un **lessico** (insieme di parole e simboli *legali*)
  - una **sintassi** (forma con cui viene utilizzato il lessico)
  - una **semantica** (significato che le forme sintattiche hanno)

---

- i programmi sono scritti in forma leggibile, con una notazione `testuale`
- ...ma poi devono essere **tracdotti** in un linguaggio che sia comprensibile per un computer
- come la notazione musicale, che di per sé non produce alcun suono, deve essere tracdotta in suono attraverso un'azione del musicista (il *suonare*)

---

- in un computer, il musicista è l'`hardware` digitale
- quel complesso di circuiti in grado di manipolare **segnali elettrici** che possono assumere un valore di voltaggio **positivo** o **nullo**

---

- questi segnali vengono *astratti* con la loro rappresentazione matematica:
  - `1` o `0`
- la più piccola unità informativa in un dispositivo digitale è costituita dal `bit`, che assume il valore di 1 o 0
- ma solitamente molti bit vengono elaborati in parallelo
  - un gruppo di 8 bit si chiama `byte`

---

- Con un singolo bit si può rappresentare un'informazione *duale*:
  - vero (1) o falso (0)
  - online (1) o offline (0)
  - alto o basso
- Ma spesso è necessario rappresentare informazioni più complesse
- ...quindi i bit posso essere `raggruppati`

---

- un `bit` può rappresentare due simboli (due *possibilità*):
  - ⓪   ①
- 2 bit possono rappresentare 4 possibilità:
  - ⓪⓪ ⓪① ①⓪ ①①
- 4 bit possono rappresentare 8 possibilità:
  - ⓪⓪⓪ ⓪⓪① ⓪①⓪ ①⓪⓪ ⓪①① ①⓪① ①①⓪ ①①① 

---

- In generale, $N$ bit possono rappresentare $2^N$ possibilità
- ogni sequenza di bit può essere usata per rappresentare un numero in un range da $0$ a $N - 1$

| bit | 1 | 0 | 0 | 1 | 1 | 
|---|---|---|---|---|---|
| peso | 16 | 8 | 4 | 2 | 1 |
| position | 4 | 3 | 2 | 1 | 0 |
|value|$2^4\cdot{1}$|$2^3\cdot0$|$2^2\cdot0$|$2^1\cdot1$|$2^0\cdot1$|

---

### qual è la media dei miei voti?

- quante soluzioni ci sono?
- quante e quali strategie?
- quali sono gli elementi coinvolti?

---

### Devo frequentare un corso di 40 ore, ma posso saltare il 30% delle ore, quante lezioni devo frequentare se ogni lezione dura 3 ore?

---