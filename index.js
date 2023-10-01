

let n1 = document.getElementById('number1');
let n2 = document.getElementById('number2');


function addition() {
    let num1 = parseFloat(n1.value);
    let num2 = parseFloat(n2.value);

    window.alert(`le resultat de l'addition est: ${num1 + num2}`);
}

function soustraction() {
    let num1 = parseFloat(n1.value);
    let num2 = parseFloat(n2.value);
    
    window.alert(`le resultat de la soustraction est: ${num1 - num2}`);

}

function multiplication() {
    let num1 = parseFloat(n1.value);
    let num2 = parseFloat(n2.value);
    
    window.alert(`le resultat de la multiplication est: ${num1 * num2}`);

}

function division() {
    let num1 = parseFloat(n1.value);
    let num2 = parseFloat(n2.value);
    
    window.alert(`le resultat de la division est: ${num1 / num2}`);

}

