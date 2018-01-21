    'use strict';

    function obliczZysk() {

        function policzPodatekBelki() {
            var podatek = document.getElementById("podatek").value;
            var oprocentowanie = document.getElementById("oprocentowanie").value / 100;

                var opodatkowano = 0;
                if (document.getElementById("podatek").checked) {
                    podatek == true } else { podatek == false}

                if (podatek == true) {
                    opodatkowano = oprocentowanie * 0.19 } else {
                    opodatkowano = oprocentowanie;
                               
                }
            console.log(opodakowano); 
            }


    }

    obliczZysk();


    function oblicz() {

        var wplata = document.getElementById("wplata").value;
        var kapitalizacja = document.getElementById("czestotliwosc-kapitalizacji").value;
        var lata = document.getElementById("ile-lat").value;
        var oprocentowanie = document.getElementById("oprocentowanie").value / 100;
        var podatek = document.getElementById("podatek").value;

        function policzPodatekBelki() {
            if (document.getElementById("podatek").checked) {
                podatek = true;
            } else {
                podatek = false
            }
        }

        console.log(wplata, kapitalizacja, lata, oprocentowanie, podatek);
    }

    oblicz();
    /*
    $("button").on({

        "click": function (){
            
            
        }
    })*/