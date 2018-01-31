
    'use strict';
function generateNumbers(){


  return Math.floor(Math.random()* 11);
}

var yourNumber = generateNumbers();

 var result;
  
    switch(yourNumber) {
       case 0: 
         result = "Uśmiechnij się, to będzie dobry dzień!";
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
          result = "Dam Ci kwiatka :)";
          break;
        case 5:
          result = "Możesz nie wierzyć w pizzę, ale ona w Ciebie wierzy!";
          break;
        case 6:
          result = "Hello! :)";
          break;
        case 7:
          result = "Tobie też się nie chce?";
          break;
        case 8:
          result = "No kliknij, kliknij";
          break;
        case 9:
          result = "Idę sobie, naprawdę!";
          break;
        case 10:
          result = "Lody czekoladowe czy waniliowe?";
          break;
    }
console.log(result);

$("button").on({
    "click": function(){
        $("p").append(result);
        $("button").off("click");
    },
});




