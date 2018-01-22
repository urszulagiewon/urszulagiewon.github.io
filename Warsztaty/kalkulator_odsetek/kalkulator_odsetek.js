    'use strict';


function oblicz() {

    var wplata = parseInt(document.getElementById("wplata").value);
//    var kapitalizacjaOdsetek = document.getElementById("czestotliwosc-kapitalizacji").value;
    var lata = parseInt(document.getElementById("ile-lat").value);
    var oprocentowanie = parseInt(document.getElementById("oprocentowanie").value) / 100;
    var podatek = document.getElementById("podatek").value;
        
        if(document.getElementById("podatek").checked) {
            var opodatkowaneOprocentowanie = oprocentowanie * 0.19;
        }
    

}

console.log(wplata, lata, oprocentowanie, podatek);


oblicz();
/*
$("button").on({

    "click": function (){
        
        
    }
})*/