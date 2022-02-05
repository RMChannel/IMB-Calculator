const button=document.getElementById('calcola');
button.addEventListener("click",calcolo);
const error=new Audio('error.mp3');
const sound=new Audio('xp.mp3');
const descres=document.getElementById('descires');

function calcolo() {
    let altezza=document.getElementById('altezza');
    let peso=document.getElementById('peso');
    let risultato=document.getElementById('risultato');
    let res=(peso.value)/(altezza.value*altezza.value);
    if (res===0 || res===Infinity || altezza.value==='' || peso.value==='') {
        error.play();
        setTimeout(() => {
            alert('Errore 1: Dati mancanti');
        }, 100);
        return;
    }
    else if (peso.value<0 || altezza.value<0) {
        error.play();
        setTimeout(() => {
            alert('Errore 2: Dati errati');
        }, 100);
        return;
    }
    else if (altezza.value>3) {
        error.play();
        setTimeout(() => {
            alert('Erorre 3: Dato "altezza" errato');
        }, 100);
        return;
    }
    else {
        risultato.innerText=res;
        sound.play();
        if (res<18.5) {
            descres.innerText="Sottopeso";
            descres.style.color="darkred";
        }
        else if (res>18.5 && res<23.9) {
            descres.innerText="Peso normale";
            descres.style.color="green";
        }
        else if (res>=23.9 && res<28.6) {
            descres.innerText="Sovrappeso";
            descres.style.color="darkgreen";
        }
        else if (res>=28.6 && res<34.9) {
            descres.innerText="Obesità di 1°grado (lieve)";
            descres.style.color="orange";
        }
        else if (res>=34.9 && res<39.9) {
            descres.innerText="Obesità di 2°grado (moderata)";
            descres.style.color="darkorange";
        }
        else {
            descres.innerText="Obesità di 3°grado (grave)";
            descres.style.color="red";
        }
    }
}