'use strict';
$(function () {

    $("#sprawdz-kurs").on({
        "click": function () {

            $.ajax({
                url: "https://blockchain.info/pl/ticker?callback=callbackFnc&_=1516902571140",
                type: 'get',
                dataType: "json",
                asnync: "true",
                cache: "true",
                success: function (data) {
                    var kursBitcoina = JSON.stringify(data);
                    var poziomPierwszy = JSON.parse(kursBitcoina);
                    var kursyBitcoina = poziomPierwszy;
                    var polskiKurs = kursyBitcoina.PLN;
                    var ostatniKurs = kursyBitcoina.PLN.last;
                    var sprzedaz = kursyBitcoina.PLN.sell;
                    var kupno = kursyBitcoina.PLN.buy;
                    var symbol = kursyBitcoina.PLN.symbol;


                    $("#kupno").html(kupno + " " + symbol);
                    if (kupno < ostatniKurs) {
                        $("#kupno").append(" w dół").css({
                            "color": "red"
                        });
                    } else {
                        $("#kupno").append(" w górę ").css({
                            "color": "green"
                        });
                    }

                    $("#sprzedaz").html(sprzedaz + " " + symbol);
                    if (sprzedaz < ostatniKurs) {
                        $("#sprzedaz").append(" w dół").css({
                            "color": "red"
                        });
                    } else {
                        $("#sprzedaz").append(" w górę ").css({
                            "color": "green"
                        });
                    }


                    console.log("Kurs bitcoina dla Polski to: " + ostatniKurs + symbol + " sprzedaż " + sprzedaz + symbol + " kupno " + kupno + symbol);
                },
            });
        }
    })
});