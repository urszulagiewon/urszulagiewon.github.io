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
        });

        
        /*$("#main-me").on({
            "click": function(){  
            $("#about-me").text("My work is my passion - it’s neccessery to be the best in your job. My second name is ambition and  determination. If I want to achieve something - I’ll do it. I’m also a support for my team. I know that’s one of the most important thing to create good working group. Happy owner of two siberian cats and dream about own horse "),
                
            }
        })*/
        
        
        $("#main-me").on({
            "dblclick": function(){
                $("#about-me").text('My work is my passion - it’s neccessery to be the best in your job. My second name is ambition and  determination. If I want to achieve something - I’ll do it. I’m also a support for my team. I know that’s one of the most important thing to create good working group. Happy owner of two siberian cats and dream about own horse')
            },
            "click": function(){
                $("#about-me").text('Do wszystkiego co robię podchodzę z pasją. Ambicja oraz wytrwałość to moje drugie imiona. Niestraszne mi deadliny, praca pod presją czasu ani współpraca z klientem. Swojemu zespołowi oddaję całe swoje serce, staram się być mocną podporą oraz wsparciem, na które może liczyć. Kocham nowe wyzwania!')
            }
    
        });
        
        $("#expir").on({
            "click": function(){
                $("#exp").show(3000);
            }
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
                    "backgroundColor": "#DDF744",
                    "width": "50%",
                    "height": "1.5em"
                }, 3000, function () {
                    $("#corel").append("<p>Corel na 50%, ale mogę się nauczyć ;)</p>");
                });
                $("#html").animate({
                    "backgroundColor": "#DDF744",
                    "width": "60%",
                    "height": "1.5em",
                    "color": "#969696"
                }, 3000, function () {
                    $("#html").append("<p>Jest nieźle i cały czas się uczę! ;)</p>")
                });
                $("#css").animate({
                    "backgroundColor": "#DDF744",
                    "width": "60%",
                    "height": "1.5em",
                    "color": "#969696"
                }, 3000, function () {
                    $("#css").append("<p>Jest nieźle i cały czas się uczę! ;)</p>")
                });
                $("#javascript").animate({
                    "backgroundColor": "#DDF744",
                    "width": "50%",
                    "height": "1.5em",
                    "color": "#969696"
                }, 3000, function () {
                    $("#javascript").append("<p>Zaczynamy się rozumieć i lubić ;)</p>")
                });
                $("#github").animate({
                    "backgroundColor": "#DDF744",
                    "width": "70%",
                    "height": "1.5em",
                    "color": "#969696"
                }, 3000, function () {
                    $("#github").append("<p>Lubimy się wzajemnie! Kontrola wersji jest super!</p>")
                });
                $("#skill").off("click");
            }

        });


      
    });