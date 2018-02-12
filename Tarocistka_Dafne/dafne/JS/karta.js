"use strict";

$(function(){

function generateCard(){
  return Math.floor(Math.random()* 21);
}
  
  var card = generateCard();

    var yourCard;

    switch(card) {
       case 0: 
         yourCard = "Głupiec - Karta Głupiec jest kojarzona ze spontanicznością, entuzjazmem i nowymi możliwościami. W położeniu prostym wskazuje dobry kierunek zmian, z kolei położenie odwrócone wróży bezmyślne i nieprzyjemne w skutkach postępowanie. Głupiec jest ponadto symbolem braku przywiązania do wartości materialnych, jednocześnie po prostu głupoty ludzkiej. Głupiec w przeciwieństwie do Maga nie zdaje sobie sprawy z tego co posiada (w tobołku na plecach). Reprezentuje nowe ale nie przemyślane działanie. Głupiec daje nam przestrogę – pomyśl zanim coś zrobisz. Osoba, która jest opisana przy pomocy karty Głupca ma tendencję do bagatelizowania różnych spraw oraz do ich spłycania. Kieruje się wyłącznie swoją intuicją, która nie do końca jest poprawnie ukształtowana, dlatego też Głupiec może zachowywać się jak małe dziecko, nie zdając sobie sprawy z konsekwencji swojego postępowania.";
         break;
        case 1: 
          yourCard = "Mag - Znaczenie karty jest związane z psychiką człowieka, przede wszystkim z silną wolą i spontanicznością. Oznacza też pragnienie tworzenia, poznawania nowych spraw i ludzi, a także zamiłowanie do nauki. Położenie proste karty oznacza obecność tych cech, natomiast odwrotne, przeciwnie - ich brak. Mag w przeciwieństwie do Głupca zdaje sobie sprawę z posiadanych przez siebie wartości. Mag to osoba, która posiada wszystko aby móc rozpocząć coś na nowo.";
          break;
        case 2:
          yourCard = "Kapłanka - Karta ta jest kojarzona z uczuciem miłości do drugiego człowieka, a przede wszystkim ze zrozumieniem dla jego problemów. Oznacza też wrażliwość i intuicję, pójście za głosem serca. W położeniu odwrotnym karta symbolizuje obojętność na problemy innych, zarozumialstwo i poczucie wyższości. Karta Papieżycy symbolizuje także dziewictwo i spokój. Papieżyca w negatywnym aspekcie może przedstawiać kochankę lub zdradzającą swojego męża kobietę. Osoba pokazana kartą Papieżycy nigdy nie odkryje całej prawdy przed innymi, potrafi być nad wyraz romantyczna, nie lubi zmieniać zdania, a do celu może iść nawet po trupach. Jej osoba będzie owiana zawsze mgiełką jakiejś tajemnicy.";
          break;
        case 3:
          yourCard = "Cesarzowa - Karta Cesarzowej dotyczy osoby kobiety, jej charakteru i zachowania. W położeniu prostym opisuje kobiece zalety, takie jak piękno, urok osobisty, cierpliwość i umiejętność udzielenia pomocy, zaś położenie odwrócone karty mówi o kobiecych wadach – przede wszystkim zaborczości i przesadnej trosce o innych. Cesarzowa symbolizuje także macierzyństwo i poczucie bezpieczeństwa, płynące z obecności matki.";
          break;
        case 4:
          yourCard = "Cesarz - Karta Cesarza jest związana z instytucją władzy, zarówno politycznej, jak i w charakterze psychologicznego oddziaływania na innych. Karta dotyczy także pracy zawodowej i stanowisk kierowniczych. Położenie proste karty oznacza sprawiedliwe rządy, posiadanie dobrej opinii i autorytetu, a także sukces zawodowy. Z kolei położenie odwrócone kojarzy się z nieudolnością i utratą kontroli nad podwładnymi, albo przeciwnie - autorytaryzmem. Władzą w tym kontekście jest też instytucja ojca rodziny, tak więc tego również dotyczy karta Cesarza.";
          break;
        case 5:
          yourCard = "Papież - Karta Papieża jest symbolem pobożności i konserwatyzmu. Oznacza osobę mającą wielki autorytet, niekoniecznie duchownego - także na przykład nauczyciela. Kojarzona jest z potrzebą uzyskania fachowej porady, albo pomocy w problemach duchowych. Dotyczy także ogólnie zainteresowania sprawami duchowymi i potrzebą uzyskania przebaczenia.";
          break;
        case 6:
          yourCard = "Kochankowie - Znaczenie karty Kochankowie jest związane z dylematem dotyczącym uczuć, najczęściej spowodowanym koniecznością wyboru jednej miłości, a odrzuceniem innej. W pozycji prostej karta oznacza uczucie samo w sobie, często niespodziewane. W pozycji odwróconej karta bywa kojarzona z rozpadem związku, separacją, czy rozwodem, albo niewłaściwym wyborem obiektu uczuć. Karta Kochanków jest także kojarzona z instytucją małżeństwa, sprawami seksualnymi i miłością w ogóle.";
          break;
        case 7:
          yourCard = "Rydwan - Karta Rydwanu dotyczy zamierzeń i dążenia do ustalonego celu. W położeniu prostym oznacza próbę osiągnięcia sukcesu za wszelką cenę, zakończoną sukcesem. Z kolei w położeniu odwrotnym karta ma znaczenie złowróżbne - sugeruje zdążanie do katastrofy i utratę kontroli nad sytuacją. Ogólnie karta dotyczy także panowania nad samym sobą, a także podróż.";
          break;
        case 8:
          yourCard = "Sprawiedliwość - Ta karta kojarzy się z zakończeniem procesu sądowego, ale także rozwiązaniem jakiegoś problemu. Ma przeciwstawne znaczenia w zależności od położenia - prosta symbolizuje wyrok sprawiedliwy, właściwą i tolerancyjną ocenę postępowania; przeciwnie odwrócona, która oznacza niesprawiedliwą ocenę i nieuczciwe potraktowanie. Karta ta jest także ogólnym symbolem spraw związanych z wymiarem sprawiedliwości i przestępstwami.";
          break;
        case 9:
          yourCard = "Eremita - Karta Eremity oznacza mądrość, doświadczenie, umiejętność podejmowania ważnych decyzji, uporządkowanie życia. Kojarzona bywa z zainteresowaniem psychologią, sztukami magicznymi i poszukiwaniem drogi do poznania prawdy. Bywa też symbolem samotności i opuszczenia, czy też zamknięcia się w sobie.";
          break;
        case 10:
          yourCard = "Koło fortuny - Koło Fortuny symbolizuje zmienność losu i dalszy przebieg wypadków. W postaci prostej najczęściej oznacza powodzenie, szczęście - w miłości, pracy zawodowej; także zdobycie pieniędzy bądź względów ukochanej osoby. Przeciwne znaczenie ma karta odwrócona, która jest kojarzona z nieszczęśliwymi zrządzeniami losu, czyli po prostu pechem - w różnych dziedzinach życia.";
          break;
        case 11: 
         yourCard = "Moc - Karta Mocy przedstawia młodą osobę (mężczyznę lub kobietę) ujarzmiającą lwa. Czasem przedstawiana jest postać gładząca dzikie zwierzę po głowie. W wersji uproszczonej na karcie widoczny jest Herkules lub Herakles walczący z lwem (w przypadku Heraklesa będzie to lew nemejski).";
         break;
        case 12: 
          yourCard = "Wisielec - Karta Wisielca oznacza zastój, brak działania. Jest symbolem medytacji i rozmyślań, duchową izolacją od świata i skupieniem się na własnym wnętrzu. Czasem bywa kojarzona z człowiekiem rozmyślającym nad własnymi problemami. Wyraz twarzy postaci na karcie pozwala też interpretować ją jako symbol błogości i zadowolenia z ustabilizowanego życia.";
          break;
        case 13:
          yourCard = "Śmierć - Mimo stereotypu, że karta Śmierci oznacza śmierć w dosłownym znaczeniu (utrwalonego m.in. przez charakterystyczne sceny filmowe, w których wróżbita pokazuje tę właśnie kartę), znaczenie karty dotyczy przejścia - z jednego etapu życia w drugi. Może ona stanowić symbol duchowego odrodzenia - jak i znalezienia się w trudnej sytuacji.";
          break;
        case 14:
          yourCard = "Umiarkowanie - Znaczenie karty Umiarkowania związane jest z jej nazwą - dotyczy przywiązania, domatorstwa, bycia rozważnym i skromnym. W położeniu prostym oznacza wynikające z tego szczęście, połączone z koniecznością cierpliwego zastanowienia się nad życiem. W położeniu odwrotnym oznacza wewnętrzne konflikty, przewrażliwienie i ogólną niemożność dojścia do porozumienia.";
          break;
        case 15:
          yourCard = "Diabeł - Karta Diabła ogólnie symbolizuje zło biorące się z ludzkiego egoizmu. Oznacza ona niemoralne postępowanie, zniszczenie, krzywdzenie innych. Karta jest także kojarzona z materialistycznym podejściem do życia, uzależnieniami, wreszcie dotyczy również czarnej magii.";
          break;
        case 16:
          yourCard = "Wieża - Jest to jedna z najbardziej złowróżbnych kart tarota, o znaczeniu podobnym, jak stereotypowa interpretacja karty Śmierć. Oznacza niespodziewane całkowite zniszczenie, utratę własności, problemy uczuciowe, także poważną chorobę. Symbolizuje także rozpacz po utracie czegoś wartościowego.";
          break;
        case 17:
          yourCard = "Gwiazda - Karta jest symbolem młodości i dorastania, a także rozwoju duchowego. W położeniu prostym oznacza ład i harmonię wewnętrzną, dorastanie w niewinności, a także spotkanie właściwego partnera życiowego. Z kolei w położeniu odwróconym karta symbolizuje niepokój i nieudane życie uczuciowe.";
          break;
        case 18:
          yourCard = "Księżyc - Karta oznacza błędne pojmowanie świata, oszustwo i otaczające kłamstwa. Symbolizuje niezrozumienie pewnych spraw, często irytujące i wzbudzające wewnętrzny niepokój. Może także oznaczać samooszukiwanie się, życie w iluzji. Jest także symbolem choroby psychicznej.";
          break;
        case 19:
          yourCard = "Słońce - Podobnie jak Świat, karta Słońca jest uważana za dobrą wróżbę. Oznacza ona szczęście, przede wszystkim w życiu uczuciowym, a także szczerą przyjaźń i zaufanie. Symbolizuje także dzieciństwo. W położeniu odwróconym ma odwrotne znaczenie, symbolizując samotność i odtrącenie.";
          break;
        case 20:
          yourCard = "Sąd ostateczny - Karta Sądu Ostatecznego oznacza nowość w życiu i nadchodzące zmiany. Bywa kojarzona z wyzdrowieniem z choroby, zakończeniem problemów duchowych albo ustąpieniem jakichś przeszkód. Karta ta jest także symbolem przebaczenia i – ogólniej – życia religijnego.";
          break;
        case 21:
          yourCard = "Świat - Karta ta jest uważana za symbolizującą szczęście, powodzenie i radość. Oznacza także spełnienie marzeń i wiele sukcesów we wszystkich dziedzinach życia. W położeniu odwróconym bywa uważana za symbol wahania przed przyjęciem nadchodzącego szczęścia, a czasem także za przeciwieństwo podstawowego znaczenia - czyli nadchodzący ogrom cierpień i nieszczęść.";
          break;
            
    }
    
var buttonChoose = $('<button/>',
					{
					text: 'sprawdź kolejną',
					id: 'chooseAgain'
					});
	
    console.log(yourCard);
  $("#check").on({
    "click": function(){
        $("#your-card").append(yourCard);
        $("#check").off("click");
		$("#daily-card").append(buttonChoose);
        
    }
  });
  
  $(buttonChoose).on({
    "click": function(){
		location.reload();
    }
  });
    
    });
    
// JavaScript Document