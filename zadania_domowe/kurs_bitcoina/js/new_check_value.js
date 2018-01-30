'use strict';
$(function () {

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
            var newBuy = $("#last-buy").val(sprzedaz);
            var newSell = $("#last-sell").val(kupno);

            console.log("Kurs bitcoina dla Polski to: " + ostatniKurs + symbol + " sprzedaż " + sprzedaz + symbol + " kupno " + kupno + symbol);

            $("#sprawdz-kurs").on({
                "click": function () {
                    $("#kupno").html(kupno + " " + symbol);
                    if ($("#last-buy") < ostatniKurs) {
                        $("#kupno").append('<i class="fa fa-arrow-down fa-2x red" aria-hidden="true"></i>');
                    } else {
                        $("#kupno").append('<i class="fa fa-arrow-up fa-2x green" aria-hidden="true"></i>');
                    }

                    $("#sprzedaz").html(sprzedaz + " " + symbol);
                    if ($("#last-sell") < ostatniKurs) {
                        $("#sprzedaz").append('<i class="fa fa-arrow-down fa-2x red" aria-hidden="true"></i>');
                    } else {
                        $("#sprzedaz").append('<i class="fa fa-arrow-up fa-2x green" aria-hidden="true"></i>');
                    }
                }
            });
        }

    })




});