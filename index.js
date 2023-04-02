var bill;
var tipPercent;
var people;

window.onload = function(){

    document.getElementById("bill-amount").addEventListener('change', getBill());
    document.getElementById("percent-box").addEventListener('change', getPercent());
    document.getElementById("people-amount").addEventListener('chenge', getPeople());


}


function getBill(){
    bill = document.getElementById("bill-amount").value;
}

function getPercent(){

}

function getPeople(){
    people = document.getElementById("people-amount").value;
}