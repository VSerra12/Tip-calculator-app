var bill = 0;
var tipPercent = 0;
var people = 0;


function getBill(){
    bill = parseInt(document.getElementById("bill-amount").value);
    isComplete()
}

function getPercent(e){


    if(e.id === "custom-percent"){
        tipPercent = e.value / 100
    }else{
        tipPercent = e.attributes.value.value
        if(document.getElementsByClassName("active").length > 0){
            document.getElementsByClassName("active")[0].classList.remove("active")
        }
        e.classList.add("active")
    }
    isComplete()
}

function getPeople(){
    people = parseInt(document.getElementById("people-amount").value);
    isComplete()
}

function isComplete(){
    if(people > 0){
        calculate()
    }
}

function calculate(){

    var tipAmount = bill * tipPercent;

    var tipAmountPerPerson = tipAmount / people;

    var total = bill + tipAmount;

    var totalPerPerson = total / people;

    document.getElementById("tip").innerHTML = "$" + tipAmountPerPerson;
    document.getElementById("total").innerHTML = "$" + totalPerPerson;

}

function reset(){
    bill = 0;

    document.getElementById("bill-amount").value = null

    tipPercent = 0;

    if(document.getElementsByClassName("active").length > 0){
        document.getElementsByClassName("active")[0].classList.remove("active")
    }

    if(document.getElementById("custom-percent").value !== null){
        document.getElementById("custom-percent").value = null
    }

    people = 0;

    document.getElementById("people-amount").value = null;

    document.getElementById("tip").innerHTML = "$0.00";
    document.getElementById("total").innerHTML = "$0.00";

}