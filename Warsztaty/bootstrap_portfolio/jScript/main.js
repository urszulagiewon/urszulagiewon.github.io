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

    });