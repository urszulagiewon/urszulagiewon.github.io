    'use strict';
    $(function () {

        $("#get-id").on({
            "click": function pobierzDane() {

                $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {


                    var nowyKontener = $('<div/>', {
                        id: 'dane-programisty',
                        css: {
                            width: "25vw",
                            height: "auto",
                            padding: "2vw"
                        }
                    });

                    $(nowyKontener).html("Imię: " + data.imie + "<br>" + "Nazwisko: " + data.nazwisko + "<br>" + "Zawód: " + data.zawod + "<br>" + "Firma: " + data.firma);

                    $("body").append(nowyKontener);

                })

            }
        })
        $("#button").onclick(function () {
            "console.log(’test’)"
        });
    });