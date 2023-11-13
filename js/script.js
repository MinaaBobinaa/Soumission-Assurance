
/*
Functions to hide or show questions
*/
const BtnOui = document.querySelector('#reclamation');
const BtnNon = document.querySelector('#reclamation-non');
const divlist = document.querySelector('.listHolder');


BtnOui.addEventListener('click', () => {
    divlist.style.display = 'block';
});

BtnNon.addEventListener('click', () => {
    divlist.style.display = 'none';
});

const form = document.getElementById('form');
const date = document.getElementById('date');
const valeur = document.getElementById('valeur');
const anneeFabrication = document.getElementById('anneeFabrication');
const nbrKilometre = document.getElementById('nbrKilometre');
const camera = document.getElementById('camera');
const nbrReclamation = document.getElementById('nbrReclamation');
const montant = document.getElementById('montant');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    //console.log('Form submit event triggered');
    checkInputs();

});

function validerDate() {
    const dateValue = date.value;
    let format = /[0-9]{4}-[0-1][0-9]-[0-3][0-9]/;
    let estValide = format.test(dateValue);
    if (dateValue === '' || dateValue === null) {
        setErrorFor(date, 'La date ne peut pas etre vide');
    } else if (!estValide) {
        setErrorFor(date, 'La date n\'est pas valide');
    } else {
        setSuccessFor(date);
    }
}

function validerValeur() {
    const valeurValue = valeur.value;
    if (valeurValue === '' || valeurValue === null) {
        setErrorFor(valeur, 'Ajoutez une valeur');
    } else if (!valeurMinMax(valeurValue, 0, 100000000)) {
        setErrorFor(valeur, 'Valeur doit etre entre 0 et 100 000 000');
    } else {
        setSuccessFor(valeur);
    }
}

function validerAnnee() {
    const anneeFabricationValue = anneeFabrication.value;
    if (anneeFabricationValue === '' || anneeFabricationValue === null) {
        setErrorFor(anneeFabrication, 'Ajoutez l\'annee de fabrication');
    } else if (!valeurMinMax(anneeFabricationValue, 1890, 2023)) {
        setErrorFor(anneeFabrication, 'L\'annee de fabrication doit etre comprise entre 1890 et 2023');
    } else {
        setSuccessFor(anneeFabrication);
    }
}

function validerNbrKilo() {
    const nbrKilometreValue = nbrKilometre.value;
    if (nbrKilometreValue === '' || nbrKilometreValue === null) {
        setErrorFor(nbrKilometre, 'Ajoutez le kilometrage de votre vehicule');
    } else if (!valeurMinMax(nbrKilometreValue, 0, 150000)) {
        setErrorFor(nbrKilometre, 'Le kilometrage doit etre compris entre 0 et 150 000km');
    } else {
        setSuccessFor(nbrKilometre);
    }
}

function validerNbrRecla() {
    const nbrReclamationValue = nbrReclamation.value;
    if (nbrReclamationValue === '' || nbrReclamationValue === null) {
        setErrorFor(nbrReclamation, 'Ajoutez le nombre de reclamation');
    } else if (!valeurMinMax(nbrReclamationValue, 1, 100)) {
        setErrorFor(nbrReclamation, 'Le nombre de reclamation doit etre compris entre 1 et 100');
    } else {
        setSuccessFor(nbrReclamation);
    }
}

function validerMontant() {
    const montantValue = montant.value;
    if (montantValue === '' || montantValue === null) {
        setErrorFor(montant, 'Ajoutez un montant ');
    } else if (!valeurMinMax(montantValue, 1, 1000000)) {
        setErrorFor(montant, 'Le montant doit etre compris entre 1 et 1 000 000')
    } else {
        setSuccessFor(montant);
    }
}

function checkInputs() {

    validerDate();
    validerValeur();
    validerAnnee();
    validerNbrKilo();

    if (document.getElementById('reclamation').checked) {
        validerNbrRecla();
        validerMontant();
    }

}



function setErrorFor(input, message) {
    const VerifForm = input.parentElement;
    const small = VerifForm.querySelector('small');
    //add error message inside small
    small.innerText = message;
    //add error class
    VerifForm.className = 'verification-form error';
}

function setSuccessFor(input) {
    const VerifForm = input.parentElement;
    VerifForm.className = 'verification-form success';
}

function valeurMinMax(valeur, min, max) {
    return valeur >= min && valeur <= max;
}
