var Layout = (function() {
  var i = function() {
    60 < $(window).scrollTop()
      ? $("body").addClass("page-on-scroll")
      : $("body").removeClass("page-on-scroll");
  };
  return {
    init: function() {
      var t, o, a, e;
      i(),
        (function() {
          150 < $(".navbar").offset().top &&
            $(".navbar-fixed-top").addClass("top-nav-collapse"),
            $(window).scroll(function() {
              150 < $(".navbar").offset().top
                ? $(".navbar-fixed-top").addClass("top-nav-collapse")
                : $(".navbar-fixed-top").removeClass("top-nav-collapse");
            });
          var a;
          (a = $(".navbar-fixed-top").height()),
            $(".js_nav-item a").bind("click", function(t) {
              var o = $($(this).attr("href")).offset().top;
              $("html, body")
                .stop()
                .animate({ scrollTop: o - a }, 600),
                t.preventDefault();
            }),
            $(".carousel-centered a").bind("click", function(t) {
              var o = $($(this).attr("href")).offset().top;
              $("html, body")
                .stop()
                .animate({ scrollTop: o - a }, 600),
                t.preventDefault();
            });
          $("body").scrollspy({ target: ".navbar-fixed-top", offset: a + 2 });
          $(window).scroll(function() {
            $(".navbar-collapse.in").collapse("hide");
          });
        })(),
        (t = $(".carousel .item")),
        (o = $(window).height()),
        t.eq(0).addClass("active"),
        t.height(o),
        t.addClass("full-screen"),
        $(".carousel img").each(function() {
          var t = $(this).attr("src"),
            o = $(this).attr("data-color");
          $(this)
            .parent()
            .css({
              "background-image": "url(" + t + ")",
              "background-color": o
            }),
            $(this).remove();
        }),
        $(window).on("resize", function() {
          (o = $(window).height()), t.height(o);
        }),
        $("[data-auto-height]").each(function() {
          var t = $(this),
            o = $("[data-height]", t),
            a = 0,
            e = t.attr("data-mode"),
            i = parseInt(t.attr("data-offset") ? t.attr("data-offset") : 0);
          o.each(function() {
            "height" == $(this).attr("data-height")
              ? $(this).css("height", "")
              : $(this).css("min-height", "");
            var t =
              "base-height" == e
                ? $(this).outerHeight()
                : $(this).outerHeight(!0);
            a < t && (a = t);
          }),
            (a += i),
            o.each(function() {
              "height" == $(this).attr("data-height")
                ? $(this).css("height", a)
                : $(this).css("min-height", a);
            }),
            t.attr("data-related") &&
              $(t.attr("data-related")).css("height", t.height());
        }),
        (a = $(".work-popup-overlay")),
        (e = $(".work-popup-close")),
        $(".work-popup-trigger").on("click", function() {
          $(this)
            .find(".work-popup-overlay")
            .removeClass("work-popup-overlay-show"),
            $(this)
              .find(".work-popup-overlay")
              .addClass("work-popup-overlay-show");
        }),
        e.on("click", function(t) {
          t.stopPropagation(), a.removeClass("work-popup-overlay-show");
        }),
        $(window).scroll(function() {
          i();
        });
    },
    getViewPort: function() {
      var t = window,
        o = "inner";
      return (
        "innerWidth" in window ||
          ((o = "client"), (t = document.documentElement || document.body)),
        { width: t[o + "Width"], height: t[o + "Height"] }
      );
    }
  };
})();
$(document).ready(function() {
  Layout.init();
});
