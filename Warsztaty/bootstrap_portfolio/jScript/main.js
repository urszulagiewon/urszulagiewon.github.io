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



        $("#ind").on({
            "click": function () {
                $("#indesign").animate({
                    "backgroundColor": "#A0D329",
                    "width": "100%",
                    "height": "1em"
                }, 3000, function(){
                    $("#ind").append("<p>Indesign na 100%!</p>").css({"padding":"0.5em"});
                });
            }
        });

        $("#ps").on({
            "click": function () {
                $("#photoshop").animate({
                    "backgroundColor": "#A0D329",
                    "width": "100%",
                    "height": "1em"
                }, 3000, function(){
                    $("#ps").append("<p>Photoshop na 100%!</p>").css({"padding-top":"0.5em"});
                });
            }
        });


        $("#il").on({
            "click": function () {
                $("#illustrator").animate({
                    "backgroundColor": "#A0D329",
                    "width": "100%",
                    "height": "1em"
                }, 3000, function(){
                    $("#il").append("<p>Illustrator na 100%!</p>").css({"padding-top":"0.5em"});
                });
            }
        });

        $("#cor").on({
            "click": function () {
                $("#corel").animate({
                    "backgroundColor": "#DB9E1D",
                    "width": "50%",
                    "height": "1em"
                }, 3000, function(){
                    $("#cor").append("<p>Corel na 50%, ale mogę się nauczyć ;)</p>").css({"padding-top":"0.5em"});
                });
            }
        });


    });