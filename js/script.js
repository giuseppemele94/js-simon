//seleziono l'elemento di output 
const myCountDown = document.getElementById("countdown");

//seleziono la lista dove verranno mostrati i numeri da visualizzare
const numberList = document.getElementById("numbers-list");

//creo un array di 5 numeri casuali univoci tra 1 e 50
const randomNumber = getArrRadnomNumInRangeTotEl(1, 50, 5);

//seleziono asnwer-form dove l'utente dovrà inserire i numeri
const answerUser = document.getElementById("answers-form");

// seleziono instructions 
const instructionsString = document.getElementById("instructions");
//stringa vuota che conterrà tutti i <li>
let listItems = "";

//stampa dei numeri in pagina 
for (let i = 0; i < randomNumber.length; ++i) {

    //aggiungo ogni numero alla stringa 
    listItems += `<li>${randomNumber[i]}</li>`;
}
//inserisco tutti i <li> nella ul 
numberList.innerHTML = listItems;


//variabile di inizio conteggio 
let seconds = 10;

//inserisco output aggiornato secondi 
myCountDown.innerText = seconds;

// gestiamo ogni secondo l'aggiornamento dell'output 
const clock = setInterval(() => {

    // SE siamo alla fine fermiamo il conteggio 
    if (seconds === 0) {
        // blocco la ripetizione temporale
        clearInterval(clock);

        //pulisco il countdown 
        myCountDown.innerText = "";
        //nascondo i numeri
        numberList.classList.add("d-none");

        //nascondo la scritta di memorizzazione dei numeri 
        instructionsString.classList.add("d-none");

        //faccio apparire answer-form 
        answerUser.classList.remove("d-none");

    } else {
        // decrementiamo seconds
        seconds = seconds - 1;
        // inseriamo output aggiornato secondi
        myCountDown.innerText = seconds;
    }
}, 1000);

//intercetto l'invio del form 
answerUser.addEventListener("submit", function (e) {

    //blocco il comportamento di default del form 
    e.preventDefault(); 

    //seleziono tutti gli input presenti nel form 
    const inputs = answerUser.querySelectorAll("input"); 

    //creo un array che conterrà i numeri inseriti dall'utente 
    const userNumbers = []; 

    //ciclo tutti gli input 
    for(let i = 0; i < inputs.length; ++i) {

        // prendo il valore dell'input, lo converto in numero
        const value = parseInt(inputs[i].value);

        //aggiunto nell'array i numeri dell'utente
        userNumbers.push(value);
    }
    //console.log(userNumbers); 
});

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

