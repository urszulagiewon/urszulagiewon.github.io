    'use strict';
    $(function () {
        /* Scroll */
        $(window).scroll(function () {
            var win = $(window);
            if (win.scrollTop() >= 50) {
                $("#main-nav").addClass("changeNav")
            } else {
                $("#main-nav").removeClass("changeNav");
            }
        });

        /* Nawigacja po stronie */
        $('a[href^="#"]').on("click", function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $("html, body").stop().animate({
                "scrollTop": $target.offset().top
            }, 1000, "swing", function () {
                window.location.hash = target;
            })
        })

        /* animacja umiejętności */


        $("#skill").on({
            "click": function () {
                $("#indesign").animate({
                    "backgroundColor": "#A0D329",
                    "width": "100%",
                    "height": "1.5em"
                }, 3000, function () {
                    $("#indesign").append("<p>Indesign na 100%!</p>")
                });
                $("#photoshop").animate({
                    "backgroundColor": "#A0D329",
                    "width": "100%",
                    "height": "1.5em"
                }, 3000, function () {
                    $("#photoshop").append("<p>Photoshop na 100%!</p>")
                });
                $("#illustrator").animate({
                    "backgroundColor": "#A0D329",
                    "width": "100%",
                    "height": "1.5em"
                }, 3000, function () {
                    $("#illustrator").append("<p>Illustrator na 100%!</p>")
                });
                $("#corel").animate({
                    "backgroundColor": "#DB9E1D",
                    "width": "50%",
                    "height": "1.5em"
                }, 3000, function () {
                    $("#corel").append("<p>Corel na 50%, ale mogę się nauczyć ;)</p>");
                });
                $("#html").animate({
                    "backgroundColor": "#2D0D4A",
                    "width": "60%",
                    "height": "1.5em",
                    "color": "white"
                }, 3000, function () {
                    $("#html").append("<p>Jest nieźle i cały czas się uczę! ;)</p>")
                });
                $("#css").animate({
                    "backgroundColor": "#2D0D4A",
                    "width": "60%",
                    "height": "1.5em",
                    "color": "white"
                }, 3000, function () {
                    $("#css").append("<p>Jest nieźle i cały czas się uczę! ;)</p>")
                });
                $("#javascript").animate({
                    "backgroundColor": "#3539DF",
                    "width": "50%",
                    "height": "1.5em",
                    "color": "white"
                }, 3000, function () {
                    $("#javascript").append("<p>Zaczynamy się rozumieć i lubić ;)</p>")
                });
                $("#github").animate({
                    "backgroundColor": "#2D1C6E",
                    "width": "70%",
                    "height": "1.5em",
                    "color": "white"
                }, 3000, function () {
                    $("#github").append("<p>Lubimy się wzajemnie! Kontrola wersji jest super!</p>")
                });

            }

        });


        /* $("#ind").on({
             "click": function () {
                 $("#indesign").animate({
                     "backgroundColor": "#A0D329",
                     "width": "100%",
                     "height": "1em"
                 }, 3000, function () {
                     $("#indesign").append("<p>Indesign na 100%!</p>")
                 });
             }
         });*/
        /*
                $("#ps").on({
                    "click": function () {
                        $("#photoshop").animate({
                            "backgroundColor": "#A0D329",
                            "width": "100%",
                            "height": "1em"
                        }, 3000, function () {
                            $("#photoshop").append("<p>Photoshop na 100%!</p>")
                        });
                    }
                });*/


        /*        $("#il").on({
                    "click": function () {
                        $("#illustrator").animate({
                            "backgroundColor": "#A0D329",
                            "width": "100%",
                            "height": "1em"
                        }, 3000, function () {
                            $("#illustrator").append("<p>Illustrator na 100%!</p>")
                        });
                    }
                });*/

        /*        $("#cor").on({
                    "click": function () {
                        $("#corel").animate({
                            "backgroundColor": "#DB9E1D",
                            "width": "50%",
                            "height": "1em"
                        }, 3000, function () {
                            $("#corel").append("<p>Corel na 50%, ale mogę się nauczyć ;)</p>");
                        });
                    }
                });*/

        /*
                $("#htm").on({
                    "click": function () {
                        $("#html").animate({
                            "backgroundColor": "#2D0D4A",
                            "width": "60%",
                            "height": "1em",
                            "color": "white"
                        }, 3000, function () {
                            $("#html").append("<p>Jest nieźle i cały czas się uczę! ;)</p>")
                        });
                    }
                });
        */

        /*  $("#c-s-s").on({
              "click": function () {
                  $("#css").animate({
                      "backgroundColor": "#2D0D4A",
                      "width": "60%",
                      "height": "1em",
                      "color": "white"
                  }, 3000, function () {
                      $("#css").append("<p>Jest nieźle i cały czas się uczę! ;)</p>")
                  });
              }
          });*/
        /*
                $("#java").on({
                    "click": function () {
                        $("#javascript").animate({
                            "backgroundColor": "#3539DF",
                            "width": "50%",
                            "height": "1em",
                            "color": "white"
                        }, 3000, function () {
                            $("#javascript").append("<p>Zaczynamy się rozumieć i lubić ;)</p>")
                        });
                    }
                });*/

   /*     $("#git").on({
            "click": function () {
                $("#github").animate({
                    "backgroundColor": "#2D1C6E",
                    "width": "70%",
                    "height": "1em",
                    "color": "white"
                }, 3000, function () {
                    $("#github").append("<p>Lubimy się wzajemnie! Kontrola wersji jest super!</p>")
                });
            }
        });*/

    });