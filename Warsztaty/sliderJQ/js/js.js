    'use strict';
$(function( ){

  
  var slideshow = $(".karuzela");
    var iloscSlajdow = $("pojedynczy-slide").length;
    var szerokoscSlajdu = 100 / iloscSlajdow;
    var numerSlajdu = 0;
  
    console.log(slideshow, iloscSlajdow);
  
  slideshow.css({"width" : iloscSlajdow + "00%"});
  
  
  })