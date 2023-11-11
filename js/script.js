
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

//make questions required si on click sur oui pour reclamations
function clickHandler(radio) {
  
    document.getElementById("nbrReclamation").required = radio.checked;
    document.getElementById("montant").required = radio.checked;
    
 }
