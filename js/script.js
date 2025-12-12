//seleziono l'elemento di output 

const myCountDown = document.getElementById("countdown"); 

//variabile di inizio conteggio 
let seconds = 30 ; 

//inserisco output aggiornato secondi 
myCountDown.innerHTML = seconds ; 

// gestiamo ogni secondo l'aggiornamento dell'output 
const clock = setInterval(()=> {

    // SE siamo alla fine (secondi sono 0) - fermiamo il conteggio 
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
