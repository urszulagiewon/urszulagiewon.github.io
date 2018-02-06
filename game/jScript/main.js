
    'use strict';
function generateNumbers(){


  return Math.floor(Math.random()* 11);
}

var yourNumber = generateNumbers();

 var result;
  
    switch(yourNumber) {
       case 0: 
         result = "Yerba, kawa, herbata? Wybierz mądrze!";
         break;
        case 1: 
          result = "Hej! Ktoś cię lubi!";
          break;
        case 2:
          result = "Zjedz dziś coś dobrego ;)";
          break;
        case 3:
          result = "Kawa nie pyta, kawa rozumie";
          break;
        case 4:
          result = "Zombie zombie zombie a kiwi kiwi kiwi";
          break;
        case 5:
          result = "Programujesz? Programuj!";
          break;
        case 6:
          result = "Uważaj, to wciąga...";
          break;
        case 7:
          result = "Tobie też się nie chce?";
          break;
        case 8:
          result = "Hello! :)";
          break;
        case 9:
          result = "No i tak cały dzień będziesz klikać?";
          break;
        case 10:
          result = "Aaaaaaaaa! Kryć się!";
          break;
    }
console.log(result);

$("button").on({
    "click": function(){
        $("#window").fadeOut(1000).fadeIn(5000);
        $("p").show(3500);
        $("p").append(result);
        $("button").off("click");
    },
});




