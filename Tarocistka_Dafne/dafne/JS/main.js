$(function () {
    'use strict';

    $("#tarot").on({
        "click": function () {

            $("#about-tarot").append("<p>Tarot posiada swoją nazwę ezoteryczną tj. Ksiąga Thoth związaną z egipskim bogiem magii. Talia Tarota jest złożona z 78 kart, podzielonych na 22 wielkie arkana oraz 56 małych arkan. Samych Talii kart Tarota istnieje kilka: Tarot Inicjacyjny Zakonu Złotego Brzasku, Marsylski, Świetlistej Drogi czy choćby Maroon.</p><p> Choć pochodzenie tarota jest dotychczas niepotwierdzone ponad wszelką wątpliwość, to podejrzewa się, że Tarot narodził się w Egipcie, a do Europy dotarł za sprawą Cygan.Inne źródła wskazują, że swój początek miał w Chinach.Istnieje przekonanie, że to nie wróżbita wybiera sobie talię kart Tarota a Tarot wróżbitę.Karty te generują w ludziach energię zdolną do eksploracji najskrytszych obszarów naszej podświadomości, samopoznania.</p><p> Do swobodnego i trafnego odczytania Tarota niezbędna jest wytrwałość i obszerny zasób wiedzy.Tarot nigdy się nie myli.Trzeba jednak liczyć się z tym, że kart Tarota nie powinniśmy pytać o błahostki, a także o kwestie śmierci. </p><br/>")
            $("#tarot").off("click");
            $()

        }
    })
/*    
<button id='hide1'>Ukryj</button>
  $("#hide1").on({
        "ondblclick": function(){
            $("#about-tarot").hide();
        }
    })*/
    $("#kamienie").on({
        "click": function () {

            $("#about-stones").append("<p>Tarot posiada swoją nazwę ezoteryczną tj. Ksiąga Thoth związaną z egipskim bogiem magii. Talia Tarota jest złożona z 78 kart, podzielonych na 22 wielkie arkana oraz 56 małych arkan. Samych Talii kart Tarota istnieje kilka: Tarot Inicjacyjny Zakonu Złotego Brzasku, Marsylski, Świetlistej Drogi czy choćby Maroon.</p><p> Choć pochodzenie tarota jest dotychczas niepotwierdzone ponad wszelką wątpliwość, to podejrzewa się, że Tarot narodził się w Egipcie, a do Europy dotarł za sprawą Cygan.Inne źródła wskazują, że swój początek miał w Chinach.Istnieje przekonanie, że to nie wróżbita wybiera sobie talię kart Tarota a Tarot wróżbitę.Karty te generują w ludziach energię zdolną do eksploracji najskrytszych obszarów naszej podświadomości, samopoznania.</p><p> Do swobodnego i trafnego odczytania Tarota niezbędna jest wytrwałość i obszerny zasób wiedzy.Tarot nigdy się nie myli.Trzeba jednak liczyć się z tym, że kart Tarota nie powinniśmy pytać o błahostki, a także o kwestie śmierci. </p>")
            $("#kamienie").off("click");

        }
    })

        $("#gypsy").on({
        "click": function () {

            $("#about-gypsy").append("<p>Karty Cygańskie, potocznie nazywane także Tarotem Cygańskim, składa się z 36 kart, których wizerunki (obrazki) są niezwykle wyraźne.</p><p>Mogą być stosowane na wiele sposobów, poprzez wykorzystanie jednej karty (tzw. karta dnia) lub w bardziej złożony sposób np. poprzez konkretne rozkłady kart. Stosowane jest także rozkład 36 kart, gdzie zadaje się swoje własne pytania.</p>")
            $("#gypsy").off("click");

        }
    })
    
    
})