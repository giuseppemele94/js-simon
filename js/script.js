//seleziono l'elemento di output 
const myCountDown = document.getElementById("countdown"); 

//seleziono la lista dove verranno mostrati i numeri da visualizzare
const numberList = document.getElementById("numbers-list"); 

//creo un array di 5 numeri casuali univoci tra 1 e 50
const randomNumber = getArrRadnomNumInRangeTotEl(1,50,5); 

//stringa vuota che conterrà tutti i <li>
let listItems = ""; 

//stampa dei numeri in pagina 
for(let i =0; i < randomNumber.length ; ++i) {

    //aggiungo ogni numero alla stringa 
    listItems += `<li>${randomNumber[i]}</li>`;
}
//inserisco tutti i <li> nella ul 
numberList.innerHTML = listItems; 



//variabile di inizio conteggio 
let seconds = 30 ; 

//inserisco output aggiornato secondi 
myCountDown.innerHTML = seconds ; 

// gestiamo ogni secondo l'aggiornamento dell'output 
const clock = setInterval(()=> {

    // SE siamo alla fine fermiamo il conteggio 
    if (seconds === 0) {
        // blocco la ripetizione temporale
        clearInterval(clock);
    } else {
        // decrementiamo seconds
        seconds = seconds - 1;
        // inseriamo output aggiornato secondi
        myCountDown.innerText = seconds;
    }
}, 1000); 



// funzione per creare un array di numeri univoci
function getArrRadnomNumInRangeTotEl(minNUm, maxNUm, tot) {

    const numArr = [];

    while (numArr.length < tot) {
        const randomNum = genRandomNumInRange(minNUm, maxNUm);

        if (!numArr.includes(randomNum)) {
            numArr.push(randomNum);
        }
    }

    return numArr

}

// funzione che genera random num tra min e max
function genRandomNumInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}